import axios from '../common/axios';
import { ICustomer } from '../models/customer';

export class CustomerRepository {
  static async getCustomers(): Promise<ICustomer[]> {
    const response = await axios.get('/customers');
    return response.data.customers;
  }
  static async getCustomer(id: string): Promise<ICustomer> {
    const response = await axios.get(`/customers/${id}`);
    return response.data;
  }
  static async createCustomer(customer: Partial<ICustomer>): Promise<ICustomer> {
    const response = await axios.post('/customers', customer);
    return response.data;
  }
  static async updateCustomer(id: string, customer: Partial<ICustomer>): Promise<ICustomer> {
    const response = await axios.put(`/customers/${id}`, customer);
    return response.data;
  }
  static async deleteCustomer(id: string): Promise<ICustomer> {
    const response = await axios.delete(`/customers/${id}`);
    return response.data;
  }
}
