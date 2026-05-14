import type React from 'react';

export const IC = {
  FaceFit: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="8" y="10" width="40" height="32" rx="1" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35"/>
      <rect x="0" y="6" width="56" height="6" rx="2" fill="currentColor" opacity="0.85"/>
      <rect x="3" y="12" width="50" height="20" fill="currentColor" opacity="0.09"/>
      <line x1="0" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="56" y1="9" x2="48" y2="9" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  RecessFit: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="2" width="48" height="42" rx="2" stroke="currentColor" strokeWidth="1.8" opacity="0.4"/>
      <rect x="9" y="5" width="38" height="7" rx="1.5" fill="currentColor" opacity="0.85"/>
      <rect x="10" y="12" width="36" height="18" fill="currentColor" opacity="0.09"/>
    </svg>
  ),
  TopFit: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="0" y="0" width="56" height="6" fill="currentColor" opacity="0.3"/>
      <rect x="4" y="6" width="48" height="5" rx="0.5" fill="currentColor" opacity="0.85"/>
      {[14,28,42].map(x => <circle key={x} cx={x} cy="8.5" r="2.5" fill="currentColor" opacity="0.5"/>)}
      <rect x="6" y="11" width="44" height="24" fill="currentColor" opacity="0.09" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="6" y1="11" x2="6" y2="35" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="50" y1="11" x2="50" y2="35" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  FrontRoll: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="46" y="4" width="8" height="40" fill="currentColor" opacity="0.2" rx="1"/>
      <circle cx="40" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08"/>
      <circle cx="40" cy="13" r="3" fill="currentColor" opacity="0.7"/>
      <path d="M31 14 C26 14 18 16 14 24 L14 42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M10 39 L14 43 L18 39" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  BackRoll: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="46" y="4" width="8" height="40" fill="currentColor" opacity="0.2" rx="1"/>
      <circle cx="40" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08"/>
      <circle cx="40" cy="13" r="3" fill="currentColor" opacity="0.7"/>
      <path d="M40 22 L40 43" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M36 40 L40 44 L44 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  LeftCtrl: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="5" width="44" height="5" rx="2" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="40" height="24" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M8 10 L8 36" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2.5" strokeLinecap="round"/>
      <circle cx="8" cy="38" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  RightCtrl: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="5" width="44" height="5" rx="2" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="40" height="24" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M48 10 L48 36" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2.5" strokeLinecap="round"/>
      <circle cx="48" cy="38" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  LeftStack: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="2" y="4" width="52" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      {[3,9,15].map(x => <rect key={x} x={x} y="8" width="5" height="30" rx="1" fill="currentColor" opacity="0.45"/>)}
      <rect x="22" y="8" width="32" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  RightStack: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="2" y="4" width="52" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      <rect x="2" y="8" width="32" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
      {[37,43,49].map(x => <rect key={x} x={x} y="8" width="5" height="30" rx="1" fill="currentColor" opacity="0.45"/>)}
    </svg>
  ),
  CentreOpen: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="2" y="4" width="52" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      {[3,9,15].map(x => <rect key={x} x={x} y="8" width="5" height="30" rx="1" fill="currentColor" opacity="0.45"/>)}
      {[37,43,49].map(x => <rect key={x} x={x} y="8" width="5" height="30" rx="1" fill="currentColor" opacity="0.45"/>)}
      <rect x="22" y="12" width="12" height="22" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
    </svg>
  ),
  Oval: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="5" width="44" height="5" rx="2" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="40" height="16" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
      <ellipse cx="28" cy="37" rx="22" ry="7" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.12"/>
    </svg>
  ),
  Flat: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="5" width="44" height="5" rx="2" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="40" height="16" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
      <rect x="6" y="31" width="44" height="9" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.12"/>
    </svg>
  ),
  Standard: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="16" y="6" width="5" height="7" rx="1" fill="currentColor" opacity="0.6"/>
      <rect x="35" y="6" width="5" height="7" rx="1" fill="currentColor" opacity="0.6"/>
      <rect x="4" y="12" width="48" height="4" rx="1.5" fill="currentColor" opacity="0.85"/>
      {[12,22,32,42].map(x => <circle key={x} cx={x} cy="14" r="2" fill="currentColor" opacity="0.4"/>)}
      <rect x="6" y="16" width="44" height="24" fill="currentColor" opacity="0.09" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  Extension: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="0" width="8" height="46" fill="currentColor" opacity="0.15"/>
      <rect x="12" y="10" width="22" height="5" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="34" y="8" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
    </svg>
  ),
  Std: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="0" width="8" height="46" fill="currentColor" opacity="0.15"/>
      <rect x="12" y="10" width="10" height="5" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="22" y="8" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
    </svg>
  ),
  Chrome: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <circle cx="28" cy="22" r="16" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08"/>
      <circle cx="28" cy="22" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15"/>
      <circle cx="23" cy="17" r="3" fill="currentColor" opacity="0.55"/>
    </svg>
  ),
  Brass: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <polygon points="28,6 42,14 42,32 28,40 14,32 14,14" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
      <polygon points="28,13 36,17.5 36,27.5 28,32 20,27.5 20,17.5" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  CleanStd: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="24" y="6" width="8" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M28 30 L18 38 L28 40 L38 38 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  Uniform: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      {[0,22].map((xo, i) => (
        <g key={i}>
          <rect x={4+xo} y="4" width="16" height="3" rx="1" fill="currentColor" opacity="0.8"/>
          {[12,20,28].map(y => <rect key={y} x={4+xo} y={y} width="16" height="2" rx="0.5" fill="currentColor" opacity="0.35"/>)}
          <rect x={4+xo} y="4" width="16" height="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
        </g>
      ))}
      {[12,20,28].map(y => <line key={y} x1="0" y1={y+1} x2="42" y2={y+1} stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"/>)}
    </svg>
  ),
  NotUniform: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <g>
        <rect x="4" y="4" width="16" height="3" rx="1" fill="currentColor" opacity="0.8"/>
        {[13,22,30].map(y => <rect key={y} x="4" y={y} width="16" height="2" rx="0.5" fill="currentColor" opacity="0.35"/>)}
        <rect x="4" y="4" width="16" height="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      </g>
      <g>
        <rect x="26" y="4" width="16" height="3" rx="1" fill="currentColor" opacity="0.8"/>
        {[16,28].map(y => <rect key={y} x="26" y={y} width="16" height="2" rx="0.5" fill="currentColor" opacity="0.35"/>)}
        <rect x="26" y="4" width="16" height="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      </g>
    </svg>
  ),
  StdPos: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="48" height="3" rx="1" fill="currentColor" opacity="0.75"/>
      <path d="M4 7 L4 34 L12 34 L12 7" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1"/>
      <path d="M52 7 L52 34 L44 34 L44 7" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  WallToWall: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="0" y="0" width="5" height="46" fill="currentColor" opacity="0.2"/>
      <rect x="51" y="0" width="5" height="46" fill="currentColor" opacity="0.2"/>
      <rect x="0" y="4" width="56" height="4" rx="0" fill="currentColor" opacity="0.8"/>
      <rect x="2" y="8" width="52" height="28" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  LeftCurtain: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="2" y="4" width="52" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      <rect x="3" y="8" width="20" height="30" rx="1" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="25" y="8" width="30" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  RightCurtain: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="2" y="4" width="52" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      <rect x="2" y="8" width="30" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="34" y="8" width="20" height="30" rx="1" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  CentreCurtain: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="2" y="4" width="52" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      <rect x="3" y="8" width="20" height="30" rx="1" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="34" y="8" width="20" height="30" rx="1" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="25" y="12" width="6" height="22" fill="currentColor" opacity="0.07" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
    </svg>
  ),
  SFold: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="48" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      {[8,22,36].map((x,i) => (
        <path key={i} d={`M${x} 8 C${x} 15 ${x+10} 15 ${x+10} 22 C${x+10} 29 ${x} 29 ${x} 36 C${x} 43 ${x+10} 43 ${x+10} 44`}
          stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      ))}
    </svg>
  ),
  TriplePinch: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="48" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      {[12,28,44].map(x => (
        <g key={x}>
          <path d={`M${x-5} 8 L${x} 16 L${x+5} 8`} stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.25" strokeLinejoin="round"/>
          <line x1={x} y1="16" x2={x} y2="42" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2.5 2"/>
        </g>
      ))}
    </svg>
  ),
  PencilPleat: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="48" height="4" rx="1.5" fill="currentColor" opacity="0.7"/>
      {Array.from({length:11}).map((_,i) => (
        <path key={i} d={`M${8+i*4} 8 L${8+i*4} 15`} stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      ))}
      <rect x="6" y="15" width="44" height="26" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  LeadWeight: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="4" width="44" height="26" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="6" y="30" width="44" height="6" rx="1" fill="currentColor" opacity="0.65"/>
      {[16,28,40].map(x => <circle key={x} cx={x} cy="33" r="3" fill="currentColor" opacity="0.9"/>)}
    </svg>
  ),
  Hem70: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="4" width="44" height="22" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="6" y="26" width="44" height="6" rx="0.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1"/>
      <rect x="6" y="32" width="44" height="6" rx="0.5" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  Designer: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="0" y="0" width="56" height="6" fill="currentColor" opacity="0.25"/>
      <rect x="4" y="6" width="48" height="5" rx="0.5" fill="currentColor" opacity="0.88"/>
      {[12,28,44].map(x => <circle key={x} cx={x} cy="8.5" r="2.5" fill="currentColor" opacity="0.35"/>)}
      <rect x="6" y="11" width="44" height="26" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  ),
  BlockoutFront: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="10" y="10" width="38" height="30" rx="1" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
      <rect x="6" y="6" width="38" height="30" rx="1" fill="currentColor" opacity="0.75"/>
    </svg>
  ),
  SunFront: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="10" y="10" width="38" height="30" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="6" y="6" width="38" height="30" rx="1" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1"/>
      {[14,22,30,38].map(x => <line key={x} x1={x} y1="6" x2={x} y2="36" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1.5 3" opacity="0.4"/>)}
    </svg>
  ),
  SheerFront: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="10" y="10" width="38" height="30" rx="1" fill="currentColor" opacity="0.68"/>
      <rect x="6" y="6" width="38" height="30" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1"/>
      {[12,20,28,36].map(x => (
        <path key={x} d={`M${x} 6 C${x+2} 14 ${x-2} 22 ${x+2} 30 C${x+3} 36 ${x} 36 ${x} 36`}
          stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2.5" fill="none" opacity="0.4"/>
      ))}
    </svg>
  ),
  Chained: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="4" width="44" height="24" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
      {[10,18,26,34,42].map((x,i) => <ellipse key={x} cx={x} cy={30+(i%2)*4} rx="4" ry="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>)}
    </svg>
  ),
  Chainless: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <rect x="6" y="4" width="44" height="24" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="6" y="28" width="44" height="8" rx="4" fill="currentColor" opacity="0.6"/>
      {[16,28,40].map(x => <circle key={x} cx={x} cy="32" r="3" fill="currentColor" opacity="0.9"/>)}
    </svg>
  ),
  Wand910: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <circle cx="28" cy="7" r="5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="28" y1="12" x2="28" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="28" cy="34" r="2.5" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  Wand1220: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <circle cx="28" cy="5" r="5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="28" y1="10" x2="28" y2="36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="28" cy="38" r="2.5" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  Wand1520: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      <circle cx="28" cy="4" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="28" y1="8" x2="28" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="28" cy="42" r="2" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
};

