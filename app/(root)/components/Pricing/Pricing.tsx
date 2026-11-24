import React from "react"
import { pricingPlan } from "./Pricing.data"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { Space_Mono } from "next/font/google"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  return (
    <section
      className="bg-linear-to-br from-purple-700/10 to-purple-900 py-24"
      id="pricing"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Choose your plan
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-200">
            Start Free, upgrade when you are ready to ace every in
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {pricingPlan.map((plan, index) => (
            <Card
              key={index}
              className={`relative group transition-all duration-300 hover:shadow-xl border-0 px-2 py-6 ${
                plan.popular
                  ? "rounded-md border border-purple-400/30 bg-purple-900/70 p-2 text-purple-200"
                  : "rounded-md border border-purple-400/30 bg-purple-600/20 p-2 text-purple-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-1 -right-17 transform -translate-x-1/2">
                  <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-900">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4 text-center">
                <CardTitle className="text-2xl font-semibold">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
                <p className="text-slate-200 mt-2 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul>{plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-4 my-2">
                    <Check className="w-5 h-5 text-emerald-400 "/>
                    <span className="text-sm">{feature}</span>
                    </li>
                ))}</ul>
                <Button size='lg'
                  className={`w-full font-semibold ${plan.popular 
                    ? "bg-indigo-500 hover:bg-indigo-600 shadow-md text-white"
                    : "bg-purple-600/30 hover:bg-purple-700/30 text-white border border-purple-400/20"
                  }`}
                >{plan.ButtonText}</Button>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
