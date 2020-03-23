import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity} from "typeorm";

@Entity()
export class Test extends BaseEntity{

    @PrimaryGeneratedColumn()
    Num: number;
    
    @Column("timestamp")
    HeureDebut: number;
    
    @Column("timestamp", {nullable:true})
    HeureFin: number;

    @Column("text", {nullable:true})
    Feedback: string;

    // @Column()
    // JTest: string;

    // @Column("text")
    // Prod: string;

    // @ManyToMany(type => Category, {
    //     cascade: true
    // })
    // @JoinTable()
    // categories: Category[];

}