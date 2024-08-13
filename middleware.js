// middleware.ts or middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

// Apply Clerk middleware globally or to specific routes
export default clerkMiddleware();

// Configuration for the middleware matcher
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
