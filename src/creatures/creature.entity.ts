import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Box } from '../boxes/box.entity';

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    type: string

    @Column()
    boxId: number;

    @ManyToOne(type => Box, box => box.creatures)
    @JoinColumn({name: 'boxId', referencedColumnName: 'id'})
    box: Box;
}