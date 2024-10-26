import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto{
    @IsString()
    @MinLength(2)
    @Transform(({value}) => value.trim())
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(6)
    @Transform(({value}) => value.trim())
    password: string;
}