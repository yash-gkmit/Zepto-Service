import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column('decimal')
  price!: number;

  @Column()
  category!: string;

  @Column('int')
  stock!: number;

  @Column({ nullable: true })
  image_url!: string;
}