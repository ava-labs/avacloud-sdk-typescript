# SovDetailsFull

## Example Usage

```typescript
import { SovDetailsFull } from "@avalabs/avacloud-sdk/models/components";

let value: SovDetailsFull = {
  validationId: "<id>",
  nodeId: "<id>",
  subnetId: "<id>",
  weight: 7044.14,
  remainingBalance: 318.39,
  creationTimestamp: 1646.94,
  blsCredentials: {},
  remainingBalanceOwner: {
    addresses: [
      "<value>",
    ],
    threshold: 6214.78,
  },
  deactivationOwner: {
    addresses: [
      "<value>",
    ],
    threshold: 5772.29,
  },
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validationId`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Unique SoV ID used network-wide to identify subnet-only validation until its weight is reduced to 0 i.e. removed.                                                |
| `nodeId`                                                                                                                                                         | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `subnetId`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `weight`                                                                                                                                                         | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Weight of the SoV used while sampling validators within the L1. A zero-weight SoV means it has been removed from the L1, and the validationID is no longer valid |
| `remainingBalance`                                                                                                                                               | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Remaining SoV balance in nAVAX until inactive. It can rejoin subnet sampling by increasing balance with IncreaseBalanceTx                                        |
| `creationTimestamp`                                                                                                                                              | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The timestamp of the transaction which created this SoV                                                                                                          |
| `blsCredentials`                                                                                                                                                 | [components.SovDetailsFullBlsCredentials](../../models/components/sovdetailsfullblscredentials.md)                                                               | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `remainingBalanceOwner`                                                                                                                                          | [components.BalanceOwner](../../models/components/balanceowner.md)                                                                                               | :heavy_check_mark:                                                                                                                                               | The SoV owner's balance, returned after it's disabled or removed                                                                                                 |
| `deactivationOwner`                                                                                                                                              | [components.BalanceOwner](../../models/components/balanceowner.md)                                                                                               | :heavy_check_mark:                                                                                                                                               | Owner ddresses details which can disable or remove the SoV                                                                                                       |