"use client";

<<<<<<< HEAD
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import Card from "../components/Card"
import Layout from "../components/Layout"
=======
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { generateFlashcards } from "../api/api"; // Import the generateFlashcards function
>>>>>>> c98bb979affb3479852bbf966ff23a4c02491355

export default function Component() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const generateQuestions = async (e) => {
    e.preventDefault();
    try {
      const flashcards = await generateFlashcards(topic, "medium"); 
      setQuestions(flashcards);
      console.log(flashcards);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Flashmind Card Generator</h1>
          <p className="text-muted-foreground">Enter a topic to generate a set of quiz questions.</p>
        </div>
        <div className="mb-8 ">
          <form onSubmit={generateQuestions} className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Enter a topic"
              value={topic}
              onChange={handleTopicChange}
              className="flex-1 mr-4"
            />
            <Button type="submit">Generate</Button>
          </form>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3">
              {questions.map((question, index) => (
                <Card
                  key={index}
                  title={`Flashcard ${index + 1}`}
                  question={question.front}
                  answer={question.back}
                  difficult="medium"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> c98bb979affb3479852bbf966ff23a4c02491355
