export function formatterPrice(price: number): string {
  const priceConverted = price / 100

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const priceFormatted = formatter.format(priceConverted)

  return priceFormatted
}
