import { anonymizeLink } from './anonymizeLink'

describe('#anonymizeLink', () => {
  it('does nothing to non-urls', () => {
    expect(anonymizeLink('not a link')).toEqual('not a link')
  })
  it('anonymizes any addresses in etherscan urls', () => {
    expect(anonymizeLink('https://bscscan.com/address/0xabcd')).toEqual('https://bscscan.com/address/***')
  })
  it('anonymizes any addresses in etherscan urls', () => {
    expect(anonymizeLink('https://bscscan.com/address/0xabcd')).toEqual('https://bscscan.com/address/***')
  })
  it('anonymizes any addresses in testnet etherscan urls', () => {
    expect(anonymizeLink('https://rinkeby.bscscan.com/address/0xabcd')).toEqual(
      'https://rinkeby.bscscan.com/address/***'
    )
  })
  it('anonymizes any addresses in testnet etherscan urls', () => {
    expect(anonymizeLink('https://ropsten.bscscan.com/address/0xabcd')).toEqual(
      'https://ropsten.bscscan.com/address/***'
    )
  })
  it('anonymizes hashes in the middle of the url', () => {
    expect(anonymizeLink('https://ropsten.bscscan.com/address/0xabcd/test')).toEqual(
      'https://ropsten.bscscan.com/address/***/test'
    )
  })
  it('does not anonymize 0x', () => {
    expect(anonymizeLink('https://ropsten.bscscan.com/address/0x/test')).toEqual(
      'https://ropsten.bscscan.com/address/0x/test'
    )
  })
  it('works for arbitrum urls', () => {
    expect(anonymizeLink('https://explorer.arbitrum.io/0x/0xabc')).toEqual('https://explorer.arbitrum.io/0x/***')
  })
  it('works for arbitrum rinkeby urls', () => {
    expect(anonymizeLink('https://rinkeby-explorer.arbitrum.io/0x/0xabc')).toEqual(
      'https://rinkeby-explorer.arbitrum.io/0x/***'
    )
  })
})
