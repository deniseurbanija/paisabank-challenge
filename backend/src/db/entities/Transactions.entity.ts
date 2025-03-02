import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './Users.entity';

export enum TransactionType {
  SUS = 'SUS',
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 8 })
  amount: string;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  transactionType: TransactionType;

  @Column({ length: 8 })
  date: string;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;
}
