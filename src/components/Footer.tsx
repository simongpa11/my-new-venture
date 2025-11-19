import { Twitter, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          {/* Footer illustration */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2" aria-hidden="true">
            <img className="max-w-none" src="/images/footer-illustration.svg" width="1076" height="378" alt="Footer illustration" />
          </div>

          {/* Footer content */}
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <img src="/images/logo.svg" width="32" height="32" alt="Open Pro" />
              </div>
              <p className="text-sm text-gray-400">
                The content-first platform that powers modern businesses.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#0">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#0">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#0">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#0">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#help">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 transition hover:text-white" href="#0">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
            <div className="text-sm text-gray-400">
              © 2024 Open PRO. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-gray-700 hover:text-white"
                href="#0"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-gray-700 hover:text-white"
                href="#0"
                aria-label="Github"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
