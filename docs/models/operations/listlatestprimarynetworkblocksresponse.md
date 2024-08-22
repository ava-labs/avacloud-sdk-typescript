# ListLatestPrimaryNetworkBlocksResponse

## Example Usage

```typescript
import { ListLatestPrimaryNetworkBlocksResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListLatestPrimaryNetworkBlocksResponse = {
    result: {
        blocks: [
            {
                blockNumber: "<value>",
                blockHash: "<value>",
                parentHash: "<value>",
                blockTimestamp: 1536.94,
                blockType: "<value>",
                txCount: 4246.85,
                transactions: ["<value>"],
                blockSizeBytes: 7304.42,
            },
        ],
        chainInfo: {
            chainName: "x-chain",
            network: "fuji",
        },
    },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |