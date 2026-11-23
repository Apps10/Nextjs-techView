"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import React from "react"
import { TypeAnimation } from "react-type-animation"

export  function HeroBlock() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 py-20">
        <h1 className="flex flex-col items-center gap-2 text-5xl font-extrabold tracking-tight md:text-6xl">
          Practice real interview
        </h1>
        <span className="mb-8 inline-block items-center rounded-xl bg-indigo-500 px-6 py-2 shadow-[0_0_20px_#6466f1]">
          <TypeAnimation
            sequence={[
              2000,
              "Frontend 🌹",
              2000,
              "Backend 🧠",
              2000,
              "DevOps 💻",
              2000,
              "Data 🔎",
              2000,
            ]}
            wrapper="span"
            speed={40}
            className="inline-block text-center text-5xl font-extrabold tracking-tight md:text-6xl"
            repeat={Infinity}
          />
        </span>
        <p className="mx-auto mb-12 max-w-xl text-center text-lg leading-relaxed font-light text-indigo-100/50 md:text-xl">
          Prepare for your next job with realistic interview simulations and
          actionable feedback
        </p>

        <div className="items-center justify-center pb-5">
          <Button className="rounded-lg bg-purple-600 px-10 py-6 text-lg font-semibold text-white transition duration-300 ease-in-out shadow-lg"
          >
            <Sparkles className="transition-transform group-hover:rotate-12" />
            <Link href="/dashboard">
              Start Practicing Now
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-8 text-sm text-slate-200 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"/>
              + 5 Interview Type
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"/>
              No credit card required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"/>
              Instant FeedBack
          </div>
        </div>
      </div>
    </section>
  )
}
