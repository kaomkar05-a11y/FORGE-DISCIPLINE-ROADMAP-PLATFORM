import { create } from 'zustand';
import { fetchRoadmaps } from '../api/roadmapApi';

interface RoadmapState {
  roadmaps: any[];
  isLoading: boolean;
  loadRoadmaps: () => Promise<void>;
}

export const useRoadmapStore = create<RoadmapState>((set) => ({
  roadmaps: [],
  isLoading: false,
  loadRoadmaps: async () => {
    set({ isLoading: true });
    const roadmaps = await fetchRoadmaps();
    set({ roadmaps, isLoading: false });
  }
}));
