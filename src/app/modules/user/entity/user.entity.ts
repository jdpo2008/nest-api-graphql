import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { UserRO } from '../dto/user.dto';

@Entity('user')
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
    unique: true,
  })
  userName: string;

  @Column('text')
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(showToken: boolean = true): UserRO {
    const { id, createAt, userName, email, token } = this;
    const responseObject: UserRO = {
      id,
      email,
      createAt,
      userName,
    };

    if (showToken) {
      responseObject.token = token;
    }

    return responseObject;
  }

  private get token(): string {
    const { id, userName } = this;
    return jwt.sign(
      {
        id,
        userName,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1800' },
    );
  }
}
