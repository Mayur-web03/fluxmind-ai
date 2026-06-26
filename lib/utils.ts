export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(Math.round(num));
}

export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}