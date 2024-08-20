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
                blockTimestamp: 1059.07,
                blockType: "<value>",
                txCount: 4146.62,
                transactions: ["<value>"],
                blockSizeBytes: 4736,
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