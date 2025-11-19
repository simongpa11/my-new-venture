import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      content: "This platform has completely transformed how we manage our content operations. The speed and efficiency gains are remarkable.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      image: "/images/testimonial-01.jpg",
      rating: 5,
    },
    {
      content: "The best investment we've made for our team. The collaboration features alone have saved us countless hours every week.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "StartupHub",
      image: "/images/testimonial-02.jpg",
      rating: 5,
    },
    {
      content: "Intuitive, powerful, and scales perfectly with our growing team. Customer support is outstanding too.",
      author: "Emily Watson",
      role: "Head of Operations",
      company: "Enterprise Inc",
      image: "/images/testimonial-03.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-up">
              Trusted by teams worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="100">
              See what our customers have to say about their experience.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-b from-gray-100/50 to-white/50 p-6 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.200),theme(colors.gray.300))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-indigo-500 text-indigo-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-gray-700">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-700">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
