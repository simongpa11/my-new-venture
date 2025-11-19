import { Zap, Shield, Code } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance that scales with your growth.',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security with advanced encryption and compliance features.',
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'Powerful APIs and SDKs that make integration seamless and flexible.',
    },
  ];

  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-up">
              Advanced controls for modern teams
            </h2>
            <p className="mt-4 text-lg text-gray-400" data-aos="fade-up" data-aos-delay="100">
              Everything you need to build, scale, and manage your content operations in one powerful platform.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gray-900/40 p-6 transition-all hover:bg-gray-900/60"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                  <feature.icon className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="mb-2 font-nacelle text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Large feature */}
          <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-900/25 p-8 md:p-12">
              <div className="relative z-10">
                <h3 className="mb-4 font-nacelle text-2xl font-semibold text-white md:text-3xl">
                  Built for collaboration
                </h3>
                <p className="mb-8 max-w-2xl text-lg text-gray-400">
                  Work together seamlessly with real-time updates, advanced permissions, and powerful integrations that keep your team in sync.
                </p>
                <img src="/images/features.png" alt="Features" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
