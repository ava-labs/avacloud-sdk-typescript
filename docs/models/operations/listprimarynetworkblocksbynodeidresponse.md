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
                blockTimestamp: 5182.01,
                blockType: "<value>",
                txCount: 4717.52,
                transactions: ["<value>"],
                blockSizeBytes: 256.62,
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