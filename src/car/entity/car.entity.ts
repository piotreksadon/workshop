import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  brand: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  model: string;

  @Column({ nullable: false, name: 'production_year', type: 'integer' })
  productionYear: number;

  @Column({ nullable: false, name: 'repair_note', type: 'varchar', length: 500 })
  repairNote: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  color: string;
}
