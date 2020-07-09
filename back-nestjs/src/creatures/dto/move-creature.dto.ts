import { Box } from 'src/boxes/box.entity';

export class MoveCreatureDto {
    readonly id: number;

    readonly name: string = '';

    readonly type: string = '';

    boxId: number;

    readonly box: Box;
}