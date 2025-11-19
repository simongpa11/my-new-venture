import { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Essential',
      description: 'For individuals and small teams',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 10 team members',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'Community access',
      ],
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      popular: true,
      features: [
        'Up to 50 team members',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Advanced permissions',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        'Dedicated support',
        'Advanced security',
        'SLA guarantee',
        'Custom workflows',
      ],
    },
  ];

  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-up">
              Choose your plan
            </h2>
            <p className="mt-4 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="100">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 flex items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
              <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-600'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-12 rounded-full transition-colors ${isAnnual ? 'bg-indigo-500' : 'bg-gray-300'}`}
              >
                <span
                  className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-5' : ''}`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-600'}`}>
                Annual <span className="text-indigo-500">(Save 20%)</span>
              </span>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-gradient-to-b from-gray-100/50 to-white/50 p-6 backdrop-blur-sm ${
                  plan.popular
                    ? 'border-2 border-indigo-500 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.indigo.500),theme(colors.indigo.600))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'
                    : 'before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.200),theme(colors.gray.300))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 font-nacelle text-2xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-700">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="mb-1 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-2 text-gray-700">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-600">
                      Billed annually at ${plan.annualPrice}
                    </p>
                  )}
                </div>

                <a
                  className={`btn mb-6 w-full ${
                    plan.popular
                      ? 'bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]'
                      : 'bg-white text-gray-800 shadow hover:bg-gray-50'
                  }`}
                  href="#0"
                >
                  Get Started
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-indigo-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
