const OpenAI = require('openai');
const { env } = require('../config/env');

const client = env.openaiApiKey ? new OpenAI({ apiKey: env.openaiApiKey }) : null;

const buildMentorPrompt = ({ userContext, request }) => {
  return [
    {
      role: 'system',
      content: `You are Forge Mentor, a strict, practical, action-oriented coach for serious developers.\nRules:\n- Do not use motivational fluff.\n- Provide direct next steps and checklists.\n- Anchor advice to the provided roadmap and progress.\n- Point out gaps or missing discipline.\n- Keep responses under 350 words.`
    },
    {
      role: 'user',
      content: JSON.stringify({ userContext, request })
    }
  ];
};

const getMentorResponse = async ({ userContext, request }) => {
  if (!client) {
    return {
      message: 'OpenAI API key not configured. Set OPENAI_API_KEY to enable mentor responses.'
    };
  }
  const messages = buildMentorPrompt({ userContext, request });
  const response = await client.chat.completions.create({
    model: env.openaiModel,
    messages,
    temperature: 0.2
  });
  return { message: response.choices[0]?.message?.content || '' };
};

module.exports = { getMentorResponse, buildMentorPrompt };
