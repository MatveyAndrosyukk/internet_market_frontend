export interface IDish {
    id:number,
    image: string,
    count: number,
    price:number,
    totalPrice:number,
    title:string,
    description:string,
    category: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string,
    password: string,
    roles: IRole[]
}

export interface IRole {
    id: number,
    name: string
}

export interface ICard {
    id:number,
    blackTitle:string,
    orangeTitle:string,
    description:string
}

export interface ITable {
    name: string,
    phone: string,
    persons: string,
    date: string,
    time: string
}

export interface IOption{
    name: string,
    value: string
}

export interface ITotalInfo {
    price: number,
    count: number
}