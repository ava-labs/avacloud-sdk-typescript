# GetChainInfoRequest

## Example Usage

```typescript
import { GetChainInfoRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetChainInfoRequest = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `chainId`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. | 43114                                                                                                                    |