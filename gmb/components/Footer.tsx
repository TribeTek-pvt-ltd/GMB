'use client';

import { useModal } from '@/lib/ModalContext';
import Link from 'next/link';

const Footer = () => {
  const { openTrackModal } = useModal();

  return (
    <footer className="bg-slate-900/20 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold gradient-text mb-6 block">
              CurtainMaster
            </Link>
            <p className="text-slate-400">
              Premium window treatments for modern homes and offices. Elevating spaces with artisan craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li>
                <button 
                  onClick={openTrackModal}
                  className="hover:text-primary transition-colors bg-transparent border-none p-0 cursor-pointer text-slate-400"
                >
                  Track Order
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/auth/login" className="hover:text-primary transition-colors">Login</Link></li>
              <li><Link href="/auth/register" className="hover:text-primary transition-colors">Register</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li>123 Curtain Street, Fabric City</li>
              <li>info@curtainmaster.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-500">
          <p>&copy; 2026 CurtainMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
