# GetNftHoldersByContractAddressRequest

## Example Usage

```typescript
import { GetNftHoldersByContractAddressRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetNftHoldersByContractAddressRequest = {
  pageSize: 10,
  chainId: "43114",
  address: "0x7a420AEFF902AAa2c85a190D7B91Ce8BEFffFE14",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pageToken`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | A page token, received from a previous list call. Provide this to retrieve the subsequent page.  |                                                                                                  |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 5000. | 10                                                                                               |
| `chainId`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.       | 43114                                                                                            |
| `address`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Contract address on the relevant chain.                                                          | 0x7a420AEFF902AAa2c85a190D7B91Ce8BEFffFE14                                                       |