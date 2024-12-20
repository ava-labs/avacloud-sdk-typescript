# CollectibleBalances


## Supported Types

### `components.Erc721TokenBalance`

```typescript
const value: components.Erc721TokenBalance = {
  address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  name: "Wrapped AVAX",
  symbol: "WAVAX",
  ercType: "ERC-721",
  tokenId: "<id>",
  tokenUri: "https://bare-bar.org/",
  metadata: {
    indexStatus: "INVALID_METADATA_JSON",
  },
  ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  chainId: "43114",
};
```

### `components.Erc1155TokenBalance`

```typescript
const value: components.Erc1155TokenBalance = {
  address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  ercType: "ERC-1155",
  tokenId: "<id>",
  tokenUri: "https://rectangular-litter.biz",
  metadata: {
    indexStatus: "UNINDEXED",
  },
  chainId: "43114",
  balance: "2000000000000000000",
};
```

