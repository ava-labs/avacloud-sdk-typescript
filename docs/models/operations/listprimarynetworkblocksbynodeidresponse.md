# ListPrimaryNetworkBlocksByNodeIdResponse

## Example Usage

```typescript
import { ListPrimaryNetworkBlocksByNodeIdResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListPrimaryNetworkBlocksByNodeIdResponse = {
  result: {
    blocks: [
      {
        blockNumber: "<value>",
        blockHash: "<value>",
        parentHash: "<value>",
        blockTimestamp: 5206.78,
        blockType: "<value>",
        txCount: 3979.19,
        transactions: [
          "<value>",
        ],
        blockSizeBytes: 7745.01,
      },
    ],
    chainInfo: {
      chainName: "p-chain",
      network: "mainnet",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |