import { CreatureType } from '../creatureType.enum';
import { Box } from 'src/boxes/box.entity';

export interface Creature {
    name: string;
    type: CreatureType;
    box: Box;
}