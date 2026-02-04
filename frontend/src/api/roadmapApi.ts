import { apiClient } from './client';

export const fetchRoadmaps = async () => {
  const response = await apiClient.get('/roadmaps');
  return response.data;
};

export const fetchRoadmap = async (id: string) => {
  const response = await apiClient.get(`/roadmaps/${id}`);
  return response.data;
};
