# GetAssetDetailsRequest

## Example Usage

```typescript
import { GetAssetDetailsRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetAssetDetailsRequest = {
    blockchainId: "x-chain",
    assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `blockchainId`                                                                 | [components.XChainId](../../models/components/xchainid.md)                     | :heavy_check_mark:                                                             | A primary network blockchain id or alias.                                      | x-chain                                                                        |
| `network`                                                                      | [components.GlobalParamNetwork](../../models/components/globalparamnetwork.md) | :heavy_minus_sign:                                                             | Either mainnet or a testnet.                                                   | mainnet                                                                        |
| `assetId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Asset ID for any asset on X-Chain                                              | th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof                              |