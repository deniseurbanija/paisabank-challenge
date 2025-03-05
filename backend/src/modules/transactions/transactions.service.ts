import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/db/entities/Transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,
  ) {
    // Inicializar datos de ejemplo si no existen
    this.initializeTransactions();
  }

  async findLastTransactions(userId: number): Promise<Transaction[]> {
    console.log(userId);

    return this.transactionsRepository.find({
      where: { userId: 1 },
      order: { date: 'DESC' },
      take: 5,
    });
  }

  async findAllTransactions(
    userId: number,
    transactionType?: string,
  ): Promise<Transaction[]> {
    console.log(
      'Buscando transacciones para usuario:',
      userId,
      'tipo:',
      transactionType,
    );
    const queryBuilder = this.transactionsRepository
      .createQueryBuilder('transaction')
      .where('transaction.userId = 1')
      .orderBy('transaction.date', 'DESC');

    if (transactionType) {
      queryBuilder.andWhere('transaction.transactionType = :transactionType', {
        transactionType,
      });
    }

    return queryBuilder.getMany();
  }

  private async initializeTransactions() {
    const count = await this.transactionsRepository.count();
    if (count === 0) {
      const transactions = [];
      const types = ['SUS', 'CASH_IN', 'CASH_OUT'];
      const titles = [
        'Pago de Alquiler',
        'Transferencia recibida',
        'Pago de Servicios',
        'Salario',
        'Compra Supermercado',
        'Subscripción Netflix',
        'Transferencia a Juan',
        'Retiro de Cajero',
        'Depósito',
        'Pago Tarjeta Crédito',
      ];

      for (let i = 0; i < 20; i++) {
        const typeIndex = i % 3;
        const titleIndex = i % 10;

        let amount: string;
        amount = (Math.random() * 1000 + 100).toFixed(2);

        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));

        transactions.push({
          userId: 1,
          title: titles[titleIndex],
          amount: amount,
          transactionType: types[typeIndex],
          date: date.toISOString(),
        });
      }

      await this.transactionsRepository.save(transactions);
    }
  }
}
