# ListSubnetsResponse

## Example Usage

```typescript
import { ListSubnetsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListSubnetsResponse = {
    result: {
        subnets: [
            {
                createBlockTimestamp: 7887.4,
                createBlockIndex: "<value>",
                subnetId: "<value>",
                ownerAddresses: ["<value>"],
                threshold: 9473.71,
                locktime: 2294.42,
                subnetOwnershipInfo: {
                    locktime: 0,
                    threshold: 1,
                    addresses: ["avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw"],
                },
                blockchains: [
                    {
                        blockchainId: "<value>",
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