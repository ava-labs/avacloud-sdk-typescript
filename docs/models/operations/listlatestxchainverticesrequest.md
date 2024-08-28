# ListLatestXChainVerticesRequest

## Example Usage

```typescript
import { ListLatestXChainVerticesRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: ListLatestXChainVerticesRequest = {
    pageSize: 10,
    blockchainId: "x-chain",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | A page token, received from a previous list call. Provide this to retrieve the subsequent page. |                                                                                                 |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100. | 10                                                                                              |
| `blockchainId`                                                                                  | [components.XChainId](../../models/components/xchainid.md)                                      | :heavy_check_mark:                                                                              | A primary network blockchain id or alias.                                                       | x-chain                                                                                         |
| `network`                                                                                       | [components.Network](../../models/components/network.md)                                        | :heavy_minus_sign:                                                                              | Either mainnet or a testnet.                                                                    | mainnet                                                                                         |