const { z } = require('zod');

const topicSchema = z.object({
  name: z.string(),
  category: z.string(),
  resources: z.array(z.string()).optional()
});

const weekSchema = z.object({
  phaseId: z.string(),
  weekNumber: z.number(),
  goals: z.array(z.string()),
  topics: z.array(topicSchema)
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  requiresDeployment: z.boolean().optional()
});

const phaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  order: z.number(),
  weeks: z.array(weekSchema),
  buildTasks: z.array(z.string()).optional(),
  projects: z.array(projectSchema).optional()
});

const roadmapSchema = z.object({
  metadata: z.object({
    name: z.string(),
    description: z.string(),
    durationWeeks: z.number(),
    difficulty: z.string(),
    category: z.string()
  }),
  phases: z.array(phaseSchema),
  dailyRules: z.object({
    minDSAProblems: z.number(),
    mandatoryStudyHours: z.number(),
    mandatoryNotes: z.boolean()
  })
});

const createRoadmapSchema = z.object({ body: roadmapSchema });
const updateRoadmapSchema = z.object({ body: roadmapSchema.partial() });

module.exports = { createRoadmapSchema, updateRoadmapSchema };
