import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  loading = false,
  icon,
  iconPosition = 'right',
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-[0.18em] transition-all duration-300 rounded-full disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#3d9e41] hover:bg-[#2e7d31] text-white shadow-sm shadow-green-200/80',
    secondary: 'bg-[#0f172a] hover:bg-[#1e293b] text-white',
    outline: 'bg-transparent border border-slate-200 text-slate-700 hover:border-[#3d9e41]/50 hover:text-[#3d9e41]',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-50',
    success: 'bg-[#3d9e41] hover:bg-[#2e7d31] text-white',
    blue: 'bg-[#1756a0] hover:bg-[#1044a0] text-white shadow-sm shadow-blue-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[9px]',
    md: 'px-6 py-3 text-[10px]',
    lg: 'px-8 py-4 text-[11px]',
    xl: 'px-10 py-5 text-[12px]',
  };

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={loading} {...props}>
      {content}
    </button>
  );
};

export default Button;
