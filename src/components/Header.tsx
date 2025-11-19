import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <a className="inline-flex shrink-0" href="/" aria-label="Open PRO">
              <img src="/images/logo.svg" width="32" height="32" alt="Open Pro" />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <a className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3" href="#help">
                  Help Centre
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Button variant="ghost" size="sm" className="text-gray-200 hover:text-white">
                Sign in
              </Button>
            </li>
            <li>
              <Button size="sm" className="bg-gradient-to-t from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400">
                Register
              </Button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="ml-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-gray-900/90 p-4 md:hidden">
            <nav>
              <ul className="space-y-2">
                <li>
                  <a className="block px-3 py-2 text-gray-200 transition hover:text-indigo-500" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 text-gray-200 transition hover:text-indigo-500" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 text-gray-200 transition hover:text-indigo-500" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 text-gray-200 transition hover:text-indigo-500" href="#help">
                    Help Centre
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
