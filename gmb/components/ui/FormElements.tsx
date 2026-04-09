import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className = '', ...props }: InputProps) => {
  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0f172a] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#3d9e41]/50 focus:bg-white focus:ring-4 focus:ring-[#3d9e41]/5 transition-all duration-200";
  const labelClass = "block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2 ml-1";

  return (
    <div className="w-full">
      {label && <label className={labelClass}>{label}</label>}
      <input className={`${inputClass} ${className}`} {...props} />
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = ({ label, options, className = '', ...props }: SelectProps) => {
  const selectClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0f172a] appearance-none cursor-pointer focus:outline-none focus:border-[#3d9e41]/50 focus:bg-white focus:ring-4 focus:ring-[#3d9e41]/5 transition-all duration-200 text-sm";
  const labelClass = "block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2 ml-1";

  return (
    <div className="w-full relative">
      {label && <label className={labelClass}>{label}</label>}
      <div className="relative">
        <select className={`${selectClass} ${className}`} {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ label, className = '', ...props }: TextareaProps) => {
  const textareaClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0f172a] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#3d9e41]/50 focus:bg-white focus:ring-4 focus:ring-[#3d9e41]/5 transition-all duration-200 min-h-[120px] resize-none";
  const labelClass = "block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2 ml-1";

  return (
    <div className="w-full">
      {label && <label className={labelClass}>{label}</label>}
      <textarea className={`${textareaClass} ${className}`} {...props} />
    </div>
  );
};
