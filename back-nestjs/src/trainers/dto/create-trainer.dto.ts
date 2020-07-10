import { IsArray, IsString, IsEmpty, IsNotEmpty } from "class-validator";

export class CreateTrainerDto {
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmpty()
    boxes: [];
}