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
        startTimestamp: 4355.31,
        endTimestamp: 7986.9,
        delegatorCount: 9234.56,
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