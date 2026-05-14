// ─── Fabric Tiers ─────────────────────────────────────────────────────────────
export const FABRIC_TIERS = [
  {
    id: 'standard' as const,
    name: 'Standard',
    tagline: 'Everyday durability, versatile colourways',
    priceLabel: 'Base price',
    multiplier: 1.0,
    upliftPct: 0,
    colors: [
      { name: 'Chalk',    hex: '#f0ece4' },
      { name: 'Ash',      hex: '#b0a89e' },
      { name: 'Stone',    hex: '#8a8076' },
      { name: 'Sand',     hex: '#d4c8ae' },
      { name: 'Charcoal', hex: '#4a4642' },
      { name: 'Linen',    hex: '#d6ccb6' },
    ],
  },
  {
    id: 'premium' as const,
    name: 'Premium',
    tagline: 'Richer tones, superior fade resistance',
    priceLabel: '+20%',
    multiplier: 1.2,
    upliftPct: 20,
    colors: [
      { name: 'Dove',   hex: '#e0dbd4' },
      { name: 'Slate',  hex: '#76808e' },
      { name: 'Mocha',  hex: '#98806e' },
      { name: 'Steel',  hex: '#667880' },
      { name: 'Ebony',  hex: '#2c2420' },
      { name: 'Ivory',  hex: '#ede4d2' },
    ],
  },
  {
    id: 'luxury' as const,
    name: 'Luxury',
    tagline: 'Finest weave, UV-stable, anti-static',
    priceLabel: '+45%',
    multiplier: 1.45,
    upliftPct: 45,
    colors: [
      { name: 'Pearl',     hex: '#f5f0e8' },
      { name: 'Graphite',  hex: '#4c5058' },
      { name: 'Dusk',      hex: '#727494' },
      { name: 'Cream',     hex: '#eadcc4' },
      { name: 'Noir',      hex: '#161618' },
      { name: 'Champagne', hex: '#c8b880' },
    ],
  },
] as const;

export type FabricTier = typeof FABRIC_TIERS[number];
export type FabricColor = FabricTier['colors'][number];

// ─── Hardware colour map ───────────────────────────────────────────────────────
export const COLOR_HEX: Record<string, string> = {
  White: '#f0eeea', Black: '#1a1a1a', Grey: '#9ca3af', Gray: '#9ca3af',
  Sandstone: '#c4a882', Silver: '#c4c4c4', Bone: '#e8ddc8',
  'Anodised Silver': '#a8b0b8', 'Birch White': '#f0e8dc',
};

export const COLOR_KEYS = Object.keys(COLOR_HEX);
export const isHardwareColor = (lbl: string) => COLOR_KEYS.includes(lbl);

// ─── Badge colours ────────────────────────────────────────────────────────────
export const BADGE_BG: Record<string, string> = {
  Blockout: 'bg-[#1756a0] text-white',
  'Light Filtering': 'bg-amber-500 text-white',
  Sunscreen: 'bg-sky-500 text-white',
  Sheer: 'bg-purple-500 text-white',
  Combo: 'bg-[#3d9e41] text-white',
};

// ─── Price calculation ────────────────────────────────────────────────────────
export function calcPrice(
  base: number,
  w: number | '',
  d: number | '',
  ratePerM2: number,
  multiplier: number,
  valid: boolean,
) {
  if (!valid) return base;
  const area = (Number(w) * Number(d)) / 1_000_000;
  return Math.round((base + area * ratePerM2) * multiplier);
}
