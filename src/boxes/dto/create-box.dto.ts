import { Trainer } from "src/trainers/trainer.entity";

export class CreateBoxDto {
    readonly id: number;
    label: string;
    trainer: Trainer;
    creatures: [];
}