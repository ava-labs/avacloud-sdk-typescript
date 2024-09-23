# Subnet

## Example Usage

```typescript
import { Subnet } from "@avalabs/avacloud-sdk/models/components";

let value: Subnet = {
  createBlockTimestamp: 7163.27,
  createBlockIndex: "<value>",
  subnetId: "<value>",
  ownerAddresses: [
    "<value>",
  ],
  threshold: 2894.06,
  locktime: 1831.91,
  subnetOwnershipInfo: {
    locktime: 0,
    threshold: 1,
    addresses: [
      "avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw",
    ],
  },
  blockchains: [
    {
      blockchainId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createBlockTimestamp`                                                                                                                                                              | *number*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `createBlockIndex`                                                                                                                                                                  | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `subnetId`                                                                                                                                                                          | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| ~~`ownerAddresses`~~                                                                                                                                                                | *string*[]                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>This field is deprecated. Use subnetOwnershipInfo instead. |
| ~~`threshold`~~                                                                                                                                                                     | *number*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>This field is deprecated. Use subnetOwnershipInfo instead. |
| ~~`locktime`~~                                                                                                                                                                      | *number*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>This field is deprecated. Use subnetOwnershipInfo instead. |
| `subnetOwnershipInfo`                                                                                                                                                               | [components.SubnetOwnershipInfo](../../models/components/subnetownershipinfo.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                                  | Latest subnet owner details for this Subnet.                                                                                                                                        |
| `blockchains`                                                                                                                                                                       | [components.BlockchainInfo](../../models/components/blockchaininfo.md)[]                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |