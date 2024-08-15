"use client";

import CheckoutForm from "../components/CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"


if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
    const amount = 1;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Secure Payment</CardTitle>
                    <CardDescription>Enter your payment details below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">

                        <Elements
                            stripe={stripePromise}
                            options={{
                                mode: "payment",
                                amount: 100,
                                currency: "usd",
                            }}
                        >
                            <CheckoutForm amount={amount} />
                        </Elements>

                    </div>
                </CardContent>
            </Card>
        </main>

    );
}