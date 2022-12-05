export interface IItem {
//      iid: string;
      imageUrl: string;
      productName: string;
      productId: string;
      purchasePrice: number;
      purchaseLocation: string
      datePurchased: string;
      condition: string;
      category: string;
};

export interface IList {
      listid: number;
      listname: string;
      listaddress:string,
      coverimageurl:string,
      items:IItem[];
};
