# ActiveDelegatorDetails

## Example Usage

```typescript
import { ActiveDelegatorDetails } from "@avalabs/avacloud-sdk/models/components";

let value: ActiveDelegatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  rewardAddresses: [
    "<value>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 2277.59,
  endTimestamp: 4103.01,
  estimatedGrossReward: "<value>",
  estimatedNetReward: "<value>",
  delegationStatus: "active",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `txHash`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nodeId`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `rewardAddresses`                                                                                                      | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `amountDelegated`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `delegationFee`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startTimestamp`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `endTimestamp`                                                                                                         | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `estimatedGrossReward`                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `estimatedNetReward`                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `delegationStatus`                                                                                                     | [components.ActiveDelegatorDetailsDelegationStatus](../../models/components/activedelegatordetailsdelegationstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |