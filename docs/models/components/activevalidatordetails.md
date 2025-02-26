# ActiveValidatorDetails

## Example Usage

```typescript
import { ActiveValidatorDetails } from "@avalabs/avacloud-sdk/models/components";

let value: ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 5027.21,
  endTimestamp: 9223.48,
  stakePercentage: 5413.81,
  delegatorCount: 9233.06,
  uptimePerformance: 8298.98,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 9682.87,
    benchedPChainRequestsPercent: 9197.83,
    benchedXChainRequestsPercent: 360.33,
    benchedCChainRequestsPercent: 1747.72,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `txHash`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nodeId`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subnetId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `amountStaked`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `delegationFee`                                                                                                        | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The percentage of total estimated delegator rewards allocated to validator nodes for supporting delegations.           |
| `startTimestamp`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `endTimestamp`                                                                                                         | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `blsCredentials`                                                                                                       | [components.BlsCredentials](../../models/components/blscredentials.md)                                                 | :heavy_minus_sign:                                                                                                     | Present for AddPermissionlessValidatorTx                                                                               |
| `stakePercentage`                                                                                                      | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The percentage of this validator's stake amount to the total active stake.                                             |
| `delegatorCount`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The number of delegators linked to the validator.                                                                      |
| `amountDelegated`                                                                                                      | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The total amount in nAVAX delegated to the validator.                                                                  |
| `uptimePerformance`                                                                                                    | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The validator's uptime percentage, as observed by our internal node and measured over time.                            |
| `avalancheGoVersion`                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `delegationCapacity`                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The amount of stake in nAVAX that can be delegated to this validator.                                                  |
| `potentialRewards`                                                                                                     | [components.Rewards](../../models/components/rewards.md)                                                               | :heavy_check_mark:                                                                                                     | Estimated rewards for the validator if the validation is successful.                                                   |
| `validationStatus`                                                                                                     | [components.ActiveValidatorDetailsValidationStatus](../../models/components/activevalidatordetailsvalidationstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `validatorHealth`                                                                                                      | [components.ValidatorHealthDetails](../../models/components/validatorhealthdetails.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |