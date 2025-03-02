import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Transaction,
  TransactionType,
} from 'src/db/entities/Transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,
  ) {}
  async findLastTransactions(
    userId: number,
    limit: number = 5,
  ): Promise<Transaction[]> {
    return this.transactionsRepository.find({
      where: { userId },
      order: { date: 'DESC' },
      take: limit,
    });
  }

  async findAllTransactions(
    userId: number,
    transactionType?,
  ): Promise<Transaction[]> {
    const query = { userId };

    if (transactionType) {
      return this.transactionsRepository.find({
        where: {
          userId,
          transactionType,
        },
      });
    }

    return this.transactionsRepository.find({
      where: query,
    });
  }
}
