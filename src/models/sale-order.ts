import { ICustomer } from "./customer";
import { ISaleOrderItem } from "./sale-order-items";

export interface ISaleOrder {
  id: string;
  customerId: string;
  customer: ICustomer;
  saleOrderItems: ISaleOrderItem[];
}
