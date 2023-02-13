import axios from '../common/axios';
import { ISaleOrderItem } from '../models/sale-order-items';

export class SaleOrderItemRepository {
  static async getSaleOrderItems(): Promise<ISaleOrderItem[]> {
    const response = await axios.get('/sale-order-items');
    return response.data;
  }
  static async getSaleOrderItem(id: string): Promise<ISaleOrderItem> {
    const response = await axios.get(`/sale-order-items/${id}`);
    return response.data;
  }
  static async createSaleOrderItem(saleOrderItem: Partial<ISaleOrderItem>): Promise<ISaleOrderItem> {
    const response = await axios.post('/sale-order-items', saleOrderItem);
    return response.data;
  }
  static async updateSaleOrderItem(saleOrderItem: Partial<ISaleOrderItem>): Promise<ISaleOrderItem> {
    const response = await axios.put(`/sale-order-items/${saleOrderItem.id}`, saleOrderItem);
    return response.data;
  }
  static async deleteSaleOrderItem(id: string): Promise<ISaleOrderItem> {
    const response = await axios.delete(`/sale-order-items/${id}`);
    return response.data;
  }
}
