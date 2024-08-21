# GetPrimaryNetworkBlockResponse

## Example Usage

```typescript
import { GetPrimaryNetworkBlockResponse } from "@avalabs/avalanche-sdk/models/components";

let value: GetPrimaryNetworkBlockResponse = {
    blockNumber: "<value>",
    blockHash: "<value>",
    parentHash: "<value>",
    blockTimestamp: 7936.98,
    blockType: "<value>",
    txCount: 4634.51,
    transactions: ["<value>"],
    blockSizeBytes: 2239.24,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `blockNumber`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `blockHash`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `parentHash`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `blockTimestamp`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `blockType`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `txCount`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `transactions`                                                           | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `blockSizeBytes`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `currentSupply`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `proposerDetails`                                                        | [components.ProposerDetails](../../models/components/proposerdetails.md) | :heavy_minus_sign:                                                       | N/A                                                                      |