export interface IItem {
      imageUrl: string;
      productName: string;
      productId: string;
      purchasePrice: number;
      purchaseLocation: string
      datePurchased: string;
      condition: string;
      category: string;
      iid: number;
};

export interface IList {
      listid: number;
      listname: string;
      listaddress:string,
      coverimageurl:string,
      items:IItem[];
};

export enum OpCodes{
      AddItem = 1,
      AddList,
      UpdateListMetaData,
      UpdateListItem,
      DeleteItem,
      DeleteList,
      GetOneItem
};

export interface IDataPacket {
      opcode:OpCodes;
      user: string;
      listName: string;
      item: IItem | IList | number;
};
