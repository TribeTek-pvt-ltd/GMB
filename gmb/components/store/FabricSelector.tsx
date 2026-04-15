'use client';

import { FABRIC_TIERS, type FabricTier, type FabricColor } from './FabricData';
import { FabricWeaveSVG } from './FabricWeaveSVG';

interface FabricSelectorProps {
  tier: FabricTier;
  color: FabricColor;
  onTierChange: (t: FabricTier) => void;
  onColorChange: (c: FabricColor) => void;
}

export default function FabricSelector({ tier, color, onTierChange, onColorChange }: FabricSelectorProps) {
  return (
    <div className="space-y-5">
      {/* Tier cards */}
      <div className="grid grid-cols-3 gap-3">
        {FABRIC_TIERS.map(t => {
          const Icon = FabricWeaveSVG[t.id];
          const active = tier.id === t.id;
          return (
            <button
              key={t.id}
              onClick={() => { onTierChange(t); onColorChange(t.colors[0]); }}
              className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 text-center overflow-hidden ${
                active
                  ? 'border-[#1756a0] bg-[#1756a0]/5 shadow-sm'
                  : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
              }`}
            >
              {/* Uplift badge */}
              {t.upliftPct > 0 && (
                <span className={`absolute top-2 right-2 text-[8px] font-black px-1.5 py-0.5 rounded-full ${
                  t.id === 'luxury' ? 'bg-amber-100 text-amber-700' : 'bg-[#1756a0]/10 text-[#1756a0]'
                }`}>
                  +{t.upliftPct}%
                </span>
              )}
              {active && t.upliftPct === 0 && (
                <span className="absolute top-2 right-2 text-[8px] font-black px-1.5 py-0.5 rounded-full bg-[#3d9e41]/10 text-[#3d9e41]">
                  Base
                </span>
              )}
              <div
                className={`w-full transition-colors duration-200 ${active ? 'text-[#1756a0]' : 'text-slate-400'}`}
                style={{ height: '44px' }}
              >
                <Icon />
              </div>
              <span className={`text-[11px] font-black uppercase tracking-[0.12em] ${active ? 'text-[#1756a0]' : 'text-slate-700'}`}>
                {t.name}
              </span>
              <span className={`text-[9px] leading-tight ${active ? 'text-[#1756a0]/70' : 'text-slate-400'}`}>
                {t.tagline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected colour swatches */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            {tier.name} Colours
          </span>
          <span className="text-[10px] font-bold text-[#1756a0]">{color.name}</span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {tier.colors.map(c => {
            const isActive = color.name === c.name;
            const isLight = parseInt(c.hex.slice(1, 3), 16) > 180;
            return (
              <button
                key={c.name}
                onClick={() => onColorChange(c)}
                title={c.name}
                className={`group flex flex-col items-center gap-1.5 p-2 rounded-xl border-2 transition-all duration-200 ${
                  isActive ? 'border-[#1756a0] scale-105 shadow-sm' : 'border-transparent hover:border-slate-200'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full shadow-sm transition-transform ${isLight ? 'border border-slate-200' : ''} ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                  style={{ backgroundColor: c.hex }}
                />
                <span className={`text-[8px] font-bold uppercase tracking-wide leading-tight text-center ${isActive ? 'text-[#1756a0]' : 'text-slate-500'}`}>
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
