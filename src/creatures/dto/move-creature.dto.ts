import { Box } from 'src/boxes/box.entity';

export class MoveCreatureDto {
    readonly id: number;

    box: Box;
}