export const ICON_MAP: Record<string, React.FC> = {
  'Face Fit': IC.FaceFit, 'Recess Fit': IC.RecessFit, 'Top Fit': IC.TopFit,
  'Front Roll': IC.FrontRoll, 'Back Roll': IC.BackRoll,
  'Left Side': IC.LeftCtrl, 'Right Side': IC.RightCtrl,
  'Left Hand Stack': IC.LeftStack, 'Right Hand Stack': IC.RightStack,
  'Centre Opening': IC.CentreOpen,
  'Oval': IC.Oval, 'Flat': IC.Flat,
  'Clean Standard': IC.CleanStd, 'Chrome': IC.Chrome, 'Brass': IC.Brass,
  'Uniform': IC.Uniform, 'Not Uniform': IC.NotUniform,
  'Standard/Normal': IC.StdPos, 'Wall to Wall': IC.WallToWall,
  'Left Stack': IC.LeftCurtain, 'Right Stack': IC.RightCurtain,
  'Centre Opening ': IC.CentreCurtain,
  'S Fold': IC.SFold, 'Triple Pinch Pleat': IC.TriplePinch, 'Pencil Pleat': IC.PencilPleat,
  'Lead weight': IC.LeadWeight, '70mm hem': IC.Hem70,
  'Designer': IC.Designer, 'Residential': IC.Standard,
  '910mm': IC.Wand910, '1220mm': IC.Wand1220, '1520mm': IC.Wand1520,
  'Standard': IC.Std, 'Extension': IC.Extension,
  'Blockout in Front': IC.BlockoutFront,
  'Sunscreen or Light Filtering in Front': IC.SunFront,
  'Sheer in Front': IC.SheerFront,
  'Chained Weights': IC.Chained, 'Chainless Weights': IC.Chainless,
};
