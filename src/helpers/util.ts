export const toCurrency = (value: number) => {
  try {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  } catch {
    return value;
  }
};
