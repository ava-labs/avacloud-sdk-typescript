# Erc721Transfer

## Example Usage

```typescript
import { Erc721Transfer } from "@avalabs/avacloud-sdk/models/components";

let value: Erc721Transfer = {
  blockNumber: "339",
  blockTimestamp: 1648672486,
  blockHash:
    "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
  txHash: "0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4",
  from: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  to: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  logIndex: 9308.19,
  erc721Token: {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    ercType: "ERC-721",
    tokenId: "<id>",
    tokenUri: "https://feline-swanling.info",
    metadata: {
      indexStatus: "UNKNOWN",
    },
    ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `blockNumber`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The block number on the chain.                                     | 339                                                                |
| `blockTimestamp`                                                   | *number*                                                           | :heavy_check_mark:                                                 | The block finality timestamp.                                      | 1648672486                                                         |
| `blockHash`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The block hash identifier.                                         | 0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c |
| `txHash`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The transaction hash identifier.                                   | 0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4 |
| `from`                                                             | [components.RichAddress](../../models/components/richaddress.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `to`                                                               | [components.RichAddress](../../models/components/richaddress.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `logIndex`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `erc721Token`                                                      | [components.Erc721Token](../../models/components/erc721token.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |