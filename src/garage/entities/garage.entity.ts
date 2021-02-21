import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { MechanicEntity } from '../../mechanic/entity/mechanic.entity';

@Entity('garages')
export class GarageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => MechanicEntity, mechanic => mechanic.garage)
  mechanics: MechanicEntity[];

}

