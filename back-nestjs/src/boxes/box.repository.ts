import { Box } from "./box.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Box)
export class BoxRepository extends Repository<Box> {}