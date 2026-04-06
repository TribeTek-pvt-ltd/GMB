export function CartBadge({ count, mobile }: { count: number; mobile?: boolean }) {
  if (!count) return null;
  return (
    <span className={`absolute -top-1 -right-1 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-lg ${mobile ? 'text-[9px] w-4 h-4' : 'text-[10px] w-5 h-5 animate-in zoom-in duration-300'}`}>
      {count}
    </span>
  );
}
