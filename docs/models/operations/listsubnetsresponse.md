# ListSubnetsResponse

## Example Usage

```typescript
import { ListSubnetsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListSubnetsResponse = {
  result: {
    subnets: [
      {
        createBlockTimestamp: 688.52,
        createBlockIndex: "<value>",
        subnetId: "<id>",
        ownerAddresses: [
          "<value>",
        ],
        threshold: 7057.10,
        locktime: 3952.33,
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