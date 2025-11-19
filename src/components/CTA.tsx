import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* CTA box */}
          <div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-8 md:p-12"
            data-aos="fade-up"
          >
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
                Ready to get started?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Join thousands of teams already using our platform to scale their content operations.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 sm:w-auto"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-600 hover:border-gray-500 sm:w-auto"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
