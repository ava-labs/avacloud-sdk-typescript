# GetSingleValidatorDetailsResponse

## Example Usage

```typescript
import { GetSingleValidatorDetailsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetSingleValidatorDetailsResponse = {
  result: {
    validators: [
      {
        txHash: "<value>",
        nodeId: "<id>",
        subnetId: "<id>",
        amountStaked: "<value>",
        startTimestamp: 8151.99,
        endTimestamp: 2176.63,
        delegatorCount: 9738.19,
        rewards: {
          validationRewardAmount: "<value>",
          delegationRewardAmount: "<value>",
        },
        validationStatus: "completed",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListValidatorDetailsResponse](../../models/components/listvalidatordetailsresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |