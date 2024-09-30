# ListTokensResponse

## Example Usage

```typescript
import { ListTokensResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListTokensResponse = {
  result: {
    tokens: [
      {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        ercType: "ERC-721",
        tokenId: "<id>",
        tokenUri: "https://nifty-soliloquy.net",
        metadata: {
          indexStatus: "UNKNOWN",
        },
        ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.ListNftTokens](../../models/components/listnfttokens.md) | :heavy_check_mark:                                                   | N/A                                                                  |