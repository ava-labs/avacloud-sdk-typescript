# ListTokensResponse

## Example Usage

```typescript
import { ListTokensResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListTokensResponse = {
  result: {
    tokens: [
      {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        ercType: "ERC-1155",
        tokenId: "<id>",
        tokenUri: "https://rural-tinderbox.name/",
        metadata: {
          indexStatus: "INVALID_TOKEN_URI_SCHEME",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.ListNftTokens](../../models/components/listnfttokens.md) | :heavy_check_mark:                                                   | N/A                                                                  |