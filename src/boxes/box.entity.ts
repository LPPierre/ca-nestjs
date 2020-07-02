import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Creature } from '../creatures/creature.entity';

@Entity()
export class Box {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    label: string;

    @OneToMany(type => Creature, creature => creature.box)
    creatures: Creature[];
}