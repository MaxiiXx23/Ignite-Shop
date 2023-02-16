export function formatterPrice (price: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const priceFormatted = formatter.format(price);

    return priceFormatted
}