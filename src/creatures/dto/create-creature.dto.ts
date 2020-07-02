import { Box } from 'src/boxes/box.entity';
import { CreatureType } from '../creatureType.enum';

export class CreateCreatureDto {
    readonly id: number;
    name: string;
    type: CreatureType;
    box: Box;
}