export function parseCurrency(value: number): string {
  return new Intl.NumberFormat("es-CLP", {
    style: "currency",
    currency: "CLP",
  }).format(value);
}
