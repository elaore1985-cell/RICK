import { GoogleGenAI } from "@google/genai";

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const askHistorian = async (question: string): Promise<string> => {
  try {
    const ai = getClient();
    const modelId = "gemini-2.5-flash"; // Using fast model for chat
    
    const systemInstruction = `
      Eres el "Historiador Nazca", un arqueólogo experto y entusiasta especializado en la Cultura Nazca (200 a.C. - 600 d.C.).
      Tu objetivo es educar a estudiantes y curiosos sobre esta fascinante civilización del antiguo Perú.
      
      Pautas:
      1. Responde de manera concisa pero informativa.
      2. Mantén un tono respetuoso y educativo.
      3. Si te preguntan sobre las Líneas de Nazca, menciona teorías científicas (Maria Reiche) y descarta teorías alienígenas educadamente.
      4. Usa vocabulario relacionado: "geoglifos", "policromía", "puquios", "Cahuachi", "horror al vacío".
      5. Formato: Usa párrafos cortos.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "Lo siento, el viento del desierto ha borrado esa respuesta. Por favor intenta de nuevo.";
  } catch (error) {
    console.error("Error asking Gemini:", error);
    return "Hubo un error al consultar los antiguos pergaminos digitales. Por favor verifica tu conexión o clave API.";
  }
};