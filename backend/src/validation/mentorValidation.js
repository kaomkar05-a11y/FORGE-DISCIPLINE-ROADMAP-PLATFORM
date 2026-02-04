const { z } = require('zod');

const mentorSchema = z.object({
  body: z.object({
    userContext: z.record(z.any()),
    request: z.string()
  })
});

module.exports = { mentorSchema };
