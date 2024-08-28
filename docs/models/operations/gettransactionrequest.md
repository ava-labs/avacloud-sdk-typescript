# GetTransactionRequest

## Example Usage

```typescript
import { GetTransactionRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetTransactionRequest = {
    txHash: "0x8bf584d7b14b92a32a339872a66b134a70ba3ba7c305823f348db6f860253f45",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `chainId`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                                    |
| `txHash`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | A transaction hash.                                                                                                      | 0x8bf584d7b14b92a32a339872a66b134a70ba3ba7c305823f348db6f860253f45                                                       |