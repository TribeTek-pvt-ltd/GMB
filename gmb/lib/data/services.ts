import React from 'react';

export interface Reason {
  num: string;
  color: string;
  bg: string;
  border: string;
  title: string;
  body: string;
  iconName: string; // Mapping icon names to SVG strings in the component
}

export const reasons: Reason[] = [
  {
    num: '01',
    color: '#1756a0',
    bg: 'rgba(23,86,160,0.06)',
    border: 'rgba(23,86,160,0.12)',
    title: 'Free In-Home Measurement',
    body: 'We come to you. Our specialist measures every window with millimeter precision — at zero cost, zero obligation.',
    iconName: 'home-measure',
  },
  {
    num: '02',
    color: '#3d9e41',
    bg: 'rgba(61,158,65,0.06)',
    border: 'rgba(61,158,65,0.12)',
    title: 'Bespoke to Your Space',
    body: 'No off-the-shelf compromises. Every product is custom-made to your exact window dimensions and personal style.',
    iconName: 'custom-made',
  },
  {
    num: '03',
    color: '#1756a0',
    bg: 'rgba(23,86,160,0.06)',
    border: 'rgba(23,86,160,0.12)',
    title: 'Professional Installation',
    body: 'Our certified team installs your order with care and precision — typically in a single, hassle-free visit.',
    iconName: 'installation',
  },
  {
    num: '04',
    color: '#3d9e41',
    bg: 'rgba(61,158,65,0.06)',
    border: 'rgba(61,158,65,0.12)',
    title: '3-Year Guarantee',
    body: 'Every product comes with a comprehensive 3-year warranty on fabric, hardware, and motorized systems.',
    iconName: 'guarantee',
  },
];
