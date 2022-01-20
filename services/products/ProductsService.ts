import FetchService from 'api/shared/services/FetchService';

export interface ProductsResponse {
  data: Record<TProductId, TProduct>[];
  length: number;
}

export interface ProductResponse {
  data: Record<TProductId, TProduct>;
}

class ProductsService {
  static async getAll(): Promise<ProductsResponse> {
    const response = await FetchService.get<ProductsResponse>({
      url: 'api/avo'
    });

    return response;
  }

  static async getById(id: string): Promise<TProduct | null> {
    const response = await FetchService.get<TProduct | null>({
      url: `api/avo/${id}`
    });

    return response;
  }
}

export default ProductsService;
