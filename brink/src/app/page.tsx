"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[#1A1A1A] text-white ${inter.className} relative flex flex-col`}
    >
      {/* Background curves with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Pattern that repeats perfectly */}
            <path
              id="wavePath1"
              d="M-720,250
                 C-520,200 -320,300 -120,250
                 C80,200 280,300 480,250
                 C680,200 880,300 1080,250
                 C1280,200 1480,300 1680,250
                 C1880,200 2080,300 2280,250"
              fill="none"
            />
            <path
              id="wavePath2"
              d="M-720,450
                 C-520,400 -320,500 -120,450
                 C80,400 280,500 480,450
                 C680,400 880,500 1080,450
                 C1280,400 1480,500 1680,450
                 C1880,400 2080,500 2280,450"
              fill="none"
            />
          </defs>

          {/* Multiple wave instances with different phases */}
          <use
            href="#wavePath1"
            stroke="#ABA1D5"
            strokeWidth="2"
            className="animate-wave-1"
          />
          <use
            href="#wavePath1"
            stroke="#ABA1D5"
            strokeWidth="2"
            className="animate-wave-2"
          />
          <use
            href="#wavePath2"
            stroke="#ABA1D5"
            strokeWidth="2"
            className="animate-wave-3"
          />
          <use
            href="#wavePath2"
            stroke="#ABA1D5"
            strokeWidth="2"
            className="animate-wave-4"
          />
        </svg>
      </div>

      {/* Rest of the content remains the same */}
      <div className="relative z-10 flex flex-col flex-grow justify-between">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider">b r i n k</div>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                CONTACT US
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 mx-auto rounded-full bg-gradient-to-r from-[#7A70A6] to-[#524880] hover:opacity-90 transition-opacity text-white">
                JOIN WAITLIST
              </button>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#524880"
                  d="M39,-50.2C53.4,-43.1,70.1,-35.7,77.3,-22.9C84.4,-10.2,81.9,7.8,75.5,23.6C69,39.3,58.6,52.8,45.4,60.4C32.1,67.9,16.1,69.5,2,66.8C-12.2,64.1,-24.3,57.2,-39.7,50.3C-55.1,43.5,-73.8,36.8,-74.5,26.2C-75.3,15.6,-58.1,1.1,-50.4,-14.5C-42.8,-30.2,-44.6,-47,-37.8,-56.5C-30.9,-66,-15.5,-68.2,-1.6,-66C12.2,-63.8,24.5,-57.2,39,-50.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </nav>

        <main className="flex-grow flex items-center">
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
              <p className="text-xl text-gray-300 mb-12">
                Experience therapy that knows you—brink adapts to your needs
                using biometric insights.
              </p>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#524880"
                  d="M39,-50.2C53.4,-43.1,70.1,-35.7,77.3,-22.9C84.4,-10.2,81.9,7.8,75.5,23.6C69,39.3,58.6,52.8,45.4,60.4C32.1,67.9,16.1,69.5,2,66.8C-12.2,64.1,-24.3,57.2,-39.7,50.3C-55.1,43.5,-73.8,36.8,-74.5,26.2C-75.3,15.6,-58.1,1.1,-50.4,-14.5C-42.8,-30.2,-44.6,-47,-37.8,-56.5C-30.9,-66,-15.5,-68.2,-1.6,-66C12.2,-63.8,24.5,-57.2,39,-50.2Z"
                  transform="translate(100 100)"
                />
              </svg>
              <button className="flex items-center justify-center gap-2 px-8 py-4 mx-auto rounded-full bg-gradient-to-r from-[#7A70A6] to-[#524880] hover:opacity-90 transition-opacity text-white">
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
            </section>
          </div>
        </main>

        <footer className="text-center text-sm text-gray-400 py-8">
          2024 © BRINK - ALL RIGHTS RESERVED
        </footer>
      </div>

      <style jsx>{`
        @keyframes waveFlow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-wave-1 {
          animation: waveFlow 20s linear infinite;
        }

        .animate-wave-2 {
          animation: waveFlow 20s linear infinite;
          animation-delay: -10s;
          opacity: 0.7;
        }

        .animate-wave-3 {
          animation: waveFlow 25s linear infinite;
        }

        .animate-wave-4 {
          animation: waveFlow 25s linear infinite;
          animation-delay: -12.5s;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
