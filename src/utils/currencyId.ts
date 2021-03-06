import { Currency } from 'dharma-sdk-core'

export function currencyId(currency: Currency): string {
  if (currency.isNative) return 'BNB'
  if (currency.isToken) return currency.address
  throw new Error('invalid currency')
}
