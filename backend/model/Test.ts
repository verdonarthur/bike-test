import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { Edition } from './Edition';
import { Product } from './Prod';

@Entity({ name: 'TEST' })
export class Test extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Num' })
  id: number;

  @Column('timestamp', { name: 'HeureDebut' })
  startHourDate: Date;

  @Column('timestamp', { nullable: true, name: 'HeureFin' })
  endHourDate: Date;

  @Column('text', { nullable: true, name: 'Feedback' })
  feedback: string;

  @ManyToOne(
    type => Edition,
    edition => edition.tests
  )
  edition: Edition;

  @ManyToOne(
    type => Product,
    product => product.tests
  )
  product: Product;
}
