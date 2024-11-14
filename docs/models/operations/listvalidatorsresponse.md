# ListValidatorsResponse

## Example Usage

```typescript
import { ListValidatorsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListValidatorsResponse = {
  result: {
    validators: [
      {
        txHash: "<value>",
        nodeId: "<id>",
        subnetId: "<id>",
        amountStaked: "<value>",
        startTimestamp: 9536.76,
        endTimestamp: 5823.20,
        stakePercentage: 1074.73,
        delegatorCount: 2875.45,
        uptimePerformance: 4567.04,
        potentialRewards: {
          validationRewardAmount: "<value>",
          delegationRewardAmount: "<value>",
        },
        validationStatus: "active",
        validatorHealth: {
          reachabilityPercent: 209.50,
          benchedPChainRequestsPercent: 4116.16,
          benchedXChainRequestsPercent: 4894.59,
          benchedCChainRequestsPercent: 2436.78,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListValidatorDetailsResponse](../../models/components/listvalidatordetailsresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |