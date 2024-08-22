# ListSubnetsResponse

## Example Usage

```typescript
import { ListSubnetsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListSubnetsResponse = {
    result: {
        subnets: [
            {
                createBlockTimestamp: 6793.93,
                createBlockIndex: "<value>",
                subnetId: "<value>",
                ownerAddresses: ["<value>"],
                threshold: 4785.96,
                locktime: 4536.97,
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