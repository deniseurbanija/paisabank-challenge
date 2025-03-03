import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './Users.entity';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  issuer: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 5 }) // e.g. 03/29
  expDate: string;

  @Column()
  lastDigits: number;

  @Column()
  balance: string;

  @Column({ length: 3, default: 'USD' })
  currency: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.cards)
  user: User;
}
