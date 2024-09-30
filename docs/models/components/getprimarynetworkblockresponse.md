# GetPrimaryNetworkBlockResponse

## Example Usage

```typescript
import { GetPrimaryNetworkBlockResponse } from "@avalabs/avacloud-sdk/models/components";

let value: GetPrimaryNetworkBlockResponse = {
  blockNumber: "<value>",
  blockHash: "<value>",
  parentHash: "<value>",
  blockTimestamp: 353.62,
  blockType: "<value>",
  txCount: 4304.02,
  transactions: [
    "<value>",
  ],
  blockSizeBytes: 5100.17,
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