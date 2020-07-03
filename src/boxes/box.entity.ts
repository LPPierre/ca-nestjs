import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Creature } from '../creatures/creature.entity';
import { Trainer } from '../trainers/trainer.entity';

@Entity()
export class Box {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Trainer, trainer => trainer.id)
    trainer: Trainer;

    @OneToMany(type => Creature, creature => creature.box)
    @JoinColumn()
    creatures: Creature[];
}