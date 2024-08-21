# ListPrimaryNetworkBlocksByNodeIdResponse

## Example Usage

```typescript
import { ListPrimaryNetworkBlocksByNodeIdResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListPrimaryNetworkBlocksByNodeIdResponse = {
    result: {
        blocks: [
            {
                blockNumber: "<value>",
                blockHash: "<value>",
                parentHash: "<value>",
                blockTimestamp: 6457.85,
                blockType: "<value>",
                txCount: 5883.17,
                transactions: ["<value>"],
                blockSizeBytes: 3246.83,
            },
        ],
        chainInfo: {
            chainName: "c-chain",
            network: "fuji",
        },
    },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |