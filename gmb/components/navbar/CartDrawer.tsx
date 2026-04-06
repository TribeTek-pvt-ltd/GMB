'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { IconClose } from './Icons';

export function CartDrawer() {
  const { cartCount, cartItems, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();
  const close = () => setIsCartOpen(false);

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={close} />

      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-[#1F2E5A] font-serif">Your Cart</h2>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <button onClick={close} className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-600">
            <IconClose />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-bold">Your cart is empty</p>
                <p className="text-slate-500 text-sm mt-1">Add some masterpieces to get started.</p>
              </div>
              <button onClick={close} className="text-primary font-bold text-sm hover:underline underline-offset-4">Continue Browsing</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[#1F2E5A] text-sm truncate pr-2">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-slate-400 text-xs mt-0.5">Signature {item.category || 'Collection'}</p>
                  {item.configuration && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded truncate max-w-[80px]">{item.configuration.width}x{item.configuration.drop}mm</span>
                      <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded truncate max-w-[80px]">{item.configuration.fabric}</span>
                    </div>
                  )}
                  <div className="mt-auto flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-100 self-start">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1} className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors text-slate-500 disabled:opacity-30">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                    </button>
                    <span className="text-xs font-bold text-slate-700 w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors text-slate-500">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest text-center">Selection for personalized master consultation</p>
            <Link href="/contact?form=quote" className="block w-full" onClick={close}>
              <button className="w-full bg-[#1F2E5A] text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-3 group">
                Request Quote for Selection
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
            <button onClick={close} className="w-full text-center text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors py-2">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
