export interface AttributeInput {
  [key: string]: string;
}

type LineItemsSubtotalPrice = {
  amount: String;
  currencCode: String;
  type: any;
};

export interface LineItemPatch {
  variantId: string | number;
  quantity: number;
  customAttributes?: AttributeInput[];
}
