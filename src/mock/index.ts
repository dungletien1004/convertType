import { INodeElement, Chat } from './../interface/index';
import { ShopingItemType } from "../interface";

export const dataShoppingItem: ShopingItemType[] = [
  {
    title: "Item 1",
    price: 10,
    currency: "USD",
    date: new Date().toString()
  },
  {
    title: "Item 2",
    price: 20,
    currency: "USD",
    date: new Date().toString()
  },
  {
    title: "Item 3",
    price: 30,
    currency: "USD",
    date: new Date().toString()
  },
];

const dataNodeElement : INodeElement[] = [
  {
    firstName: "Node",
    lastName: "data",
    age: 19,
    birthDate: new Date().toString(),
    shoppingItemsList: dataShoppingItem
  }
];

export const dataChat: Chat = {
  title: "Chat data",
  nodesList: dataNodeElement
}