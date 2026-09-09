/**
 * Format a listing price in USD to match the properties filter ($0–$2M, $10k steps).
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US')}`;
}
