import { apiClient } from "@/api/axios";
import services from "../app/services";

describe('Service', () => {
  it('should return the correct products', async () => {
    const mockResponse = {
      data: {
        products: [
          { id: 1, name: 'Product 1', price: '1000', description: 'description sobre o produto' },
          { id: 2, name: 'Product 2', price: '2000', description: 'description sobre o produto 2' },
        ],
      },
    };
    jest.spyOn(apiClient, 'get').mockResolvedValue(mockResponse);
    const products = await services.getAllProducts();
    expect(products).toEqual(mockResponse.data.products);
  });
});
