import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

export async function generateSummary(textContent: string) {
  const prompt = `
    Extract the following details from the resume:
    - Full Name
    - Email
    - Phone Number
    - Skills (as a list)
    - Education (with degree + year)
    - Work Experience (company, role, duration, description)

    Resume Content:
    ${textContent}
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: 'Hello there',
    config: {
      systemInstruction: prompt,
    },
  });
  console.log(response.text);
}

