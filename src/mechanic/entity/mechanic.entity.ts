import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import { CarEntity } from '../../car/entity/car.entity';
import { GarageEntity } from '../../garage/entities/garage.entity';

@Entity('mechanics')
export class MechanicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  mechanicName: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  mechanicLastName: string;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 100 })
  mechanicEmail: string;

  @Column({ nullable: false, type: 'integer'})
  garageId: number;

  @OneToMany(() => CarEntity, cars => cars.mechanic)
  cars: CarEntity[];

  @ManyToOne(() => GarageEntity, garage =>garage.mechanics)
  garage: GarageEntity;
}
