import { IsOptional, IsString, IsIn } from 'class-validator';

export class FilterTransactionsDto {
  @IsOptional()
  @IsString()
  @IsIn(['SUS', 'CASH_IN', 'CASH_OUT'])
  filter?: string;
}
