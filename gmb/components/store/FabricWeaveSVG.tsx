export const FabricWeaveSVG = {
  standard: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      {[6,14,22,30,38,46].map(x => <line key={`v${x}`} x1={x} y1="4" x2={x} y2="42" stroke="currentColor" strokeWidth="1" opacity="0.35"/>)}
      {[8,16,24,32,40].map(y => <line key={`h${y}`} x1="4" y1={y} x2="52" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.35"/>)}
      <rect x="4" y="4" width="48" height="38" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  ),
  premium: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      {[-10,-2,6,14,22,30,38,46,54].map((x,i) => (
        <path key={i} d={`M${x} 4 L${x+38} 42`} stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      ))}
      {[10,18,26,34,42,50,58].map((x,i) => (
        <path key={i} d={`M${x} 4 L${x-38} 42`} stroke="currentColor" strokeWidth="1.2" opacity="0.2"/>
      ))}
      <rect x="4" y="4" width="48" height="38" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6"/>
    </svg>
  ),
  luxury: () => (
    <svg viewBox="0 0 56 46" fill="none" className="w-full h-full">
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <path d={`M${4+i*10} 4 L${4+i*10+8} 23`} stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
          <path d={`M${4+i*10+8} 23 L${4+i*10} 42`} stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        </g>
      ))}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <path d={`M${9+i*10} 4 L${9+i*10+8} 23`} stroke="currentColor" strokeWidth="0.8" opacity="0.25"/>
          <path d={`M${9+i*10+8} 23 L${9+i*10} 42`} stroke="currentColor" strokeWidth="0.8" opacity="0.25"/>
        </g>
      ))}
      <rect x="4" y="4" width="48" height="38" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
    </svg>
  ),
};
