import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0e1a]/80 backdrop-blur-lg border-t border-blue-900/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Sami Mehmood
            </h3>
            <p className="text-gray-400 text-sm">
              Digital marketer and media professional specializing in social media strategy, SEO, and brand development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Home
              </a>
              <a href="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Services
              </a>
              <a href="/strategies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Strategies
              </a>
              <a href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Projects
              </a>
              <a href="/case-studies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Case Studies
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:mehmoodsami00@icloud.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <Mail size={16} />
                mehmoodsami00@icloud.com
              </a>
              <a href="tel:+923182050859" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <Phone size={16} />
                +92 318 2050859
              </a>
              <a
                href="https://linkedin.com/in/sami-mehmood-948032204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-900/30 text-center text-gray-500 text-sm">
          <p>© 2026 Sami Mehmood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}