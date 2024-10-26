import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//Entidades
@Entity()
export class User {
    //coloco id como primaria autogenerada
    @PrimaryGeneratedColumn()
    id: number;
    //agrego columna name a la base de datos
    @Column()
    name: string;
    //agrego columna email a la base de datos
    @Column({ unique: true, nullable: false })
    email: string;
    //agrego columna password a la base de datos
    @Column({ nullable: false, select: false })
    password: string;

}
