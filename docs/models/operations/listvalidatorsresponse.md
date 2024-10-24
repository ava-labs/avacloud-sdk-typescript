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
        startTimestamp: 7186.26,
        endTimestamp: 3359.78,
        validationStatus: "pending",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListValidatorDetailsResponse](../../models/components/listvalidatordetailsresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |