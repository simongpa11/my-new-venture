import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gray-950 text-gray-200 supports-[overflow:clip]:overflow-clip">
      <Header />
      <main className="grow">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
