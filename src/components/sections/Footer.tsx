import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="relative w-10 h-10 overflow-hidden bg-white rounded-xl shadow-sm flex items-center justify-center">
                <Image
                  src="/logo/heart_logo.png"
                  alt="IRL Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-xl text-white">IRL</span>
            </Link>
            <p className="text-text-secondary max-w-sm">
              The first platform to provide the means for meeting in real life.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">__________</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-text-secondary hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/careers" className="text-sm text-text-secondary hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/apply" className="text-sm text-text-secondary hover:text-white transition-colors">Apply to Join</Link></li>
            </ul>
          </div>

          {/* 
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          */}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} @ IRL Inc. All rights reserved.</p>
          {/*
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">TikTok</Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}
