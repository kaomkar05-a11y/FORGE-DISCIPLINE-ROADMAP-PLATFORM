const { z } = require('zod');

const updateProjectSchema = z.object({
  body: z.object({
    status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']).optional(),
    githubRepoUrl: z.string().url().optional(),
    deploymentUrl: z.string().url().optional()
  })
});

module.exports = { updateProjectSchema };
