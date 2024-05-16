import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deportistas_manuelatorres')
export class Athlete {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    position:string;

    @Column({default: true})
    active:boolean;
}
