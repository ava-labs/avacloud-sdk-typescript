# ListLatestPrimaryNetworkBlocksResponse

## Example Usage

```typescript
import { ListLatestPrimaryNetworkBlocksResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListLatestPrimaryNetworkBlocksResponse = {
  result: {
    blocks: [
      {
        blockNumber: "<value>",
        blockHash: "<value>",
        parentHash: "<value>",
        blockTimestamp: 9292.92,
        blockType: "<value>",
        txCount: 2659.06,
        transactions: [
          "<value>",
        ],
        blockSizeBytes: 8281.47,
      },
    ],
    chainInfo: {
      chainName: "c-chain",
      network: "mainnet",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |