# ListCChainAtomicBalancesResponse

## Example Usage

```typescript
import { ListCChainAtomicBalancesResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListCChainAtomicBalancesResponse = {
    balances: {
        atomicMemoryUnlocked: [
            {
                assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
                name: "Avalanche",
                symbol: "AVAX",
                denomination: 9,
                type: "secp256k1",
                amount: "5001000",
                utxoCount: 1,
                sharedWithChainId: "<value>",
            },
        ],
        atomicMemoryLocked: [
            {
                assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
                name: "Avalanche",
                symbol: "AVAX",
                denomination: 9,
                type: "secp256k1",
                amount: "5001000",
                utxoCount: 1,
                sharedWithChainId: "<value>",
            },
        ],
    },
    chainInfo: {
        chainName: "x-chain",
        network: "mainnet",
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `balances`                                                                               | [components.CChainAtomicBalances](../../models/components/cchainatomicbalances.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `chainInfo`                                                                              | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |