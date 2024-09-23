# CollectibleBalances

## Example Usage

```typescript
import { CollectibleBalances } from "@avalabs/avacloud-sdk/models/components";

let value: CollectibleBalances = {
  address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  name: "Wrapped AVAX",
  symbol: "WAVAX",
  ercType: "ERC-721",
  tokenId: "<value>",
  tokenUri: "<value>",
  metadata: {
    indexStatus: "UNREACHABLE_TOKEN_URI",
  },
  ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  chainId: "43114",
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

