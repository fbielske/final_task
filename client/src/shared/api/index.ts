import axios from 'axios';
import { IProduct } from './types';

const httpClient = axios.create({
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
  private ServerBaseUrl: {
    products: string;
  };

  constructor() {
    const ServerBaseUrl = 'http://localhost:5001/users';

    this.ServerBaseUrl = {
      products: ServerBaseUrl,
    };
  }

  // ServerBaseUrl
  public async getProducts(): Promise<IProduct[]> {
    const products: IProduct[] = await httpClient.get(
      this.ServerBaseUrl.products
    );

    return products;
  }

  public async getProduct(id: string): Promise<IProduct> {
    const product: IProduct = await httpClient.get(
      this.ServerBaseUrl.products + '/' + id
    );

    return product;
  }

  public async deleteProduct(id: string): Promise<void> {
    await httpClient.delete(this.ServerBaseUrl.products + '/' + id);
  }

  public async addProduct(product: IProduct) {
    const response = await httpClient.post(
      this.ServerBaseUrl.products,
      product
    );

    return response;
  }

  public async updateProduct(id: string, product: IProduct): Promise<IProduct> {
    const response = await httpClient.put(
      this.ServerBaseUrl.products + '/' + id,
      product
    );

    const updatedProduct: IProduct = response.data;

    return updatedProduct;
  }
}

export const API = new Api_instance();
