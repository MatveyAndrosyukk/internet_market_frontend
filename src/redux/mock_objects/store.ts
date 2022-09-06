import {IRole, IUser} from "../../types/users";

export const rolesMock: IRole[] = [
    {id: 1, name: 'USER'},
    {id: 2, name: 'ADMIN'}
]

export const usersMock: IUser[] = [
    {id: 1, name: 'user', email: 'user@gmail.com', password: 'user', phone: '+375256197464', roles: [rolesMock[0]]},
    {id: 2, name: 'admin', email: 'admin@gmail.com', password: 'admin', phone: '+375254368232', roles: [rolesMock[0], rolesMock[1]]}
]