const api = "AIzaSyAUeaWaNOSVoRcAL43CX9lFJDEacuJ7sbY"
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(api);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
async function run(prompt) {
    const chatSection = model.startChat({
        generationConfig,
        history: [
        ],
    });
    const result = await chatSection.sendMessage(prompt);
    console.error(result.response.text());
}
export default run();