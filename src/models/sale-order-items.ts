import { ISaleOrder } from "./sale-order";

export interface ISaleOrderItem {
    id: string;
    productName: string;
    productCode: string;
    price: number;
    quantity: number;
    saleOrderId: string;
    saleOrder: ISaleOrder;
  };
