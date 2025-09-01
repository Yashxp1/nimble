import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateSummary(file: File) {
  const prompt = `
    Extract the following details from the resume:
    - Full Name
    - Email
    - Phone Number
    - Skills (as a list)
    - Education (with degree + year)
    - Work Experience (company, role, duration, description)
  `;

  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString('base64');

  const contents = [
    // { text: 'Summarize this document' },
    {
      inlineData: {
        mimeType: 'application/pdf',
        data: base64
        // data: Buffer.from(pdfResp).toString('base64'),
      },
    },
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: contents,
    config: {
      systemInstruction: prompt,
    },
  });
  
  return response.text

}
