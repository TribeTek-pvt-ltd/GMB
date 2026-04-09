import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

const Container = ({ children, className = '', size = 'default' }: ContainerProps) => {
  const sizeClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-5xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-6 sm:px-10 xl:px-16 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
