# GetNetworkDetailsResponse

## Example Usage

```typescript
import { GetNetworkDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: GetNetworkDetailsResponse = {
    validatorDetails: {
        validatorCount: 1496.75,
        totalAmountStaked: "<value>",
        estimatedAnnualStakingReward: "<value>",
        stakingDistributionByVersion: [
            {
                version: "<value>",
                amountStaked: "<value>",
                validatorCount: 6120.96,
            },
        ],
        stakingRatio: "<value>",
    },
    delegatorDetails: {
        delegatorCount: 2223.21,
        totalAmountStaked: "<value>",
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `validatorDetails`                                                           | [components.ValidatorsDetails](../../models/components/validatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `delegatorDetails`                                                           | [components.DelegatorsDetails](../../models/components/delegatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |