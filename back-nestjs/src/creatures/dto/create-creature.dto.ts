import { Box } from 'src/boxes/box.entity';
import { CreatureType } from '../creatureType.enum';
import { IsString, IsInt } from 'class-validator';

// TODO Remove dependency to 'src/boxes'

export class CreateCreatureDto {
    readonly id: number;

    @IsString()
    name: string;

    @IsString()
    type: CreatureType;

    @IsInt()
    boxId: number;

    box: Box;
}