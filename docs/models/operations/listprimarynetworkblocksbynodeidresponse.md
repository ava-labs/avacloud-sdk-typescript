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
        blockTimestamp: 1081.66,
        blockType: "<value>",
        txCount: 3923.19,
        transactions: [
          "<value>",
        ],
        blockSizeBytes: 2212.18,
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