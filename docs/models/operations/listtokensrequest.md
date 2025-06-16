# ListTokensRequest

## Example Usage

```typescript
import { ListTokensRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: ListTokensRequest = {
  address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A page token, received from a previous list call. Provide this to retrieve the subsequent page.             |                                                                                                             |
| `pageSize`                                                                                                  | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.             | 10                                                                                                          |
| `chainId`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                       |
| `address`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Contract address on the relevant chain.                                                                     | 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E                                                                  |