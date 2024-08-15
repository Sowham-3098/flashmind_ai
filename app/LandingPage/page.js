'use client'

import Link from "next/link";


import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import Image from "next/image";
import Logo from "../../asset/img/Logo.png";
import bg from "../../asset/img/bg.png";
import bg1 from "../../asset/img/bg1.png";

import Layout from "../components/Layout";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";



export default function Landing({ errorMessage }) {
  useEffect(() => {
    if (errorMessage)
      toast.error(errorMessage);

  })
  return (
    <Layout>
      <Toaster />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Image
            src={bg1}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-t-3xl z-0"
          />
          <div className="relative z-10 container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                Unlock Your Learning Potential with AI-Generated Quiz Cards
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Create personalized quizzes on your favorite topics, enhance your knowledge, and track your progress.
                Experience interactive learning anytime, anywhere.
              </p>
              <div>
                <Link
                  href="/FlashCard"

                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI-Powered Quiz Generation</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Flashmind AI&apos;s quiz card generator uses cutting-edge natural language processing and machine learning algorithms to craft engaging and challenging quizzes on any topic you choose.

                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Personalized Topics</h3>
                      <p className="text-muted-foreground">
                        Create quizzes tailored to your interests and knowledge level.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Real-Time Feedback</h3>
                      <p className="text-muted-foreground">
                        Receive instant feedback on your answers to improve learning.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Subscription Benefits</h3>
                      <p className="text-muted-foreground">
                        Unlock exclusive features with our premium subscription plans.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={bg}
                  alt="AI Quiz Generation"
                  className="w-full max-w-[500px] rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Get answers to common questions about the Flashmind AI Quiz Card Generator.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  How do I create personalized quizzes?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  You can create personalized quizzes by selecting your preferred topics and difficulty level. Our AI
                  will generate a set of questions that match your choices, making learning more engaging and effective.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  What features are included in the subscription mode?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  Subscribers gain access to advanced quiz generation options, detailed progress tracking, and
                  exclusive topics. Enjoy a personalized learning journey with features designed to enhance your
                  experience.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  Can I share my quizzes with others?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  Yes, you can easily share your quizzes with friends and family. Each quiz generates a unique link
                  that you can share through social media, email, or any other platform.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  How does the real-time feedback feature work?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  The real-time feedback feature provides instant responses to your answers, helping you understand
                  the correct answer and learn from your mistakes immediately. This feature is available for both free
                  and subscribed users, enhancing your learning experience.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
      </main>

    </Layout>
  );
}




function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


