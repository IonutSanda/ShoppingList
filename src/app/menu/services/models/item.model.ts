export interface Cateogry{
    name: string
    items: Item[]
}

export interface Item{
    name: string;
    price: number;
    shop: string;
    amountToBuy: number;
}