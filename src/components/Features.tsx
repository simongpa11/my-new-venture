import { Zap, Shield, Code, Users, Database, Workflow } from 'lucide-react';

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
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates and advanced permissions.',
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Built on modern cloud infrastructure that grows with your needs.',
    },
    {
      icon: Workflow,
      title: 'Custom Workflows',
      description: 'Create and automate workflows tailored to your unique business processes.',
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-up">
              Advanced controls for modern teams
            </h2>
            <p className="mt-4 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="100">
              Everything you need to build, scale, and manage your content operations in one powerful platform.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-b from-gray-100/50 to-white/50 p-6 backdrop-blur-sm transition-all hover:bg-white before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.200),theme(colors.gray.300))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-500">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Large feature */}
          <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-100/50 to-white/50 p-8 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.200),theme(colors.gray.300))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:p-12">
              <div className="relative z-10">
                <h3 className="mb-4 font-nacelle text-2xl font-semibold text-gray-900 md:text-3xl">
                  Built for collaboration
                </h3>
                <p className="mb-8 max-w-2xl text-lg text-gray-700">
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
