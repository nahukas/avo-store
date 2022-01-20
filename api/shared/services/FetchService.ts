import { API_URL } from '../../../config/general-config';
import { ApiResponse } from '../models';

interface FetchParams {
  url: string;
  body?: object;
}

class FetchService {
  static async get<T>(params: FetchParams): Promise<T> {
    let { url } = params;

    const response = await fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: FetchService.getHeaders()
    });

    return FetchService.processResponse<T>(response);
  }

  static async post<T>(params: FetchParams): Promise<T> {
    const { url } = params;

    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(params.body),
      headers: FetchService.getHeaders()
    });

    return FetchService.processResponse<T>(response);
  }

  static async put<T>(params: FetchParams): Promise<T> {
    const { url } = params;

    const response = await fetch(`${API_URL}${url}`, {
      method: 'PUT',
      body: JSON.stringify(params.body),
      headers: FetchService.getHeaders()
    });

    return FetchService.processResponse<T>(response);
  }

  static async delete<T>(params: FetchParams): Promise<T> {
    const { url } = params;

    const response = await fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: FetchService.getHeaders(),
      body: JSON.stringify(params.body)
    });

    return FetchService.processResponse<T>(response);
  }

  static getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  static async processResponse<T>(response: Response) {
    if (response.status === 200) {
      return (await response.json()) as T;
    }

    if (response.status === 400) {
      const apiResponse = (await response.json()) as ApiResponse;

      throw new Error('Bad Request [400]');
    }

    if (response.status === 401) {
      throw new Error('Unauthorized [401]');
    }

    if (response.status === 415) {
      throw new Error('Unsupported Media Type [415]');
    }

    if (response.status === 404) {
      throw new Error('Endpoint not found [404]');
    }

    if (response.status === 405) {
      throw new Error('Method Not Allowed [405]');
    }

    if (response.status === 500) {
      throw new Error('Internal Server Error [500]');
    }

    return {} as T;
  }
}

export default FetchService;
