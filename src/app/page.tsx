// import { useState } from "react";
// // Simple contact form component for testing
// export function ContactForm() {
//   const [name, setName] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <form onSubmit={handleSubmit} aria-label="contact-form">
//       <label htmlFor="name">Name:</label>
//       <input
//         id="name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         placeholder="Enter your name"
//       />
//       <button type="submit">Submit</button>
//       {submitted && <div role="alert">Thank you, {name}!</div>}
//     </form>
//   );
// }

// Simple function to demonstrate unit testing
export function getWelcomeMessage() {
  return "Welcome to Clyde's Show";
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {getWelcomeMessage()}
        {/* <ContactForm /> */}
      </main>
    </div>
  );
}
