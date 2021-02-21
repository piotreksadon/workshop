import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MechanicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  mechanicName: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  mechanicLastName: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  mechanicEmail: string;
}
