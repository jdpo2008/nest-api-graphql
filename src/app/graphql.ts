
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class UserInput {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
}

export class Auth {
    email: string;
    token: string;
}

export abstract class IMutation {
    abstract login(username: string, password: string): Auth | Promise<Auth>;

    abstract register(user: UserInput): Auth | Promise<Auth>;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract saludo(): string | Promise<string>;

    abstract users(page?: number): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    createAt?: string;
    updateAt?: string;
}
