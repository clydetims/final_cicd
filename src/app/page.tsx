import Hero from "@/components/Hero";
import Features from "@/components/Features";

// Simple function to demonstrate unit testing
export function getWelcomeMessage() {
  return "Welcome to Clyde's Show";
}

export default function Home() {
  return (
    <div className="bg-white">
      <div className="hidden">{getWelcomeMessage()}</div>
      <Hero />
      <Features />
    </div>
  );
}

