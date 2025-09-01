import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateSummary(file: File) {
  const prompt = `
You are a resume parser. 
Extract the following details from the PDF and return them in valid JSON only.
Follow this template exactly:

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1-123-456-7890",
  "skills": ["JavaScript", "React"],
  "education": [
  {
  
    "type": "university",            
    "degree": "B.Sc Computer Science", 
    "field": "Computer Science",     
    "institution": "University of Delhi",
    "startYear": 2020,              
    "endYear": 2023,
    "grade": "8.5 CGPA"              
   }, 
 ],
  
  "workExperience": [
    { "company": "TechCorp", "role": "Engineer", "duration": "2022-2023", "description": "Worked on MERN apps" }
  ], 
  "Projects": ["Portfolio Website"],
  "aboutResume": [
    {
      "summary": "Resume overview here",
      "achievements": "Awards etc.",
      "improvements": "Suggestions",
      "pros": "Strengths",
      "cons": "Weaknesses",
      "rating": 8
    }
  ]
}

Important:
- Do not confuse projects with work experience.
- Rating out of 10.
- Respond with JSON only.
- Social Media handles should be in url format
`;

  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString('base64');

  const contents = [
    { text: prompt },
    {
      inlineData: {
        mimeType: 'application/pdf',
        data: base64,
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

  const raw = response.text ?? '';

  const match = raw.match(/\{[\s\S]*\}/);

  if (!match) throw new Error('No JSON found in response');

  const summary = JSON.parse(match[0]);
  return summary;
}
