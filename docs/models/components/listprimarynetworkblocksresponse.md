# ListPrimaryNetworkBlocksResponse

## Example Usage

```typescript
import { ListPrimaryNetworkBlocksResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListPrimaryNetworkBlocksResponse = {
    blocks: [
        {
            blockNumber: "<value>",
            blockHash: "<value>",
            parentHash: "<value>",
            blockTimestamp: 543.38,
            blockType: "<value>",
            txCount: 3389.85,
            transactions: ["<value>"],
            blockSizeBytes: 1999.96,
        },
    ],
    chainInfo: {
        chainName: "p-chain",
        network: "mainnet",
    },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `blocks`                                                                                                                               | [components.PrimaryNetworkBlock](../../models/components/primarynetworkblock.md)[]                                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |