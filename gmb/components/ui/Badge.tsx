import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'slate';
  className?: string;
}

const Badge = ({ children, variant = 'primary', className = '' }: BadgeProps) => {
  const variants = {
    primary: 'bg-[#3d9e41]/8 border border-[#3d9e41]/20 text-[#3d9e41]',
    secondary: 'bg-[#1756a0]/8 border border-[#1756a0]/20 text-[#1756a0]',
    slate: 'bg-slate-50 border border-slate-200 text-slate-500',
    outline: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg',
  };

  return (
    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
