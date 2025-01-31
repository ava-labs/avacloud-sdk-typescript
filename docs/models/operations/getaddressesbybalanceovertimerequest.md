# GetAddressesByBalanceOverTimeRequest

## Example Usage

```typescript
import { GetAddressesByBalanceOverTimeRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetAddressesByBalanceOverTimeRequest = {
  threshold: "1000000",
  startTimestamp: 1689541049,
  endTimestamp: 1689800249,
  chainId: "43114",
  address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `threshold`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The minimum balance for which addresses should be considered.                                    | 1000000                                                                                          |
| `startTimestamp`                                                                                 | *number*                                                                                         | :heavy_minus_sign:                                                                               | Query param for retrieving items after a specific timestamp.                                     | 1689541049                                                                                       |
| `endTimestamp`                                                                                   | *number*                                                                                         | :heavy_minus_sign:                                                                               | Query param for retrieving items before a specific timestamp.                                    | 1689800249                                                                                       |
| `pageToken`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | A page token, received from a previous list call. Provide this to retrieve the subsequent page.  |                                                                                                  |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 5000. | 10                                                                                               |
| `chainId`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.       | 43114                                                                                            |
| `address`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Contract address on the relevant chain.                                                          | 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E                                                       |