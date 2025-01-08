# GetLatestBlocksRequest

## Example Usage

```typescript
import { GetLatestBlocksRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetLatestBlocksRequest = {
  pageSize: 10,
  chainId: "43114",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A page token, received from a previous list call. Provide this to retrieve the subsequent page.             |                                                                                                             |
| `pageSize`                                                                                                  | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.             | 10                                                                                                          |
| `chainId`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                       |