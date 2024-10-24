# GetNetworkDetailsResponse

## Example Usage

```typescript
import { GetNetworkDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: GetNetworkDetailsResponse = {
  validatorDetails: {
    validatorCount: 2700.08,
    totalAmountStaked: "<value>",
    estimatedAnnualStakingReward: "<value>",
    stakingDistributionByVersion: [
      {
        version: "<value>",
        amountStaked: "<value>",
        validatorCount: 7351.94,
      },
    ],
    stakingRatio: "<value>",
  },
  delegatorDetails: {
    delegatorCount: 9621.89,
    totalAmountStaked: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `validatorDetails`                                                           | [components.ValidatorsDetails](../../models/components/validatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `delegatorDetails`                                                           | [components.DelegatorsDetails](../../models/components/delegatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |