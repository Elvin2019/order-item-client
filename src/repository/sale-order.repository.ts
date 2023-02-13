import axios from '../common/axios';
import { ISaleOrder } from '../models/sale-order';

export class SaleOrderItemRepository {
  static async getSaleOrders(): Promise<ISaleOrder[]> {
    const response = await axios.get('/sale-orders');
    return response.data;
  }

  static async getSaleOrder(id: string): Promise<ISaleOrder> {
    const response = await axios.get(`/sale-orders/${id}`);
    return response.data;
  }

  static async createSaleOrder(saleOrder: Partial<ISaleOrder>): Promise<ISaleOrder> {
    const response = await axios.post('/sale-orders', saleOrder);
    return response.data;
  }
  static async updateSaleOrder(saleOrder: Partial<ISaleOrder>): Promise<ISaleOrder> {
    const response = await axios.put(`/sale-orders/${saleOrder!.id}`, saleOrder);
    return response.data;
  }
  static async deleteSaleOrder(id: string): Promise<ISaleOrder> {
    const response = await axios.delete(`/sale-orders/${id}`);
    return response.data;
  }
}
