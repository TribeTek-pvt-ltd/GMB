'use client';

// Force re-render after hydration fix
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ContactFormContent = () => {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<'general' | 'quote'>('general');
  const [products, setProducts] = useState<{category: string; count: number; width: string; height: string;}[]>([{ category: 'Curtains', count: 1, width: '', height: '' }]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', address: '' });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const type = searchParams.get('form');
    if (type === 'quote') {
      setFormType('quote');
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Image file (JPG, PNG, WebP)');
        return;
      }
      
      setPdfFile(file);
      setIsScanning(true);
      
      // Simulate scanning thread
      setTimeout(() => {
        setIsScanning(false);
      }, 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isScanning) return;
    
    setLoading(true);
    setStatus('idle');

    const payload = {
      ...formData,
      type: formType,
      products: formType === 'quote' ? products : undefined,
      hasAttachment: !!pdfFile
    };

    try {
      const res = await fetch('/api/public/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '', address: '' });
        setProducts([{ category: 'Curtains', count: 1, width: '', height: '' }]);
        setPdfFile(null);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const addProduct = () => {
    setProducts([...products, { category: 'Curtains', count: 1, width: '', height: '' }]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  const updateProduct = (index: number, field: string, value: string | number) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setProducts(newProducts);
  };

  return (
    <section className="pt-4 pb-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab Selection - Refined Minimalist */}
          <div className="flex p-1.5 bg-slate-100/50 backdrop-blur-sm rounded-full mb-10 max-w-sm mx-auto border border-slate-100">
            <button
              onClick={() => setFormType('general')}
              className={`flex-1 py-2.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 ${
                formType === 'general' 
                  ? 'bg-white text-[#1756a0] shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              General Enquiry
            </button>
            <button
              onClick={() => setFormType('quote')}
              className={`flex-1 py-2.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 ${
                formType === 'quote' 
                  ? 'bg-white text-[#1756a0] shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Request Quote
            </button>
          </div>

          <div className="bg-white border border-slate-100/80 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="max-w-xl mx-auto text-center mb-10">
               <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 text-[#0f172a]">
                  {formType === 'general' ? 'Send a Message' : 'Professional Consultation'}
               </h2>
               <p className="text-slate-500 font-light text-sm leading-relaxed">
                  {formType === 'general' 
                     ? "Have a question? We're here to provide expert guidance for your window treatment needs." 
                     : "Provide your details below to schedule a precise measurement at your location."}
               </p>
            </div>
            
            {status === 'success' && (
              <div className="mb-10 p-6 bg-slate-50 border border-slate-100 rounded-2xl text-[#1756a0] font-bold text-center animate-in fade-in zoom-in-95 duration-500 text-xs tracking-widest uppercase">
                ✨ Your enquiry has been received. Our team will contact you shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-10 p-6 bg-red-50/50 border border-red-100 rounded-2xl text-red-500 font-bold text-center text-xs tracking-widest uppercase">
                ❌ Encountered an issue. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 text-sm rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-[#1756a0] focus:ring-1 focus:ring-[#1756a0]/20 transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 text-sm rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-[#1756a0] focus:ring-1 focus:ring-[#1756a0]/20 transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="example@mail.com"
                    className="w-full px-6 py-4 text-sm rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-[#1756a0] focus:ring-1 focus:ring-[#1756a0]/20 transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Site Address</label>
                  <input 
                    type="text" 
                    required={formType === 'quote'}
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    placeholder="Project location"
                    className="w-full px-6 py-4 text-sm rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-[#1756a0] focus:ring-1 focus:ring-[#1756a0]/20 transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              {formType === 'quote' && (
                <div className="space-y-8 pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center ml-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Reference Media</label>
                      <span className="text-[9px] text-slate-300 font-medium uppercase tracking-widest">Optional • PDF, JPG, PNG</span>
                    </div>
                    
                    <div className="relative group">
                      <div className={`relative border border-slate-100 rounded-3xl p-8 transition-all duration-500 text-center overflow-hidden ${
                        pdfFile ? 'bg-[#1756a0]/[0.02] border-[#1756a0]/20' : 'bg-slate-50/30 hover:bg-white hover:border-[#1756a0]/20 shadow-sm'
                      }`}>
                        {isScanning && (
                          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm animate-in fade-in duration-300">
                             <div className="w-8 h-8 border-2 border-[#1756a0]/20 border-t-[#1756a0] rounded-full animate-spin mb-4" />
                             <p className="text-[#1756a0] text-[10px] font-bold tracking-[0.2em] uppercase">Processing Analysis...</p>
                          </div>
                        )}

                        <input 
                          type="file" 
                          accept="application/pdf,image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />

                        <div className="flex flex-col items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${pdfFile ? 'bg-[#1756a0] text-white shadow-lg shadow-[#1756a0]/20' : 'bg-white text-[#1756a0] border border-slate-100 shadow-sm'}`}>
                            {pdfFile ? (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700">{pdfFile ? pdfFile.name : 'Upload Floorplan or Inspiration'}</p>
                            <p className="text-[10px] text-slate-400 font-light mt-1">Drag and drop files here to upload</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center ml-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Specifications</label>
                        <button 
                          type="button"
                          onClick={addProduct}
                          className="text-[#1756a0] hover:text-[#0f172a] transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]"
                        >
                          <div className="w-5 h-5 rounded-full border border-[#1756a0]/20 flex items-center justify-center">
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                             </svg>
                          </div>
                          Add Requirement
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                      {products.map((product, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-slate-50/40 p-6 rounded-3xl border border-slate-100/60 relative group animate-in slide-in-from-left-2 duration-500">
                          <div className="md:col-span-4 space-y-2">
                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] ml-2">Product Category</label>
                            <select 
                              value={product.category}
                              onChange={(e) => updateProduct(index, 'category', e.target.value)}
                              className="w-full px-5 py-3 text-sm rounded-xl border border-slate-100 focus:outline-none focus:border-[#1756a0]/20 bg-white transition-all text-slate-800 appearance-none shadow-sm"
                            >
                              <option>Curtains</option>
                              <option>Blinds</option>
                              <option>Sheers</option>
                              <option>Motorized Systems</option>
                            </select>
                          </div>
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] ml-2">Count</label>
                            <input 
                              type="number" 
                              min="1"
                              value={product.count}
                              onChange={(e) => updateProduct(index, 'count', parseInt(e.target.value))}
                              className="w-full px-5 py-3 text-sm rounded-xl border border-slate-100 focus:outline-none focus:border-[#1756a0]/20 bg-white transition-all text-slate-800 shadow-sm" 
                            />
                          </div>
                          <div className="md:col-span-3 space-y-2">
                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] ml-2">Width (cm)</label>
                            <input 
                              type="text" 
                              placeholder="Measure"
                              value={product.width || ''}
                              onChange={(e) => updateProduct(index, 'width', e.target.value)}
                              className="w-full px-5 py-3 text-sm rounded-xl border border-slate-100 focus:outline-none focus:border-[#1756a0]/20 bg-white transition-all text-slate-800 shadow-sm" 
                            />
                          </div>
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] ml-2">Height</label>
                            <input 
                              type="text" 
                              placeholder="Measure"
                              value={product.height || ''}
                              onChange={(e) => updateProduct(index, 'height', e.target.value)}
                              className="w-full px-5 py-3 text-sm rounded-xl border border-slate-100 focus:outline-none focus:border-[#1756a0]/20 bg-white transition-all text-slate-800 shadow-sm" 
                            />
                          </div>
                          <div className="md:col-span-1 flex justify-center pb-1">
                            <button 
                              type="button"
                              onClick={() => removeProduct(index)}
                              className={`w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-red-50 transition-all ${products.length === 1 ? 'opacity-0 cursor-default pointer-events-none' : 'opacity-100'}`}
                              disabled={products.length === 1}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">{formType === 'general' ? 'Enquiry Details' : 'Additional Notes'}</label>
                <textarea 
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Share a brief description of your requirements..."
                  className="w-full px-6 py-5 text-sm rounded-[2rem] border border-slate-200 bg-white focus:outline-none focus:border-[#1756a0] focus:ring-1 focus:ring-[#1756a0]/20 transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
                ></textarea>
              </div>

              <div className="pt-8">
                 <button 
                   type="submit"
                   disabled={loading || isScanning}
                   className="w-full h-16 bg-[#0f172a] text-white rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#1756a0] shadow-xl shadow-[#0f172a]/10 hover:shadow-[#1756a0]/20 transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 group"
                 >
                   {loading ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                   ) : (
                      <>
                        <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                           {isScanning ? 'Processing Metadata...' : (formType === 'general' ? 'Submit Enquiry' : 'Schedule Measurement')}
                        </span>
                        {!isScanning && (
                           <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                           </svg>
                        )}
                      </>
                   )}
                 </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
};

export default ContactForm;
