# ValidatorsDetails

## Example Usage

```typescript
import { ValidatorsDetails } from "@avalabs/avacloud-sdk/models/components";

let value: ValidatorsDetails = {
  validatorCount: 9437.49,
  totalAmountStaked: "<value>",
  estimatedAnnualStakingReward: "<value>",
  stakingDistributionByVersion: [
    {
      version: "<value>",
      amountStaked: "<value>",
      validatorCount: 9025.99,
    },
  ],
  stakingRatio: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `validatorCount`                                                                   | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `totalAmountStaked`                                                                | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `estimatedAnnualStakingReward`                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `stakingDistributionByVersion`                                                     | [components.StakingDistribution](../../models/components/stakingdistribution.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `stakingRatio`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |