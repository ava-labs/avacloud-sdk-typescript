# GetContractMetadataRequest

## Example Usage

```typescript
import { GetContractMetadataRequest } from "@avalabs/avalanche-sdk/models/operations";

let value: GetContractMetadataRequest = {
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `chainId`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. |                                                                                                                          |
| `address`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Contract address on the relevant chain.                                                                                  | 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E                                                                               |