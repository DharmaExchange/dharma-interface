//import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from 'dharma-v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from 'dharma-v3-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

const V2_FACTORY_ADDRESS = "0x6075F44F85E185291de927a0aB321f2663eEA68b";

export const UNI_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
}
export const MULTICALL_ADDRESS: AddressMap = {
  /*...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [SupportedChainId.OPTIMISTIC_KOVAN]),
  [SupportedChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',*/
  [SupportedChainId.BSC]: '0xffBe6a2253e03a83D1ddE16e4F5f2F58184AbabB',
}
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: V2_FACTORY_ADDRESS,
}
export const V2_ROUTER_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
}
/**
 * The older V0 governance account
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The latest governor alpha that is currently admin of timelock
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: V3_FACTORY_ADDRESS
}
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
  ]
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x90B3c58eeF196c6647EEB5957c5Ad003d3A1B643',
}/*constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])*/
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
