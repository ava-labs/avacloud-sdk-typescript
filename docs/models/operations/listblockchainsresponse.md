# ListBlockchainsResponse

## Example Usage

```typescript
import { ListBlockchainsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListBlockchainsResponse = {
  result: {
    blockchains: [
      {
        createBlockTimestamp: 1223.42,
        createBlockNumber: "<value>",
        blockchainId: "<id>",
        vmId: "<id>",
        subnetId: "<id>",
        blockchainName: "<value>",
        evmChainId: 43114,
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListBlockchainsResponse](../../models/components/listblockchainsresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |