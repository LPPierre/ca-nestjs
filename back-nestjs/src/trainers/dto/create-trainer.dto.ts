import { IsArray, IsString } from "class-validator";

export class CreateTrainerDto {
    readonly id: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsArray()
    boxes: [];
}