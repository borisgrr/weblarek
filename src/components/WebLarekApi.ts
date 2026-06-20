import type { IApi, IProductsResponse, IOrder, IOrderResult } from '../types';

export class WebLarekApi {
  constructor(private api: IApi) {}

  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>('/product/');
  }

  createOrder(data: IOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>('/order/', data);
  }
}
