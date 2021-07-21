import { WETH9, Token, Ether } from 'dharma-sdk-core'
import { UNI_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const AMPL = new Token(
  SupportedChainId.BSC,
  '0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F',
  9,
  'AMPL',
  'Ampleforth'
)
export const DAI = new Token(
  SupportedChainId.BSC,
  '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDC = new Token(SupportedChainId.BSC, '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 6, 'USDC', 'USD//C')
export const USDT = new Token(
  SupportedChainId.BSC,
  '0x55d398326f99059ff775485246999027b3197955',
  6,
  'USDT',
  'Tether USD'
)

export const WBTC = new Token(
  SupportedChainId.BSC,
  '0xd47Ba9A00EB87B9E753c6651e402DAD7D9f1C4Ca',
  8,
  'WBTC',
  'Wrapped BTC'
)

export const renBTC = new Token(
  SupportedChainId.BSC,
  '0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c',
  8,
  'renBTC',
  'renBTC'
)

export const UNI: { [chainId: number]: Token } = {
  [SupportedChainId.BSC]: new Token(SupportedChainId.BSC, UNI_ADDRESS[SupportedChainId.BSC], 18, 'UNI', 'Uniswap'),
}

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  [SupportedChainId.BSC]: new Token(
    SupportedChainId.BSC,
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId]
    throw new Error('Unsupported chain ID')
  }

  private static _cachedEther: { [chainId: number]: ExtendedEther } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId))
  }
}
