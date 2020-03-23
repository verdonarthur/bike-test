import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from 'typeorm';
import { Test } from './Test';

@Entity({ name: 'ED' })
export class Edition extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Num' })
  id: number;

  @Column('varchar', { length: 50, name: 'Nom' })
  name: string;

  @Column('date', { name: 'DateDebut' })
  startDate: Date;

  @Column('date', { name: 'DateFin' })
  endDate: Date;

  @Column('text', { nullable: true, name: 'Lieu' })
  location: string;

  @OneToMany(
    type => Test,
    test => test.edition
  )
  tests: Test[];
}
