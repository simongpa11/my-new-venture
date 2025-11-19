import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative">
      {/* Background illustration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2" aria-hidden="true">
        <img className="max-w-none" src="/images/page-illustration.svg" width="1440" height="427" alt="Page Illustration" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6 border-y border-gray-800 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
              <div className="-mx-0.5 flex justify-center">
                <a
                  className="inline-flex items-center justify-center gap-3 border-y px-3 py-1 text-sm font-medium text-gray-300 transition before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-800/50 before:via-gray-900 before:to-gray-800/50 before:blur-sm hover:text-white [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Built by dreamers, for dreamers{' '}
                    <span className="ml-1 tracking-normal text-indigo-500 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
            
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl" data-aos="fade-up">
              The content-first platform
            </h1>
            
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-400" data-aos="fade-up" data-aos-delay="100">
                Power your business with the platform that scales with your ambitions. Advanced controls, customizable workflows, and built for teams of all sizes.
              </p>
              
              <div className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0" data-aos="fade-up" data-aos-delay="200">
                <Button size="lg" className="w-full bg-gradient-to-t from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 sm:w-auto">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="group w-full border-gray-700 hover:border-gray-600 sm:w-auto">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  <span>Watch Demo</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mx-auto max-w-3xl" data-aos="fade-up" data-aos-delay="300">
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">openpro.ai</span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] mr-1">npm</span>
                <span className="animate-[code-2_10s_infinite]">install</span>
                <span className="animate-[code-3_10s_infinite] -ml-1 mr-1">openpro</span>
                <span className="animate-[code-4_10s_infinite]">--global</span>
                <br />
                <span className="animate-[code-5_10s_infinite]">$ openpro</span>
                <span className="animate-[code-6_10s_infinite] ml-1">create</span>
                <span className="animate-[code-7_10s_infinite] ml-1">my-app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
