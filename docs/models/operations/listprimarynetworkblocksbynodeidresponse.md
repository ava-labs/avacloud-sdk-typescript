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
                blockTimestamp: 1433.53,
                blockType: "<value>",
                txCount: 5373.73,
                transactions: ["<value>"],
                blockSizeBytes: 9446.69,
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