import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("tbl_users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;
}
