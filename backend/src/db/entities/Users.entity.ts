import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from './Cards.entity';
import { Transaction } from './Transactions.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  password: string;

  @OneToMany(() => Card, (cards) => cards.user)
  cards: Card[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
}
