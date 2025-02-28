import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TransactionType {
  SUS = 'SUS',
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  amount: string;
  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  transactionType: TransactionType;
  @Column()
  date: string;
}
