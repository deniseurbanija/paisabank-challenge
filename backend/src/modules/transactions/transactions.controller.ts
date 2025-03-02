import { Controller, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { GetUser } from 'src/decorators/user.decorator';

@Controller('paisabank/movements')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('last')
  async getLastMovements(@GetUser() user) {
    try {
      const transactions = await this.transactionsService.findLastTransactions(
        user.id,
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

  @Get('all')
  async getAllMovements(
    @GetUser() user,
    @Query('filter') transactionType?: string,
  ) {
    try {
      const transactions = await this.transactionsService.findAllTransactions(
        user.id,
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
