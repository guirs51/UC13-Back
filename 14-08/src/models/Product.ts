import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ type: "varchar", length: 100, nullable: false })
    name: string;

    @Column({ type: "int", nullable: false })
    price: Number;

    @ManyToOne(() => Category, category => category.product )
    category: Category;
}