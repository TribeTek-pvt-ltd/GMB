export interface StatItem {
  value: string;
  label: string;
  color?: string;
}

export const stats: StatItem[] = [
  { value: "5,000+", label: "Projects Completed" },
  { value: "20 Yrs", label: "Of Excellence" },
  { value: "4.9★", label: "Client Rating" },
];

export const summaryStats: StatItem[] = [
  { label: 'Average Rating', value: '4.9 / 5.0', color: '#0f172a' },
  { label: 'Reviews Verified', value: '850+', color: '#3d9e41' },
  { label: 'Repeat Clients', value: '65%', color: '#1756a0' },
  { label: 'Recommend Us', value: '98%', color: '#3d9e41' },
];
