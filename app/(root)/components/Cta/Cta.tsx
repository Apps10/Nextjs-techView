import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Cta() {
  return (
    <section className="bg-linear-to-br from-purple-800/45 to-purple-600/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to Ace <br /> Your Next Interview?
            </h2>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300">
              Join thousands of developers who ve transformed their interview
              skills and landed their dream jobs. Start practicing today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" variant="secondary">
              <Sparkles className="group-hover:rotate-12 transition-transform duration-300" />
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300"/>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-slate-200">Developers Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <div className="text-slate-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-slate-200">Companies Hiring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
