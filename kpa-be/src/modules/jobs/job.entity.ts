import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  pickupLocation: string;

  @Column()
  dropoffLocation: string;

  @Column()
  status: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('uuid', { nullable: true })
  driverId: string | null;

  @CreateDateColumn()
  createdAt: Date;
}
