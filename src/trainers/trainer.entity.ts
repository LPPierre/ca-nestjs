import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Box } from 'src/boxes/box.entity';

@Entity()
export class Trainer {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Box, box => box.trainer)
    boxes: Box[];
}