import { apiClient } from './client';
import type { User } from '../types';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const { data } = await apiClient.get<ApiResponse<User[]>>('/users');
    return data.data;
  },

  getById: async (id: string): Promise<User> => {
    const { data } = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
    return data.data;
  },

  create: async (payload: { phone: string; role: string }): Promise<User> => {
    const { data } = await apiClient.post<ApiResponse<User>>('/users', payload);
    return data.data;
  },

  update: async (id: string, payload: Partial<{ phone: string; role: string }>): Promise<User> => {
    const { data } = await apiClient.patch<ApiResponse<User>>(`/users/${id}`, payload);
    return data.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  },
};
