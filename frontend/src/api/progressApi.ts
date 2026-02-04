import { apiClient } from './client';

export const fetchDashboard = async (roadmapId: string) => {
  const response = await apiClient.get('/progress/dashboard', { params: { roadmapId } });
  return response.data;
};

export const createDailyLog = async (payload: {
  roadmapId: string;
  date: string;
  topicsStudied: string[];
  dsaProblemsSolved: number;
  studyDurationHours: number;
  notes: string;
  blockers?: string;
}) => {
  const response = await apiClient.post('/progress/daily-log', payload);
  return response.data;
};
