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
        startTimestamp: 5258.09,
        endTimestamp: 1418.17,
        stakePercentage: 3167.31,
        delegatorCount: 6267.06,
        uptimePerformance: 7275.44,
        potentialRewards: {
          validationRewardAmount: "<value>",
          delegationRewardAmount: "<value>",
        },
        validationStatus: "active",
        validatorHealth: {
          reachabilityPercent: 242.73,
          benchedPChainRequestsPercent: 4301.16,
          benchedXChainRequestsPercent: 6521.25,
          benchedCChainRequestsPercent: 8532.46,
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