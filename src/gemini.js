import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
const api = "AIzaSyAUeaWaNOSVoRcAL43CX9lFJDEacuJ7sbY"

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
return await result.response.text();
}
export default run;