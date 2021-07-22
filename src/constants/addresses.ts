import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from 'dharma-v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from 'dharma-v3-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x00000000000000000000000000000000deadbeef')
export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0xF7bbE3359443565954b0daC61756931581F3699C',
}
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0xFc7B4A9b60D937bBb2e0BC25654f02728e1D609F')

/**
 * The older V0 governance account
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x00000000000000000000000000000000deadbeef'
)
/**
 * The latest governor alpha that is currently admin of timelock
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x00000000000000000000000000000000deadbeef',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x00000000000000000000000000000000deadbeef')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0x00000000000000000000000000000000deadbeef',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0x00000000000000000000000000000000deadbeef',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V3_FACTORY_ADDRESS, [])
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0x07124c7eda34cACAa94e6D0bbF4994E1E173383a', [])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x98fBB93fEdA502d581EE8c9bEb927c37E440F956',
  []
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x00000000000000000000000000000000deadbeef',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x00000000000000000000000000000000deadbeef',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x809fE6B40242Ab006E34015ABce2561d36D82C57',
  []
)
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x00000000000000000000000000000000deadbeef',
  []
)
