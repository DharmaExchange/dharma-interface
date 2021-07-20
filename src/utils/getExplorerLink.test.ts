import { ExplorerDataType, getExplorerLink } from './getExplorerLink'

describe('#getExplorerLink', () => {
  it('correct for tx', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TRANSACTION)).toEqual('https://bscscan.com/tx/abc')
  })
  it('correct for token', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TOKEN)).toEqual('https://bscscan.com/token/abc')
  })
  it('correct for address', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://bscscan.com/address/abc')
  })
  it('unrecognized chain id defaults to mainnet', () => {
    expect(getExplorerLink(2, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://bscscan.com/address/abc')
  })
  it('ropsten', () => {
    expect(getExplorerLink(3, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://ropsten.bscscan.com/address/abc')
  })
  it('enum', () => {
    expect(getExplorerLink(4, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://rinkeby.bscscan.com/address/abc')
  })
})
