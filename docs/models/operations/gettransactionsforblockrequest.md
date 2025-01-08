# GetTransactionsForBlockRequest

## Example Usage

```typescript
import { GetTransactionsForBlockRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetTransactionsForBlockRequest = {
  pageSize: 10,
  chainId: "43114",
  blockId: "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A page token, received from a previous list call. Provide this to retrieve the subsequent page.             |                                                                                                             |
| `pageSize`                                                                                                  | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The maximum number of items to return. The minimum page size is 0. The maximum pageSize is 100.             | 10                                                                                                          |
| `chainId`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                       |
| `blockId`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A block identifier which is either a block number or the block hash.                                        | 0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c                                          |