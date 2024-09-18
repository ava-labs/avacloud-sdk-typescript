# ListBlockchainsResponse

## Example Usage

```typescript
import { ListBlockchainsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListBlockchainsResponse = {
  result: {
    blockchains: [
      {
        createBlockTimestamp: 4561.3,
        createBlockNumber: "<value>",
        blockchainId: "<value>",
        vmId: "<value>",
        subnetId: "<value>",
        blockchainName: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListBlockchainsResponse](../../models/components/listblockchainsresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |