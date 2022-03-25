declare module 'prismic-reactjs' {
  export const RichText: React.FC<RichTextProps & any, any> & {
    asText: (input: RichTextBlock[]) => string;
    render: (input: RichTextBlock[]) => React.ReactNode;
    displayName: 'RichText';
  };
  export interface RichTextProps {
    Component?: React.ReactNode;
    elements?: {};
    htmlSerializer?: HTMLSerializer<React.ReactNode>;
    linkResolver?: LinkResolver;
    render?: RichTextBlock[];
    renderAsText?: any;
    serializeHyperlink?: HTMLSerializer<React.ReactNode>;
    className: string;
  }
}

declare module 'shopify-buy' {
  export interface Cart {
    lineItemsSubtotalPrice: any;
    subtotalPriceV2: any;
  }

  export interface LineItem {
    discountAllocations: any;
    variant: ShopifyBuy.ProductVariant;
  }
}
