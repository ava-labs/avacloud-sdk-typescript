# Chain

## Example Usage

```typescript
import { Chain } from "@avalabs/avacloud-sdk/models/components";

let value: Chain = {
    evmChainId: 43114,
    chainName: "c_chain",
    blockchainId: "2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5",
    subnetId: "11111111111111111111111111111111LpoYY",
    network: "mainnet",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `evmChainId`                                                     | *number*                                                         | :heavy_check_mark:                                               | EVM ChainID for the blockchain.                                  | 43114                                                            |
| `chainName`                                                      | *string*                                                         | :heavy_check_mark:                                               | Blockchain alias for easy identification of blockchains.         | c_chain                                                          |
| `blockchainId`                                                   | *string*                                                         | :heavy_check_mark:                                               | Unique blockchain ID for this blockchain.                        | 2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5                |
| `subnetId`                                                       | *string*                                                         | :heavy_check_mark:                                               | Subnet ID this blockchain belongs to.                            | 11111111111111111111111111111111LpoYY                            |
| `network`                                                        | [components.NetworkType](../../models/components/networktype.md) | :heavy_check_mark:                                               | N/A                                                              | mainnet                                                          |