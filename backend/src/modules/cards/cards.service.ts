import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/db/entities/Cards.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {
    // Inicializar datos de ejemplo si no existen
    this.initializeCards();
  }

  async getCards(userId: number): Promise<Card[]> {
    return this.cardsRepository.find({ where: { userId } });
  }

  private async initializeCards() {
    const count = await this.cardsRepository.count();
    if (count === 0) {
      // Crear tarjetas de ejemplo para el usuario 1
      await this.cardsRepository.save([
        {
          userId: 1,
          issuer: 'Mastercard',
          name: 'Platinum',
          expDate: '12/26',
          lastDigits: 4567,
          balance: '15000.00',
          currency: 'USD',
        },
        {
          userId: 1,
          issuer: 'Visa',
          name: 'Gold',
          expDate: '06/25',
          lastDigits: 8901,
          balance: '8500.00',
          currency: 'USD',
        },
      ]);
    }
  }
}
