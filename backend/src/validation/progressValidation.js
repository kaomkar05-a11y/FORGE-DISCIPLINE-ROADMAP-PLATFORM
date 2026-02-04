const { z } = require('zod');

const dailyLogSchema = z.object({
  body: z.object({
    roadmapId: z.string(),
    date: z.string(),
    topicsStudied: z.array(z.string()).optional(),
    dsaProblemsSolved: z.number(),
    studyDurationHours: z.number(),
    notes: z.string().optional(),
    blockers: z.string().optional()
  })
});

module.exports = { dailyLogSchema };
