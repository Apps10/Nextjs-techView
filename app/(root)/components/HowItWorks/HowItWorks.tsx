import React from "react"
import { howItWorksData } from "./HowItWorks.data"

export function HowItWorks() {
  return (
    <section
      className="bg-linear-to-br from-purple-700/10 to-purple-900 py-24"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-200">
            Get interview ready in just a few simple step
          </p>
        </div>

        <div className="ma-w-6xl m-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.map((step, index) => (
            <div className="group relative" key={index}>
              <div
                className="h-full rounded-2xl border bg-purple-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                key={index}
              >
                <div className="to-primary-grow/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary/10 transition-transform group-hover:scale-100">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
