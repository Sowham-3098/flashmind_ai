'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import success from "../../asset/img/success.gif";

export default function PaymentSuccess() {
    // Use the useSearchParams hook to access the query parameters
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');
    const redirectStatus = searchParams.get('redirect_status');

    return (
        <main className="max-w-6xl mx-auto text-center  min-h-screen   ">
            <Card className="w-full max-w-md mx-auto rounded-md overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CardHeader className="text-center bg-green-900  text-primary-foreground">
                    <CardTitle>Payment {redirectStatus}</CardTitle>
                    <CardDescription className="text-success-foreground">Successfully purchased Basic Plan </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4"></CardContent>
                <div className="">
                    <div className="flex justify-center">
                        <Image src={success} alt="success" width={200} height={200} />
                    </div>
                    <h2 className="text-xl">You successfully purchased</h2>
                    <div className="text-center bg-neutral-200 py-2 mt-4">
                        <p className="text-xl mt-4">Amount :{amount} $</p>
                        <p className="text-xl mt-2">Status: {redirectStatus}</p>
                    </div>
                </div>

            </Card>


        </main>
    );
}
