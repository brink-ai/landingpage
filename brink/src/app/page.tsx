"use client";
import { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (!app) {
  throw new Error("Firebase app not initialized.");
} else {
  console.log("Firebase app initialized.");
}
const db = getFirestore(app);

interface WaveParams {
  amplitude: number;
  frequency: number;
  speed: number;
  windAmplitude: number;
  windFrequency: number;
  windSpeed: number;
}

export default function Home() {
  const animationRef = useRef<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    let time = 0;

    const wave1: WaveParams = {
      amplitude: 60,
      frequency: 0.003,
      speed: 0.005,
      windAmplitude: 40,
      windFrequency: 0.001,
      windSpeed: 0.002,
    };

    const wave2: WaveParams = {
      amplitude: 50,
      frequency: 0.003,
      speed: 0.005,
      windAmplitude: 45,
      windFrequency: 0.001,
      windSpeed: 0.0022,
    };

    const generateWavePath = (
      params: WaveParams,
      yOffset: number,
      timeOffset: number,
    ): string => {
      const points = [];
      const numberOfPoints = 100;

      for (let i = 0; i <= numberOfPoints; i++) {
        const x = (i / numberOfPoints) * 3000 - 720;

        const baseWave =
          params.amplitude *
          Math.sin(params.frequency * x + params.speed * time);

        const windEffect =
          params.windAmplitude *
          Math.sin(
            params.windFrequency * x + params.windSpeed * time + timeOffset,
          );

        const y = yOffset + baseWave + windEffect;
        points.push(`${x},${y}`);
      }
      return `M${points.join(" L")}`;
    };

    const animate = () => {
      time += 1;

      const wavePath1 = document.getElementById("wavePath1");
      const wavePath2 = document.getElementById("wavePath2");

      if (wavePath1 && wavePath2) {
        wavePath1.setAttribute("d", generateWavePath(wave1, 150, 0));
        wavePath2.setAttribute(
          "d",
          generateWavePath(wave2, 150, Math.PI * 0.25),
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: Timestamp.now(),
      });
      setMessage(
        "Thanks, you've been added to the waitlist! Stay tuned for the latest updates.",
      );
      setEmail("");
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      setMessage("Failed to add to waitlist. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#1A1A1A] text-white ${montserrat.className} relative flex flex-col`}
    >
      <div className="absolute top-24 inset-x-0 overflow-visible pointer-events-none h-64">
        <svg
          className="w-full h-full opacity-25"
          viewBox="-720 0 3000 300"
          preserveAspectRatio="xMidYMid meet"
          style={{ transform: "scale(1.2)" }}
        >
          <path
            id="wavePath1"
            stroke="#ABA1D5"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col flex-grow justify-between">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider">b r i n k</div>
            <div className="flex gap-4">
              {/* <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                CONTACT US
              </button> */}
            </div>
          </div>
        </nav>

        <main className="flex-grow flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <section className="max-w-3xl text-center mx-auto">
              <h1 className="text-5xl sm:text-6xl font-light mb-12">
                <span className="bg-gradient-to-r from-[#7A70A6] to-[#C0B7E8] text-transparent bg-clip-text">
                  Personalized
                </span>{" "}
                AI Therapy{" "}
                <span className="block mt-4">
                  Powered by{" "}
                  <span className="bg-gradient-to-r from-[#7A70A6] to-[#C0B7E8] text-transparent bg-clip-text">
                    Biometrics
                  </span>
                </span>
              </h1>

              <form
                id="waitlistForm"
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="p-2 mb-4 border rounded text-black"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 mx-auto rounded-full bg-gradient-to-r from-[#7A70A6] to-[#524880] hover:opacity-90 transition-opacity text-white"
                >
                  Sign up for Waitlist
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                {message && <p className="text-center mt-4">{message}</p>}
              </form>
            </section>
          </div>
        </main>

        <footer className="text-center text-sm text-gray-400 py-8">
          2024 © BRINK - ALL RIGHTS RESERVED
        </footer>
      </div>

      <div className="absolute bottom-24 inset-x-0 overflow-visible pointer-events-none h-64">
        <svg
          className="w-full h-full opacity-25"
          viewBox="-720 0 3000 300"
          preserveAspectRatio="xMidYMid meet"
          style={{ transform: "scale(1.2)" }}
        >
          <path
            id="wavePath2"
            stroke="#ABA1D5"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
