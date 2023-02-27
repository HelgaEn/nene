
export interface UserInterface{
    name: string|null;
    age: number|null;
}

export interface AuthentificationInterface{
    todo: string|null;
}

export class UserUpdate{
    static readonly type ='[User]: User Update';
    constructor(public payload: UserInterface){}
}

export class AuthUpdate{
    static readonly type='[Auth]: Auth Update';
    constructor(public payload: AuthentificationInterface){}
}