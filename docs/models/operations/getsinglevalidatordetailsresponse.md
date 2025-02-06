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
        startTimestamp: 3884.04,
        endTimestamp: 4862.72,
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