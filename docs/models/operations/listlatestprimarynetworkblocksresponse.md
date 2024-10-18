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
        blockTimestamp: 3970.26,
        blockType: "<value>",
        txCount: 2766.50,
        transactions: [
          "<value>",
        ],
        blockSizeBytes: 5063.43,
      },
    ],
    chainInfo: {
      chainName: "x-chain",
      network: "devnet",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |