# CompletedValidatorDetails

## Example Usage

```typescript
import { CompletedValidatorDetails } from "@avalabs/avacloud-sdk/models/components";

let value: CompletedValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 5378.27,
  endTimestamp: 6683.55,
  delegatorCount: 7443.98,
  rewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "completed",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `txHash`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `nodeId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subnetId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `amountStaked`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `delegationFee`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The percentage of total estimated delegator rewards allocated to validator nodes for supporting delegations. |
| `startTimestamp`                                                                                             | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `endTimestamp`                                                                                               | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `blsCredentials`                                                                                             | [components.BlsCredentials](../../models/components/blscredentials.md)                                       | :heavy_minus_sign:                                                                                           | Present for AddPermissionlessValidatorTx                                                                     |
| `delegatorCount`                                                                                             | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `amountDelegated`                                                                                            | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `rewards`                                                                                                    | [components.Rewards](../../models/components/rewards.md)                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `validationStatus`                                                                                           | [components.ValidationStatus](../../models/components/validationstatus.md)                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |