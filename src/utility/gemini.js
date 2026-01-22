import { GoogleGenerativeAI } from "@google/generative-ai";

const OPENAI_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

if (!OPENAI_KEY) {
  throw new Error("VITE_GOOGLE_API_KEY is not defined in .env file");
}

const genAI = new GoogleGenerativeAI(OPENAI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export default model;