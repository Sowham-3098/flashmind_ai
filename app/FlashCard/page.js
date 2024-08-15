"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { generateFlashcards } from "../api/api";
import { db } from "../../firebase/firebase";
import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { useAuth } from '@clerk/nextjs'; // Client-side import
import Landing from '../LandingPage/page';
import toast, { Toaster } from 'react-hot-toast';

export default function Component() {
  const { isLoaded, userId } = useAuth();
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousTopics, setPreviousTopics] = useState([]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
  };

  const saveFlashcards = async () => {
    try {
      if (questions.length === 0) {
        toast.error("No flashcards to save.");
        return;
      }
      if (userId) {
        const userFlashcardsRef = collection(db, "users", userId, "topics");
        const topicDocRef = doc(userFlashcardsRef, topic);
        const topicDoc = await getDoc(topicDocRef);

        let flashcardsData = questions.map(flashcard => ({
          question: flashcard.front,
          answer: flashcard.back,
          difficulty: difficulty
        }));

        if (topicDoc.exists()) {
          const existingData = topicDoc.data();
          flashcardsData = [...existingData.flashcards, ...flashcardsData];
        }

        await setDoc(topicDocRef, {
          topic: topic,
          difficulty: difficulty,
          flashcards: flashcardsData
        });

        toast.success("Flashcards saved successfully.");
      } else {
        toast.error("No user is logged in.");
      }
    }
    catch (error) {
      console.error("Error saving flashcards:", error.message);
      toast.error("Error saving flashcards.");
    }
  }

  const generateQuestions = async (e) => {
    e.preventDefault();
    if (topic == "") {
      toast.error("Please enter a topic.");
      return;
    }
    setLoading(true);
    try {
      const flashcards = await generateFlashcards(topic, difficulty);
      setQuestions(flashcards);
      console.log(flashcards);
      toast.success("Flashcards generated successfully.");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Error in generating flashcards.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPreviousTopics = async () => {
    if (userId) {
      const userFlashcardsRef = collection(db, "users", userId, "topics");
      const querySnapshot = await getDocs(userFlashcardsRef);
      const topics = querySnapshot.docs.map(doc => doc.id);
      setPreviousTopics(topics);
    }
  };

  // useEffect(() => {
  //   // Whenever the topic or difficulty changes, clear the previous questions
  //   setQuestions([]);
  // }, [topic, difficulty]);

  useEffect(() => {
    // Fetch the previous topics when the component is loaded
    fetchPreviousTopics();
  }, [userId]);

  if (!userId) {
    return <Landing errorMessage="Please sign in to generate flashcards." />;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Flashmind Card Generator</h1>
            <p className="text-muted-foreground">
              Enter a topic to generate a set of quiz questions.
            </p>
          </div>
          <div className="flex gap-4">
            <Button onClick={fetchPreviousTopics}>Previous Topics</Button>
            <Button onClick={saveFlashcards}>Save Flashcards</Button>
          </div>
        </div>
        <div className="mb-8">
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
          <div className="flex flex-col items-center w-full flex-wrap">
            {previousTopics.length > 0 && (
              <div className="w-full mb-4">
                <h2 className="text-2xl font-semibold mb-2">Previous Topics</h2>
                <div className="flex flex-row gap-2 bg-gray-100 rounded-md p-4">
                  {previousTopics.map((topic, index) => (
                    <span key={index} className="text-white bg-neutral-900 p-1 px-4 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {questions.length === 0 && !loading && (
              <div className="text-center text-primary-foreground rounded-md relative bg-gray-200 w-full h-[40vh]">
                <span className="text-md bg-neutral-600 p-2 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">No cards</span>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4">
              {loading && questions.length === 0 && (
                Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="flex flex-col space-y-3">
                    <Skeleton className="w-[350px] h-[300px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[350px]" />
                      <Skeleton className="h-4 w-[350px]" />
                    </div>
                  </div>
                ))
              )}
              {questions.map((question, index) => (
                <Card
                  key={index}
                  title={`Flashcard ${index + 1}`}
                  question={question.front}
                  answer={question.back}
                  difficulty={question.difficulty}
                />
              ))}
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}
