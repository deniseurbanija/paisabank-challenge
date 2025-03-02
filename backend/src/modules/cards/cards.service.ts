import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cards } from 'src/db/entities/Cards.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards)
    private readonly cardsRepository: Repository<Cards>,
  ) {}
  async getCards() {
    try {
      const cards = await this.cardsRepository.find();

      if (cards.length == 0) {
        throw new NotFoundException('There are no cards for this user');
      }

      return {
        success: true,
        data: cards,
      };
    } catch (error) {
      throw error;
    }
  }
}
