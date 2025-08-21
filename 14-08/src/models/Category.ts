import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';


@Entity('categorys')
export class Category{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ type: "varchar", length: 100, nullable: false })
    name: String;

    @OneToMany(() => Product, produ => produ)
    product: Product[];
}