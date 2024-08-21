# ListSubnetsResponse

## Example Usage

```typescript
import { ListSubnetsResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListSubnetsResponse = {
    subnets: [
        {
            createBlockTimestamp: 1182.74,
            createBlockIndex: "<value>",
            subnetId: "<value>",
            ownerAddresses: ["<value>"],
            threshold: 7206.33,
            locktime: 6399.21,
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `subnets`                                                                                                                              | [components.Subnet](../../models/components/subnet.md)[]                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |