import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './Users.entity';

@Entity('cards')
export class Cards {
  @PrimaryGeneratedColumn()
  id: number;
  @Column() // should i add more details?
  issuer: string;
  @Column()
  name: string;
  @Column({ length: 5 }) // e.g. 03/29
  expDate: string;
  @Column({ length: 4 })
  lastDigits: number;
  @Column()
  balance: string;
  @Column()
  currency: string;
  @ManyToOne(() => User, (user) => user.cards)
  user: User;
}
