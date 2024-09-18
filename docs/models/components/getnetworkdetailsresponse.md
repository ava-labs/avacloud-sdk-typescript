# GetNetworkDetailsResponse

## Example Usage

```typescript
import { GetNetworkDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: GetNetworkDetailsResponse = {
  validatorDetails: {
    validatorCount: 6120.96,
    totalAmountStaked: "<value>",
    estimatedAnnualStakingReward: "<value>",
    stakingDistributionByVersion: [
      {
        version: "<value>",
        amountStaked: "<value>",
        validatorCount: 2223.21,
      },
    ],
    stakingRatio: "<value>",
  },
  delegatorDetails: {
    delegatorCount: 6169.34,
    totalAmountStaked: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `validatorDetails`                                                           | [components.ValidatorsDetails](../../models/components/validatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `delegatorDetails`                                                           | [components.DelegatorsDetails](../../models/components/delegatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |