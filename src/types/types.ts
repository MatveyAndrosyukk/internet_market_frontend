export interface IDish {
    id:number,
    image: string,
    count: number,
    price:number,
    title:string,
    description:string,
    category: string
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