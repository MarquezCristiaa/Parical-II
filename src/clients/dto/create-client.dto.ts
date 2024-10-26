import { IsEmail, IsInt, Max, Min, MinLength, MaxLength } from "class-validator";

export class CreateClientDto {
    @MinLength(5, { message: "El nombre debe tener 5 caracteres minimo"})
    firstname: string;

    @MinLength(5, { message: "El apellido debe 5 caracteres minimo"})
    lastname: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(18, { message: "La edad no debe ser menor a 18 años"})
    @Max(60, { message: "La edad no debe ser menor a 60 años"})
    age: number;
    
    @MinLength(5, { message: "5 caracteres minimo"})
    @MaxLength(10, { message: " 10 caracteres maximos"})
    Cc: string;
}