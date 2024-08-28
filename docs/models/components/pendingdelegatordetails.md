# PendingDelegatorDetails

## Example Usage

```typescript
import { PendingDelegatorDetails } from "@avalabs/avacloud-sdk/models/components";

let value: PendingDelegatorDetails = {
    txHash: "<value>",
    nodeId: "<value>",
    rewardAddresses: ["<value>"],
    amountDelegated: "<value>",
    delegationFee: "<value>",
    startTimestamp: 6706.38,
    endTimestamp: 1709.09,
    estimatedGrossReward: "<value>",
    estimatedNetReward: "<value>",
    delegationStatus: "pending",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `txHash`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `nodeId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rewardAddresses`                                                                                                        | *string*[]                                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `amountDelegated`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `delegationFee`                                                                                                          | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `endTimestamp`                                                                                                           | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `estimatedGrossReward`                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `estimatedNetReward`                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `delegationStatus`                                                                                                       | [components.PendingDelegatorDetailsDelegationStatus](../../models/components/pendingdelegatordetailsdelegationstatus.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |