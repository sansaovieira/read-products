import { apiClient } from "@/api/axios";

class Service {
  /**
   * Get all Products
   * @returns
   */
  getAllProducts = async () => {
    const res = await apiClient.get('/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    return res.data.products;
  }

}

export default new Service();
