# Erc1155TransferDetails

## Example Usage

```typescript
import { Erc1155TransferDetails } from "@avalabs/avacloud-sdk/models/components";

let value: Erc1155TransferDetails = {
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
  logIndex: 2703.28,
  value: "10000000000000000000",
  erc1155Token: {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    ercType: "ERC-1155",
    tokenId: "<id>",
    tokenUri: "https://babyish-ethyl.biz/",
    metadata: {
      indexStatus: "THROTTLED_TOKEN_URI",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `from`                                                             | [components.RichAddress](../../models/components/richaddress.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `to`                                                               | [components.RichAddress](../../models/components/richaddress.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `logIndex`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 10000000000000000000                                               |
| `erc1155Token`                                                     | [components.Erc1155Token](../../models/components/erc1155token.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |