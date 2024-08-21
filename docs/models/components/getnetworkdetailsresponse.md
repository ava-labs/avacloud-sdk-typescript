# GetNetworkDetailsResponse

## Example Usage

```typescript
import { GetNetworkDetailsResponse } from "@avalabs/avalanche-sdk/models/components";

let value: GetNetworkDetailsResponse = {
    validatorDetails: {
        validatorCount: 8700.88,
        totalAmountStaked: "<value>",
        estimatedAnnualStakingReward: "<value>",
        stakingDistributionByVersion: [
            {
                version: "<value>",
                amountStaked: "<value>",
                validatorCount: 9786.19,
            },
        ],
        stakingRatio: "<value>",
    },
    delegatorDetails: {
        delegatorCount: 4736.08,
        totalAmountStaked: "<value>",
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `validatorDetails`                                                           | [components.ValidatorsDetails](../../models/components/validatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `delegatorDetails`                                                           | [components.DelegatorsDetails](../../models/components/delegatorsdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |