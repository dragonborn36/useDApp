import { createContext, useContext } from 'react'
import { ChainId } from '../../../constants'
import { Network } from './model'
import type { providers } from 'ethers'

type JsonRpcProvider = providers.JsonRpcProvider
type ExternalProvider = providers.ExternalProvider

export const NetworkContext = createContext<{
  reportError: (error: Error) => void
  activate: (provider: JsonRpcProvider | ExternalProvider | { tag: string }) => Promise<void>
  deactivate: () => void
  network: Network
  activateBrowserWallet: () => void
  isLoading: boolean
}>({
  network: {
    provider: undefined,
    chainId: ChainId.Mainnet,
    accounts: [],
    errors: [],
  },
  reportError: () => undefined,
  activate: async () => undefined,
  deactivate: () => undefined,
  activateBrowserWallet: () => undefined,
  isLoading: true,
})

/**
 * @internal
 */
export function useNetwork() {
  return useContext(NetworkContext)
}
