import { apiClient } from './client';

export const askMentor = async (payload: { userContext: Record<string, unknown>; request: string }) => {
  const response = await apiClient.post('/mentor', payload);
  return response.data;
};
