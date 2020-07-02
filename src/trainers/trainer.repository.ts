import { Trainer } from "./trainer.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Trainer)
export class TrainerRepository extends Repository<Trainer> {}