"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Card from "../components/Card";
import Layout from "../components/Layout";
import { generateFlashcards } from "../api/generate/route"; // Import the generateFlashcards function

export default function Component() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [questions, setQuestions] = useState([]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
  }

  const generateQuestions = async (e) => {
    e.preventDefault();
    try {

      const flashcards = await generateFlashcards(topic, difficulty);
      setQuestions(flashcards);
      console.log(flashcards);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  console.log(questions);

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
            <Select onValueChange={handleDifficultyChange}>
              <SelectTrigger className="w-[180px] mr-4">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>

                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
                  difficult={question.difficulty}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
