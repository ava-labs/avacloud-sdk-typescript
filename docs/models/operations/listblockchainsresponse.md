# ListBlockchainsResponse

## Example Usage

```typescript
import { ListBlockchainsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListBlockchainsResponse = {
    result: {
        blockchains: [
            {
                createBlockTimestamp: 6027.63,
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