import { IsNotEmpty, IsEmail, MaxLength, Length } from 'class-validator';
import { ObjectID } from 'typeorm';

export class UserDTO {
  @IsNotEmpty()
  @MaxLength(15)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(15)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @Length(8, 12)
  password: string;
}

export class UserRO {
  id: ObjectID;
  email: string;
  userName: string;
  createAt: Date;
  token?: string;
}
