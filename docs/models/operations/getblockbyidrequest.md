# GetBlockByIdRequest

## Example Usage

```typescript
import { GetBlockByIdRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetBlockByIdRequest = {
  blockchainId: "p-chain",
  blockId: "5615di9ytxujackzaXNrVuWQy5y8Yrt8chPCscMr5Ku9YxJ1S",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `blockchainId`                                                                 | [components.BlockchainId](../../models/components/blockchainid.md)             | :heavy_check_mark:                                                             | A primary network blockchain id or alias.                                      | p-chain                                                                        |
| `network`                                                                      | [components.GlobalParamNetwork](../../models/components/globalparamnetwork.md) | :heavy_minus_sign:                                                             | Either mainnet or a testnet.                                                   | mainnet                                                                        |
| `blockId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | A block identifier which is either a block number or the block hash.           | 5615di9ytxujackzaXNrVuWQy5y8Yrt8chPCscMr5Ku9YxJ1S                              |