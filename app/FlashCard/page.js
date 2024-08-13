/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wzjSwp101cy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Card from "../components/Card"
import Layout from "../components/Layout"

export default function Component() {
  const [topic, setTopic] = useState("")
  const [questions, setQuestions] = useState([])
  const handleTopicChange = (e) => {
    setTopic(e.target.value)
  }
  const generateQuestions = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/riddles?limit=8', {
        headers: {
          'X-Api-Key': 'NEv844FFjeGw3eMJlXxoSg==freytZWdZ9yir0TW'
        }
      });


      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      setQuestions(result);
      console.log(result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
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
            <Button type="submit" >Generate</Button>
          </form>
          <div className=" flex justify-center items-center">
            <div className="grid grid-cols-3 ">
              {questions.map((question, index) => (
                <Card key={index} title={question.title} question={question.question} answer={question.answer} />

              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>


  )
}