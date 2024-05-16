import { IsBoolean, IsNotEmpty, IsString } from "class-validator"


export class CreateAthleteDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    position: string;

    @IsBoolean()
    active: boolean;
}
