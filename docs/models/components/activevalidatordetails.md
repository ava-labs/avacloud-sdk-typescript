# ActiveValidatorDetails

## Example Usage

```typescript
import { ActiveValidatorDetails } from "@avalabs/avacloud-sdk/models/components";

let value: ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<value>",
  subnetId: "<value>",
  amountStaked: "<value>",
  startTimestamp: 1289.26,
  endTimestamp: 7506.86,
  stakePercentage: 3154.28,
  delegatorCount: 6078.31,
  uptimePerformance: 3637.11,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 3250.47,
    benchedPChainRequestsPercent: 5701.97,
    benchedXChainRequestsPercent: 384.25,
    benchedCChainRequestsPercent: 4386.01,
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
| `delegationFee`                                                                                                        | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `startTimestamp`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `endTimestamp`                                                                                                         | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `blsCredentials`                                                                                                       | [components.BlsCredentials](../../models/components/blscredentials.md)                                                 | :heavy_minus_sign:                                                                                                     | Present for AddPermissionlessValidatorTx                                                                               |
| `stakePercentage`                                                                                                      | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `delegatorCount`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `amountDelegated`                                                                                                      | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `uptimePerformance`                                                                                                    | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `avalancheGoVersion`                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `delegationCapacity`                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `potentialRewards`                                                                                                     | [components.Rewards](../../models/components/rewards.md)                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `validationStatus`                                                                                                     | [components.ActiveValidatorDetailsValidationStatus](../../models/components/activevalidatordetailsvalidationstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `validatorHealth`                                                                                                      | [components.ValidatorHealthDetails](../../models/components/validatorhealthdetails.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |