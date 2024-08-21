# CollectibleBalances

## Example Usage

```typescript
import { CollectibleBalances } from "@avalabs/avalanche-sdk/models/components";

let value: CollectibleBalances = {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    ercType: "ERC-1155",
    tokenId: "<value>",
    tokenUri: "<value>",
    metadata: {
        indexStatus: "UNREACHABLE_TOKEN_URI",
    },
    chainId: "43114",
    balance: "2000000000000000000",
};
```

## Supported Types

### `components.Erc721TokenBalance`

```typescript
const value: components.Erc721TokenBalance = /* values here */
```

### `components.Erc1155TokenBalance`

```typescript
const value: components.Erc1155TokenBalance = /* values here */
```

