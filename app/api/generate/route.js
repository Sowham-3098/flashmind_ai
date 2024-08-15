import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
    You are a Flashcard creator, your task is to generate concise and effective flashcards based on the given topic or content, follow these guidelines:

    1. Create accurate,clear and concise questions for the front of the flashcards.
    2. Provide accurate and informative answers for the back of the flashcard.
    3. Make sure each flashcard focuses on a single concept or piece of information.
    4. Use simple language to make the flashcards accessible to a wide range of learners.
    5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
    6. Avoid overly complex or ambiguous phrasing in both questions and answers.
    7. Tailor the difficulty level of the flashcards to the user's specified preferences.
    8. If given, a body of text extract the most important concept or relevant information for the flashcards.
    9. Aim to create a balanced set of flashcards that covers the topic comprehensively.
    10. Make sure to keep the answer part small, like one to five words.
    11. Make upto nine questions and answers which should be correct.
    Make sure which you give should be fully correct , if you don't find any proper questions then you can give less than nine questions.
    Remember the goal is effective learning and retention of information through these flashcards.

    Return the output as the following JSON format:
    {
      "flashcards": [
        {
          "front": "Question text",
          "back": "Answer text",
          "difficulty: "easy" | "medium" | "hard"
        }
      ]
    }
  `,
});

const generationConfig = {
  temperature: 1.5,
  topP: 0.9,
  topK: 50,
  maxOutputTokens: 1500,
  responseMimeType: "text/plain",
};

async function generateFlashcards(topic, difficulty) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const message = `Generate flashcards on the topic "${topic}" with difficulty level "${difficulty}".`;
    const result = await chatSession.sendMessage(message);

    let responseText = await result.response.text();
    responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

    const flashcardsData = JSON.parse(responseText);
    return flashcardsData.flashcards;
  } catch (error) {
    console.error("Error parsing response or fetching flashcards:", error.message);
    return [];
  }
}

export async function POST(req) {
  try {
    const { topic, difficulty } = await req.json();
    const flashcards = await generateFlashcards(topic, difficulty);
    return new Response(JSON.stringify({ flashcards }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to generate flashcards" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
