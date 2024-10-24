# ListSubnetsResponse

## Example Usage

```typescript
import { ListSubnetsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListSubnetsResponse = {
  result: {
    subnets: [
      {
        createBlockTimestamp: 7708.73,
        createBlockIndex: "<value>",
        subnetId: "<id>",
        ownerAddresses: [
          "<value>",
        ],
        threshold: 7358.94,
        locktime: 1415.06,
        subnetOwnershipInfo: {
          locktime: 0,
          threshold: 1,
          addresses: [
            "avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw",
          ],
        },
        blockchains: [
          {
            blockchainId: "<id>",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListSubnetsResponse](../../models/components/listsubnetsresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |