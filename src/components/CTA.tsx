import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* CTA box */}
          <div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 md:p-12"
            data-aos="fade-up"
          >
            {/* Background illustration */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2" aria-hidden="true">
              <img
                className="max-w-none"
                src="/images/footer-illustration.svg"
                width="1076"
                height="378"
                alt="CTA illustration"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
                Ready to get started?
              </h2>
              <p className="mb-8 text-lg text-gray-400">
                Join thousands of teams already using our platform to scale their content operations.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a className="btn group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:w-auto" href="#0">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:w-auto" href="#0">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
