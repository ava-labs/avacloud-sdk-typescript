# ListErc1155BalancesRequest

## Example Usage

```typescript
import { ListErc1155BalancesRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: ListErc1155BalancesRequest = {
  blockNumber: "6479329",
  pageSize: 10,
  address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `blockNumber`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The block number, if not defined the block number will be the latest block.                                 | 6479329                                                                                                     |
| `pageToken`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A page token, received from a previous list call. Provide this to retrieve the subsequent page.             |                                                                                                             |
| `pageSize`                                                                                                  | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.             | 10                                                                                                          |
| `chainId`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                       |
| `address`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A wallet address.                                                                                           | 0x71C7656EC7ab88b098defB751B7401B5f6d8976F                                                                  |
| `contractAddress`                                                                                           | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A contract addresses to filter by.                                                                          | 0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7                                                                  |