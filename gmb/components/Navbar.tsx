'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { IconHamburger, IconClose, IconCart } from './navbar/Icons';
import { NAV_LINKS } from './navbar/NavLinks';
import { CartBadge } from './navbar/CartBadge';
import { MegaMenu } from './navbar/MegaMenu';
import { CartDrawer } from './navbar/CartDrawer';

const iconBtnCls = 'bg-white text-slate-600 p-2.5 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md hover:border-slate-300 hover:text-primary transition-all flex items-center justify-center';

const Navbar = () => {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const openCart = () => setIsCartOpen(true);
  
  const showCart = cartCount > 0 || pathname?.startsWith('/store');

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 transition-all">
        <div className="container max-w-7xl mx-auto">
          <div className="flex justify-between h-24 items-center">

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold gradient-text flex-shrink-0">GMB</Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-10">
              <Link href="/" className="text-slate-700 hover:text-primary transition-colors font-medium">Home</Link>

              {/* Products with Mega Menu */}
              <div className="relative group h-full flex items-center">
                <Link href="/products" className="text-slate-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                  Products
                  <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <MegaMenu />
              </div>
            </div>

            {/* Right Utilities */}
            <div className="flex items-center gap-3">
              {/* Desktop only */}
              <div className="hidden md:flex items-center gap-3">
                {showCart && (
                  <button onClick={openCart} className={`${iconBtnCls} relative`} title="Your Cart">
                    <IconCart />
                    <CartBadge count={cartCount} />
                  </button>
                )}
                <Link href="/store">
                  <button className="bg-white/80 backdrop-blur text-slate-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-white border border-slate-200/60 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all whitespace-nowrap text-sm">
                    Buy yourself
                  </button>
                </Link>
                <Link href="/contact?form=quote">
                  <button className="bg-primary text-white border border-primary/20 px-6 py-2.5 rounded-xl font-bold hover:shadow-[0_8px_20px_-6px_rgba(31,46,90,0.4)] hover:-translate-y-0.5 hover:bg-primary/95 transition-all whitespace-nowrap text-sm relative overflow-hidden group">
                    <span className="relative z-10">Request Quote</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                  </button>
                </Link>
              </div>

              {/* Mobile Cart */}
              {showCart && (
                <button onClick={openCart} className="md:hidden relative bg-slate-100 text-slate-600 p-2.5 rounded-xl hover:bg-slate-200 transition-colors" title="Your Cart">
                  <IconCart />
                  <CartBadge count={cartCount} mobile />
                </button>
              )}

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-white/80 border border-slate-200/60 shadow-sm text-slate-600 p-2.5 rounded-xl hover:bg-white transition-all flex items-center justify-center"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <IconClose /> : <IconHamburger />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? 'max-h-[600px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={closeMenu} className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" onClick={closeMenu} className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors">
              Products
            </Link>
            <div className="pt-2 pb-4 space-y-3">
              <Link href="/store" onClick={closeMenu} className="block w-full">
                <button className="w-full bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold border border-slate-200/60 shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                   Buy yourself
                </button>
              </Link>
              <Link href="/contact?form=quote" onClick={closeMenu} className="block w-full">
                <button className="w-full bg-primary text-white border border-primary/20 px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                  Request Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer />

      {/* Mobile backdrop */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
