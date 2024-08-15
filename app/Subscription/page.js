/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tno2FJpyrC7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Layout from "../components/Layout";
import getStripe from "@/utils/getstripe";
import Link from 'next/link'

export default function Component() {
  // const handleSubmit = async () => {
  //   const checkoutSession = await fetch('/api/checkout',
  //     {
  //       method: 'POST',
  //       headers: {
  //         origin: 'http://localhost:3000',
  //       }
  //     }
  //   );
  //   const checkoutsessionJSON = await checkoutSession.json();
  //   if (checkoutsessionJSON.statusCode === 500) {
  //     console.error(checkoutsessionJSON.message);
  //     return
  //   }
  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: checkoutsessionJSON.id
  //   });
  //   if (error) {
  //     console.warn(error.message);
  //     return
  //   }
  // }





  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle> Basic </CardTitle>
              <CardDescription> Get started with our basic plan for individuals. </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold"> ₹1 </span>
                <span className="text-muted-foreground"> /month </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Access to basic features
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  5GB of storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Email support
                </li>
              </ul>
            </CardContent>
            <CardFooter>

              <Link href="/Checkout">
                <Button className="w-full" >Choose Basic</Button>
              </Link>

            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle> Pro </CardTitle>
              <CardDescription> Get the most out of our platform with the Pro plan. </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold"> ₹2 </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Access to all features
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  50GB of storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Priority email support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/Chekout">
                <Button className="w-full" >Choose Pro</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  )
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