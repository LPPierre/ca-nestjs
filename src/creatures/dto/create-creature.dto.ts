import { Box } from 'src/boxes/box.entity';
import { CreatureType } from '../creatureType.enum';
import { IsString, IsNumber } from 'class-validator';

// TODO Remove dependency to 'src/boxes'

export class CreateCreatureDto {
    readonly id: number;

    @IsString()
    name: string;

    @IsString()
    type: CreatureType;

    @IsNumber()
    boxId: number;

    box: Box;
}