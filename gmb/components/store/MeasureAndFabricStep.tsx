'use client';

import StepCard from './StepCard';
import FabricSelector from './FabricSelector';
import type { FabricTier, FabricColor } from './FabricData';

interface MeasureAndFabricStepProps {
  step: number;
  wMin: number; wMax: number;
  dMin: number; dMax: number;
  w: number | ''; d: number | '';
  setW: (v: number | '') => void;
  setD: (v: number | '') => void;
  wLbl?: string; dLbl?: string;
  tier: FabricTier;
  color: FabricColor;
  onTierChange: (t: FabricTier) => void;
  onColorChange: (c: FabricColor) => void;
}

export default function MeasureAndFabricStep({
  step, wMin, wMax, dMin, dMax, w, d, setW, setD,
  wLbl = 'Width (mm)', dLbl = 'Drop (mm)',
  tier, color, onTierChange, onColorChange,
}: MeasureAndFabricStepProps) {
  const wErr = typeof w === 'number' && (w < wMin || w > wMax);
  const dErr = typeof d === 'number' && (d < dMin || d > dMax);

  const fields = [
    { lbl: wLbl, min: wMin, max: wMax, val: w, set: setW, err: wErr },
    { lbl: dLbl, min: dMin, max: dMax, val: d, set: setD, err: dErr },
  ];

  return (
    <StepCard step={step} title="Fabric, Colour & Measurements">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Choose Fabric Grade</p>
      <FabricSelector tier={tier} color={color} onTierChange={onTierChange} onColorChange={onColorChange} />

      <div className="mt-6 pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Enter Measurements</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map(f => (
            <div key={f.lbl}>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">{f.lbl}</label>
              <input
                type="number"
                value={f.val}
                min={f.min}
                max={f.max}
                onChange={e => f.set(e.target.value === '' ? '' : +e.target.value)}
                placeholder={`${f.min} – ${f.max}`}
                className={`w-full bg-slate-50 border px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 transition-all font-bold text-base ${
                  f.err
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-slate-200 focus:ring-[#1756a0]/25 focus:border-[#1756a0]'
                }`}
              />
              {f.err && <p className="text-[10px] text-red-500 mt-1 font-bold">Must be {f.min}–{f.max} mm</p>}
              <p className="text-[10px] text-slate-400 mt-1">Min {f.min} mm · Max {f.max} mm</p>
            </div>
          ))}
        </div>
      </div>
    </StepCard>
  );
}
