# ListBlockchainsResponse

## Example Usage

```typescript
import { ListBlockchainsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListBlockchainsResponse = {
  result: {
    blockchains: [
      {
        createBlockTimestamp: 2273.62,
        createBlockNumber: "<value>",
        blockchainId: "<id>",
        vmId: "<id>",
        subnetId: "<id>",
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