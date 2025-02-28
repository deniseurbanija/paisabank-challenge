import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Cards } from './Cards.entity';
import { Transactions } from './Transactions.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  cards: Cards[];
  @Column()
  transactions: Transactions[];
}
