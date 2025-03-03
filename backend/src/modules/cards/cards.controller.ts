import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CardsService } from './cards.service';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('paisabank/cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getCards(@Req() request) {
    const userId = request.userId;
    const cards = await this.cardsService.getCards(userId);

    return {
      success: true,
      data: cards,
    };
  }
}
