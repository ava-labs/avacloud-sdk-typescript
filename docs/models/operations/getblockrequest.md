# GetBlockRequest

## Example Usage

```typescript
import { GetBlockRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetBlockRequest = {
  blockId: "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `chainId`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                                    |
| `blockId`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | A block identifier which is either a block number or the block hash.                                                     | 0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c                                                       |