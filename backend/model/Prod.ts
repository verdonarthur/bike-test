import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Test } from './Test';

@Entity({ name: 'PROD' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Num' })
  id: number;

  @Column('varchar', { length: 50, name: 'Nom' })
  name: string;

  @Column('varchar', { length: 50, nullable: true, name: 'Marque' })
  brand: string;

  @Column('varchar', { length: 50, nullable: true, name: 'ValeurAffichee' })
  dispalyedValue: string;

  @Column('text', { nullable: true, name: 'Descr' })
  description: string;

  @OneToMany(
    type => Test,
    test => test.edition
  )
  tests: Test[];
}
