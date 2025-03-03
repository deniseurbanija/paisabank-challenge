import { Body, Controller, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { GetUser } from 'src/decorators/user.decorator';

@Controller('paisabank/movements')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('last')
  async getLastMovements(@Query('userId') userId: number) {
    try {
      const transactions =
        await this.transactionsService.findLastTransactions(userId);

      return {
        success: true,
        data: transactions,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get('all')
  async getAllMovements(
    @Body() userId: number,
    @Query('filter') transactionType?: string,
  ) {
    try {
      const transactions = await this.transactionsService.findAllTransactions(
        userId,
        transactionType,
      );

      return {
        success: true,
        data: transactions,
      };
    } catch (error) {
      return {
        success: false,
        data: [],
      };
    }
  }
}
