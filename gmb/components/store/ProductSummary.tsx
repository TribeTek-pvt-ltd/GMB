'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BADGE_BG, FABRIC_TIERS } from './FabricData';
import type { StoreProduct } from '@/lib/data/store';

interface ProductSummaryProps {
  product: StoreProduct;
  currentCfg: Record<string, unknown>;
  price: number;
  valid: boolean;
  confirmed: boolean;
  setConfirmed: (v: boolean) => void;
  roomName: string;
  setRoomName: (v: string) => void;
  adding: boolean;
  canSubmit: boolean;
  onAddToCart: () => void;
  // GMB service add-ons
  remeasure: boolean;
  setRemeasure: (v: boolean) => void;
  install: boolean;
  setInstall: (v: boolean) => void;
}

const TRUST_BADGES = [
  { icon: '🔒', label: 'Secure Order' },
  { icon: '🚚', label: '2–4 Wk Delivery' },
  { icon: '📐', label: 'Made to Measure' },
];

// ─── Reusable service add-on toggle ──────────────────────────────────────────
function AddOnToggle({
  id, checked, onChange, title, desc,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  title: string;
  desc: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 cursor-pointer p-3 rounded-xl border transition-all duration-200 ${
        checked
          ? 'border-[#3d9e41]/60 bg-[#3d9e41]/10'
          : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600'
      }`}
    >
      <div className="relative flex items-center justify-center shrink-0 mt-0.5">
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <div className={`w-5 h-5 border-2 rounded-md transition-colors flex items-center justify-center ${
          checked ? 'bg-[#3d9e41] border-[#3d9e41]' : 'border-slate-600'
        }`}>
          <svg
            className={`w-3 h-3 text-white transition-opacity ${checked ? 'opacity-100' : 'opacity-0'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs font-bold leading-tight ${checked ? 'text-[#3d9e41]' : 'text-slate-300'}`}>
            {title}
          </span>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full shrink-0 transition-colors ${
            checked ? 'bg-[#3d9e41] text-white' : 'bg-slate-700 text-slate-400'
          }`}>
            +$100
          </span>
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">{desc}</p>
      </div>
    </label>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductSummary({
  product, currentCfg, price, valid,
  confirmed, setConfirmed, roomName, setRoomName,
  adding, canSubmit, onAddToCart,
  remeasure, setRemeasure, install, setInstall,
}: ProductSummaryProps) {
  const fabricTier = (currentCfg.fabric as string) ?? '';
  const tierInfo = FABRIC_TIERS.find(t => t.name === fabricTier);
  const fabricColorHex = FABRIC_TIERS
    .find(t => t.name === fabricTier)
    ?.colors.find(c => c.name === currentCfg.fabricColor)?.hex ?? '#888';

  // Base product price (before add-ons)
  const baseProductPrice = price - (remeasure ? 100 : 0) - (install ? 100 : 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full lg:w-[42%] xl:w-[40%] lg:sticky lg:top-28"
    >
      {/* Dark summary card */}
      <div className="bg-[#0f172a] rounded-3xl p-7 md:p-9 text-white shadow-2xl overflow-hidden relative">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-[#1756a0]/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3d9e41]/10 rounded-full blur-[70px] pointer-events-none" />

        <h2 className="text-lg font-bold tracking-tight border-b border-white/10 pb-5 mb-6 relative z-10">
          Your Selection
        </h2>

        {/* Product thumb + badge */}
        <div className="flex gap-4 mb-6 relative z-10">
          <div className="w-20 h-28 rounded-xl border border-white/10 overflow-hidden relative bg-slate-800 shrink-0">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <span className={`text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full w-fit ${BADGE_BG[product.badge]}`}>
              {product.badge}
            </span>
            <h3 className="font-semibold text-white text-base leading-tight">{product.name}</h3>
            <p className="text-slate-400 text-xs">{product.subCategory}</p>
            {fabricTier && (
              <div className="flex items-center gap-2 mt-1">
                <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: fabricColorHex }} />
                <span className="text-[9px] text-slate-300">{fabricTier} · {currentCfg.fabricColor as string}</span>
                {tierInfo && tierInfo.upliftPct > 0 && (
                  <span className="text-[8px] font-black bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full">
                    +{tierInfo.upliftPct}%
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Config lines */}
        <div className="space-y-2 text-sm text-slate-300 mb-6 border-b border-white/10 pb-6 relative z-10">
          {Object.entries(currentCfg)
            .filter(([k]) => !['fabric', 'fabricColor', 'width', 'drop'].includes(k))
            .map(([k, v]) => (
              <div key={k} className="flex justify-between items-center">
                <span className="text-slate-500 capitalize text-xs">{k.replace(/([A-Z])/g, ' $1')}</span>
                <span className="font-semibold text-white text-xs text-right max-w-[55%] leading-tight">{String(v)}</span>
              </div>
            ))}
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-xs">Width</span>
            <span className="font-semibold text-white text-xs">
              {currentCfg.width && currentCfg.width !== '' ? `${currentCfg.width} mm` : '—'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-xs">Drop</span>
            <span className="font-semibold text-white text-xs">
              {currentCfg.drop && currentCfg.drop !== '' ? `${currentCfg.drop} mm` : '—'}
            </span>
          </div>
        </div>

        {/* Room reference */}
        <div className="mb-5 relative z-10">
          <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
            Room Reference (optional)
          </label>
          <input
            type="text"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder="e.g. Master Bedroom"
            className="w-full bg-slate-800/60 border border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-[#1756a0] text-white text-sm placeholder-slate-600"
          />
        </div>

        {/* ─── GMB Service Add-ons ─────────────────────────────────────────── */}
        <div className="mb-5 relative z-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            GMB Professional Services
          </p>
          <div className="space-y-2">
            <AddOnToggle
              id="gmb-remeasure"
              checked={remeasure}
              onChange={setRemeasure}
              title="Re-measure by GMB"
              desc="Our expert will visit and verify your measurements before production begins."
            />
            <AddOnToggle
              id="gmb-install"
              checked={install}
              onChange={setInstall}
              title="Installation by GMB"
              desc="Professional fitting by our trained installers — guaranteed perfect finish."
            />
          </div>
        </div>

        {/* Price breakdown */}
        <div className="mb-5 relative z-10">
          {/* Fabric tier uplift */}
          {tierInfo && tierInfo.upliftPct > 0 && valid && (
            <>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">Base product</span>
                <span className="text-xs text-slate-400">${Math.round(baseProductPrice / tierInfo.multiplier)}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">
                  {tierInfo.name} Fabric (+{tierInfo.upliftPct}%)
                </span>
                <span className="text-xs text-amber-400">
                  +${baseProductPrice - Math.round(baseProductPrice / tierInfo.multiplier)}
                </span>
              </div>
            </>
          )}
          {/* Service add-on lines */}
          <AnimatePresence>
            {remeasure && (
              <motion.div
                key="remeasure-line"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center mb-1 overflow-hidden"
              >
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">GMB Re-measure</span>
                <span className="text-xs text-[#3d9e41]">+$100</span>
              </motion.div>
            )}
            {install && (
              <motion.div
                key="install-line"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center mb-1 overflow-hidden"
              >
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">GMB Installation</span>
                <span className="text-xs text-[#3d9e41]">+$100</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Total */}
          <div className="flex items-end justify-between border-t border-white/10 pt-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              {valid ? 'Estimated Total' : 'Starting From'}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-4xl font-black text-white"
              >
                ${price}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="text-right text-[9px] text-slate-500 mt-1">AUD inc. GST</p>
        </div>

        {/* Confirm checkbox */}
        <label className="flex items-start gap-3 cursor-pointer mb-5 relative z-10">
          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={confirmed}
              onChange={e => setConfirmed(e.target.checked)}
            />
            <div className="w-5 h-5 border-2 border-slate-600 rounded-md peer-checked:bg-[#1756a0] peer-checked:border-[#1756a0] transition-colors flex items-center justify-center">
              <svg
                className={`w-3 h-3 text-white transition-opacity ${confirmed ? 'opacity-100' : 'opacity-0'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className={`text-xs leading-relaxed transition-colors ${confirmed ? 'text-white' : 'text-slate-400'}`}>
            I confirm my measurements are correct. Custom orders cannot be returned.
          </span>
        </label>

        {/* Add to Cart */}
        <button
          onClick={onAddToCart}
          disabled={!canSubmit || adding}
          className={`w-full py-4 rounded-xl font-bold tracking-[0.12em] text-sm uppercase transition-all duration-300 flex items-center justify-center gap-3 relative z-10 ${
            canSubmit && !adding
              ? 'bg-[#1756a0] text-white shadow-lg hover:bg-[#124588] cursor-pointer'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
          }`}
        >
          {adding ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Adding…
            </>
          ) : (
            <>
              Add to Cart
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        {!canSubmit && (
          <p className="text-[9px] text-center text-slate-500 mt-3 uppercase tracking-[0.2em] relative z-10">
            {!valid ? '↑ Complete measurements above' : 'Confirm order to proceed'}
          </p>
        )}
      </div>

      {/* Trust badges */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {TRUST_BADGES.map(b => (
          <div key={b.label} className="bg-white border border-slate-100 rounded-xl px-3 py-3 text-center shadow-sm">
            <span className="text-lg block mb-1">{b.icon}</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-500">{b.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
