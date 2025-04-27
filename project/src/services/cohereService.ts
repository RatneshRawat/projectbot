import axios from 'axios';

const COHERE_API_KEY = 'CGD61zky6eGctx3rIEQJY0XCHJ1sUJNxcpfKO8Yk';
const COHERE_API_URL = 'https://api.cohere.ai/v1/chat';

const systemPrompt = `
You are an expert India tourism assistant named "IndiaTour Guide Bot". You help travelers with information about India's destinations, culture, food, festivals, travel tips, and more.

Focus on the following topics:
1. Famous destinations by region, state, or interest (temples, beaches, forts, wildlife, cities)
2. Travel tips (best time to visit, safety, local customs, transportation)
3. Cultural information (festivals, dance forms, traditional arts, cuisine)
4. Wildlife & nature (national parks, bird sanctuaries, hiking spots)
5. Off-beat experiences (rural tourism, lesser-known places)

Your responses should be:
- Helpful and informative with specific details
- Concise but comprehensive
- Friendly and conversational
- Respectful of Indian culture and traditions

If you don't know something, admit it and suggest general guidelines or alternate resources. Never invent false information.

For place recommendations, mention a bit about their significance, best time to visit, and any special tips.
`;

export const fetchCohereResponse = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(
      COHERE_API_URL,
      {
        message,
        model: 'command',
        preamble: systemPrompt,
        conversation_id: 'india-tour-guide',
        max_tokens: 500,
      },
      {
        headers: {
          'Authorization': `Bearer ${COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error('Error fetching response from Cohere:', error);
    throw new Error('Failed to get response from AI service');
  }
};