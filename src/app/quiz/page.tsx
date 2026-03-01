"use client";

import { useState } from "react";
import Link from "next/link";

interface QuizAnswer {
  question: string;
  answer: string;
  score: number;
}

const QUESTIONS = [
  {
    question: "What's your primary motivation for moving abroad?",
    options: [
      { text: "Lower cost of living", score: 3 },
      { text: "Better quality of life for my family", score: 4 },
      { text: "Adventure / new experience", score: 2 },
      { text: "Remote work flexibility", score: 3 },
      { text: "Just exploring the idea", score: 1 },
    ],
  },
  {
    question: "Do you have school-age children?",
    options: [
      { text: "Yes, elementary age (5-11)", score: 4 },
      { text: "Yes, middle/high school (12-18)", score: 4 },
      { text: "Yes, preschool (under 5)", score: 3 },
      { text: "No children", score: 2 },
      { text: "Planning to have children abroad", score: 3 },
    ],
  },
  {
    question: "What's your timeline?",
    options: [
      { text: "Within 6 months", score: 5 },
      { text: "6-12 months", score: 4 },
      { text: "1-2 years", score: 3 },
      { text: "2+ years", score: 2 },
      { text: "No specific timeline", score: 1 },
    ],
  },
  {
    question: "What's your monthly budget for living abroad?",
    options: [
      { text: "Under $3,000/month", score: 3 },
      { text: "$3,000 - $5,000/month", score: 4 },
      { text: "$5,000 - $8,000/month", score: 4 },
      { text: "$8,000+/month", score: 5 },
      { text: "Not sure yet", score: 2 },
    ],
  },
  {
    question: "How important is proximity to the US?",
    options: [
      { text: "Very — need to visit family often", score: 3 },
      { text: "Somewhat — a few trips per year", score: 3 },
      { text: "Not important — open to anywhere", score: 4 },
      { text: "Already have family/ties abroad", score: 5 },
    ],
  },
  {
    question: "What's your biggest concern about moving?",
    options: [
      { text: "Finding good schools for my kids", score: 4 },
      { text: "Safety and security", score: 3 },
      { text: "Visa / legal complexity", score: 3 },
      { text: "Language barriers", score: 2 },
      { text: "Leaving friends and family behind", score: 2 },
    ],
  },
  {
    question: "Have you visited your target country?",
    options: [
      { text: "Yes, multiple times", score: 5 },
      { text: "Yes, once", score: 4 },
      { text: "No, but I've done extensive research", score: 3 },
      { text: "No, I'm just starting to explore", score: 2 },
    ],
  },
  {
    question: "What's your income situation?",
    options: [
      { text: "Remote job with US employer", score: 5 },
      { text: "Self-employed / freelancer", score: 4 },
      { text: "Passive income / investments", score: 5 },
      { text: "Need to find work abroad", score: 2 },
      { text: "Retired / pension", score: 4 },
    ],
  },
];

function getResult(score: number) {
  if (score >= 32) {
    return {
      title: "🟢 You're Ready to Move",
      description:
        "You have a clear motivation, realistic budget, and the income flexibility to make this work. The main thing standing between you and your move is detailed, city-specific research.",
      recommendation:
        "A personalized relocation report will save you weeks of research and help you avoid costly mistakes. You're at the stage where specific school recommendations, neighborhood picks, and visa guidance matter most.",
      cta: true,
    };
  }
  if (score >= 24) {
    return {
      title: "🟡 Almost Ready — Need More Research",
      description:
        "You're seriously considering a move and have many of the pieces in place. A few areas need more clarity — timeline, budget, or destination choice.",
      recommendation:
        "A relocation report can help you compare cities and narrow your options. Many families at your stage order reports for 2-3 cities to find the best fit.",
      cta: true,
    };
  }
  if (score >= 16) {
    return {
      title: "🟠 Early Exploration Phase",
      description:
        "You're interested in the idea of moving abroad but still in the early stages. That's perfectly fine — most families spend 1-2 years in this phase before committing.",
      recommendation:
        "Start with our free blog guides to learn about different destinations. When you're ready to get serious about a specific city, a personalized report will give you the detailed info you need.",
      cta: false,
    };
  }
  return {
    title: "🔵 Just Getting Started",
    description:
      "You're curious about the possibility of moving abroad. There's no rush — take your time exploring the idea.",
    recommendation:
      "Browse our city guides to learn what life is like for American families in different countries. You might be surprised by what's possible.",
    cta: false,
  };
}

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const result = getResult(totalScore);

  function handleAnswer(optionText: string, score: number) {
    const newAnswers = [
      ...answers,
      {
        question: QUESTIONS[currentQ].question,
        answer: optionText,
        score,
      },
    ];
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  }

  if (showResult) {
    return (
      <main className="min-h-screen px-6 py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{result.title}</h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-400">
              Score: {totalScore} / {QUESTIONS.length * 5}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] space-y-4">
            <p className="text-gray-300 leading-relaxed">{result.description}</p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Our recommendation:</strong>{" "}
              {result.recommendation}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {result.cta && (
              <Link
                href="/#order"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all"
              >
                Get Your Personalized Report — $149 →
              </Link>
            )}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium border border-white/20 hover:bg-white/5 transition-colors"
            >
              Browse Free City Guides
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
            <h3 className="font-semibold text-lg mb-4">Your Answers</h3>
            <div className="space-y-3">
              {answers.map((a, i) => (
                <div key={i} className="text-sm">
                  <p className="text-gray-500">{a.question}</p>
                  <p className="text-gray-300">→ {a.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setCurrentQ(0);
                setAnswers([]);
                setShowResult(false);
              }}
              className="text-sm text-gray-500 hover:text-gray-300 underline"
            >
              Retake quiz
            </button>
          </div>
        </div>
      </main>
    );
  }

  const q = QUESTIONS[currentQ];
  const progress = ((currentQ) / QUESTIONS.length) * 100;

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="text-emerald-400 text-sm hover:text-emerald-300"
          >
            ← Back to Relocate
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">
            Relocation Readiness Quiz
          </h1>
          <p className="text-gray-400">
            Find out how ready your family is to move abroad
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 text-center">
          Question {currentQ + 1} of {QUESTIONS.length}
        </p>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-6">
          <h2 className="text-xl font-semibold">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.text}
                onClick={() => handleAnswer(opt.text, opt.score)}
                className="w-full text-left px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-gray-300"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
