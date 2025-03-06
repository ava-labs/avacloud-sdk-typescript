# GetNetworkDetailsResponse

## Example Usage

```typescript
import { GetNetworkDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: GetNetworkDetailsResponse = {
  validatorDetails: {
    validatorCount: 8953.86,
    totalAmountStaked: "<value>",
    estimatedAnnualStakingReward: "<value>",
    stakingDistributionByVersion: [
      {
        version: "<value>",
        amountStaked: "<value>",
        validatorCount: 9677.95,
      },
    ],
    stakingRatio: "<value>",
  },
  delegatorDetails: {
    delegatorCount: 5468.85,
    totalAmountStaked: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `validatorDetails`                                                           | [components.ValidatorsDetails](../../models/components/validatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `delegatorDetails`                                                           | [components.DelegatorsDetails](../../models/components/delegatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |