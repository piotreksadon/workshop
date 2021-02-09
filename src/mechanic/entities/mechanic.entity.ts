import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mechanic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mechanicName: string;

  @Column()
  mechanicLastName: string;

  @Column()
  mechanicEmail: string;
}
