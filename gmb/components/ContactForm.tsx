'use client';

// Force re-render after hydration fix
import { useState } from 'react';

const ContactForm = () => {
  const [formType, setFormType] = useState<'general' | 'quote'>('general');

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab Selection */}
          <div className="flex p-1 bg-slate-900/40 rounded-2xl mb-12 max-w-md mx-auto">
            <button
              onClick={() => setFormType('general')}
              className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                formType === 'general' 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              General Inquiry
            </button>
            <button
              onClick={() => setFormType('quote')}
              className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                formType === 'quote' 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Request Quote
            </button>
          </div>

          <div className="premium-card p-8 md:p-12 glassmorphism border-primary/10">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {formType === 'general' ? 'Send a Message' : 'Request a Professional Measurement'}
            </h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-200 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-200 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (234) 567-890"
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20" 
                />
              </div>

              {formType === 'quote' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-200 ml-1">Preferred Product</label>
                    <select className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20">
                      <option>Curtains</option>
                      <option>Blinds</option>
                      <option>Sheers</option>
                      <option>Motorized Blinds</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-200 ml-1">Number of Windows</label>
                    <input 
                      type="number" 
                      min="1"
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20" 
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 ml-1">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20"
                ></textarea>
              </div>

              <button className="w-full bg-[var(--accent-yellow)] text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20">
                {formType === 'general' ? 'Send Message' : 'Request Free Measurement'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
