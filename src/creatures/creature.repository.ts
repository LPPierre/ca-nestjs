import { Creature } from "./creature.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Creature)
export class CreatureRepository extends Repository<Creature> {}