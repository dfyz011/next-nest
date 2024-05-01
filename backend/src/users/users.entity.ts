import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.subordinates)
  @JoinColumn({ name: 'headId' })
  head: User;

  @Column({ type: 'int', nullable: true })
  headId: number;

  @OneToMany(() => User, (user) => user.head)
  subordinates: User[];
}
