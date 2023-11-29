export function reverseLayout(lang: string): boolean {
  return lang === 'ar';
}
export function reverseRowLayout(lang: string): string {
  return reverseLayout(lang) ? 'flex-row-reverse' : '';
}

export function reverseWrapLayout(lang: string): string {
  return reverseLayout(lang) ? 'flex-wrap-reverse' : '';
}

export function reverseItemsAlign(lang: string): string {
  return reverseLayout(lang) ? 'items-end' : 'items-start';
}

export function reverseTextAlign(lang: string): string {
  return reverseLayout(lang) ? 'text-end' : '';
}
