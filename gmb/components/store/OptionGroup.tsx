'use client';

import { COLOR_HEX, isHardwareColor } from './FabricData';
import { ICON_MAP } from './OptionIcons';

// ─── SVG Option Card ─────────────────────────────────────────────────────────
function SVGOptionCard({
  label, selected, onClick, cols,
}: {
  label: string; selected: boolean; onClick: () => void; cols?: number;
}) {
  const Icon = ICON_MAP[label];
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all duration-200 text-center w-full ${
        selected
          ? 'border-[#1756a0] bg-[#1756a0]/5 shadow-sm'
          : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
      }`}
    >
      <div
        className={`w-full transition-colors duration-200 ${selected ? 'text-[#1756a0]' : 'text-slate-400 group-hover:text-slate-600'}`}
        style={{ height: cols && cols <= 2 ? '52px' : cols && cols >= 5 ? '36px' : '44px' }}
      >
        {Icon
          ? <Icon />
          : (
            <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
              <rect x="8" y="8" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08"/>
            </svg>
          )}
      </div>
      <span className={`text-[10px] font-bold leading-tight tracking-wide block ${selected ? 'text-[#1756a0]' : 'text-slate-600'}`}>
        {label}
      </span>
    </button>
  );
}

// ─── Color Swatch ─────────────────────────────────────────────────────────────
function ColorSwatch({
  label, selected, onClick,
}: {
  label: string; selected: boolean; onClick: () => void;
}) {
  const hex = COLOR_HEX[label] ?? '#e2e8f0';
  const isLight = ['White', 'Bone', 'Birch White', 'Silver'].includes(label);
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 ${
        selected
          ? 'border-[#1756a0] bg-white shadow-md scale-[1.04]'
          : 'border-slate-100 bg-white hover:border-slate-200'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full shadow-inner ${isLight ? 'border border-slate-200' : ''}`}
        style={{ backgroundColor: hex }}
      />
      <span className={`text-[9px] font-bold uppercase tracking-[0.1em] leading-tight text-center ${selected ? 'text-[#1756a0]' : 'text-slate-500'}`}>
        {label}
      </span>
    </button>
  );
}

// ─── Option Group ─────────────────────────────────────────────────────────────
interface OptionGroupProps {
  options: readonly string[] | string[];
  value: string;
  onChange: (v: string) => void;
}

export default function OptionGroup({ options, value, onChange }: OptionGroupProps) {
  const areColors = options.every(o => isHardwareColor(o));
  const cols = areColors
    ? 'grid-cols-4 sm:grid-cols-6'
    : options.length === 2
      ? 'grid-cols-2'
      : options.length === 3
        ? 'grid-cols-3'
        : options.length >= 5
          ? 'grid-cols-3 sm:grid-cols-5'
          : 'grid-cols-2 sm:grid-cols-4';

  if (areColors) {
    return (
      <div className={`grid ${cols} gap-2`}>
        {options.map(o => (
          <ColorSwatch key={o} label={o} selected={value === o} onClick={() => onChange(o)} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${cols} gap-3`}>
      {options.map(o => (
        <SVGOptionCard key={o} label={o} selected={value === o} onClick={() => onChange(o)} cols={options.length} />
      ))}
    </div>
  );
}
