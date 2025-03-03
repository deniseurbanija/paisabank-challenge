import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { FilterTransactionsDto } from './dto/filter-transactions.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('paisabank/movements')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('last')
  @UseGuards(AuthGuard)
  async getLastMovements(@Req() request) {
    const userId = request.userId;
    const transactions =
      await this.transactionsService.findLastTransactions(userId);

    return {
      success: true,
      data: transactions,
    };
  }

  @Get('all')
  @UseGuards(AuthGuard)
  async getAllMovements(
    @Req() request,
    @Query() filterDto: FilterTransactionsDto,
  ) {
    const userId = request.userId;
    const transactions = await this.transactionsService.findAllTransactions(
      userId,
      filterDto.filter,
    );

    return {
      success: true,
      data: transactions,
    };
  }
}
