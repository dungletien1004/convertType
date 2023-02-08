import { Chat, ExtChat, ExtShopingItemType, IExtNodeElement, INodeElement, ShopingItemType, Timestamp } from '../interface';

const convertTimestamp = (date: Date): Timestamp => {
  const milliseconds = date.getTime();
  return {
    seconds: Math.floor(milliseconds / 1000),
    nanos: (milliseconds % 1000) * 10**6
  };
};

const convertToExtShoppingItems = (shoppingItemsList: ShopingItemType[]): ExtShopingItemType[] => {
  return shoppingItemsList.map(item => {
    return {
      Title: item.title,
      Price: item.price,
      Currency: item.currency,
      Date: convertTimestamp(new Date(item.date))
    };
  });
};

const convertToExtNodeElements = (nodesList: INodeElement[]): IExtNodeElement[] => {
  return nodesList.map(node => {
    return {
      FirstName: node.firstName,
      LastName: node.lastName,
      Age: node.age,
      BirthDate: convertTimestamp(new Date(node.birthDate)),
      ShoppingItems: node.shoppingItemsList ? convertToExtShoppingItems(node.shoppingItemsList) : []
    };
  });
};

export const convertToExtChat = (chat: Chat): ExtChat => {
  return {
    Title: chat.title,
    ChatItems: convertToExtNodeElements(chat.nodesList)
  };
};