"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id");

    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCheckoutSession = async () => {
            if (!session_id) return;
            try {
                const res = await fetch(`/api/checkout?session_id=${session_id}`);
                const data = await res.json();
                if (res.ok) {
                    setSession(data);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCheckoutSession();
    }, [session_id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {session.payment_status === "paid" ? (
                <h1>Thank you for subscribing!</h1>
            ) : (
                <h1>Payment Failed</h1>
            )}
        </div>
    );
}
