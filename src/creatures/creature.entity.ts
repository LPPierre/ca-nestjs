import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Box } from 'src/boxes/box.entity';

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    type: number

    @ManyToOne(type => Box, box => box.creatures)
    box: Box;
}