# ListLatestPrimaryNetworkBlocksRequest

## Example Usage

```typescript
import { ListLatestPrimaryNetworkBlocksRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: ListLatestPrimaryNetworkBlocksRequest = {
  pageSize: 10,
  blockchainId: "p-chain",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | A page token, received from a previous list call. Provide this to retrieve the subsequent page. |                                                                                                 |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100. | 10                                                                                              |
| `blockchainId`                                                                                  | [components.BlockchainId](../../models/components/blockchainid.md)                              | :heavy_check_mark:                                                                              | A primary network blockchain id or alias.                                                       | p-chain                                                                                         |
| `network`                                                                                       | [components.GlobalParamNetwork](../../models/components/globalparamnetwork.md)                  | :heavy_minus_sign:                                                                              | Either mainnet or a testnet.                                                                    | mainnet                                                                                         |