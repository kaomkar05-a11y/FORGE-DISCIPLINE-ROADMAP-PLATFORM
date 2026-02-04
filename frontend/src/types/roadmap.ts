export type RoadmapStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface RoadmapMetadata {
  name: string;
  description: string;
  durationWeeks: number;
  difficulty: string;
  category: string;
}

export interface Roadmap {
  _id: string;
  metadata: RoadmapMetadata;
}
