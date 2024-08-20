# GetBalancesByAddressesResponseBody

Successful response

## Example Usage

```typescript
import { GetBalancesByAddressesResponseBody } from "@avalabs/avalanche-sdk/models/operations";

let value: GetBalancesByAddressesResponseBody = {
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
                type: "nft",
                amount: "5001000",
                utxoCount: 1,
                sharedWithChainId: "<value>",
            },
        ],
    },
    chainInfo: {
        chainName: "x-chain",
        network: "fuji",
    },
};
```

## Supported Types

### `components.ListPChainBalancesResponse`

```typescript
const value: components.ListPChainBalancesResponse = /* values here */
```

### `components.ListXChainBalancesResponse`

```typescript
const value: components.ListXChainBalancesResponse = /* values here */
```

### `components.ListCChainAtomicBalancesResponse`

```typescript
const value: components.ListCChainAtomicBalancesResponse = /* values here */
```

