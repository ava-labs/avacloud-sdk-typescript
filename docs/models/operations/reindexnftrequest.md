# ReindexNftRequest

## Example Usage

```typescript
import { ReindexNftRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: ReindexNftRequest = {
  chainId: "43114",
  address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  tokenId: "145",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `chainId`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                       |
| `address`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Contract address on the relevant chain.                                                                     | 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E                                                                  |
| `tokenId`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | TokenId on the contract                                                                                     | 145                                                                                                         |