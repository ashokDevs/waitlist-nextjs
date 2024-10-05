"use client";

import React, { useState } from "react";
import Header from "./Header";

export default function Waitlist() {
  const [email, setEmail] = useState(""); 
  const [statusMessage, setStatusMessage] = useState(""); 
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function storeEmail(e: React.FormEvent) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/airtable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), 
      });

      if (response.ok) {
        setEmail("");
        setLoading(false);
        setStatusMessage("You have joined successfully!");
      } else {
        setStatusMessage("Something went wrong!");
      }
    } catch (error) {
      setStatusMessage(`Something went wrong! ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center">
          <p className="text-base-content">
            Simple! Easy! Fast! Viral Video Generator
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-base-content">
            Create viral faceless videos in seconds
          </h1>
          <p className="text-xl mb-8 text-base-content/70">
            With one tap, generate vertical shorts like &quot;Would You
            Rather&quot; or viral quizzes and beyond!
          </p>

          <form onSubmit={storeEmail} className="space-y-4">
            <p className="text-sm">
              Join Blake, Zack, and 567 others on the waitlist
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-2 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered flex-grow py-3 px-4 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-28 mt-2 md:mt-0"
              >
                {loading ? (
                  <span className="loading loading-spinner text-accent"></span>
                ) : (
                  <p>Join waitlist</p>
                )}
              </button>
            </div>
          </form>

          {statusMessage && (
            <p className="mt-4 text-lg font-bold">{statusMessage}</p>
          )}
        </div>
      </main>
    </div>
  );
}
