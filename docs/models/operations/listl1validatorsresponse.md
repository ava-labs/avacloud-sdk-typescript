# ListL1ValidatorsResponse

## Example Usage

```typescript
import { ListL1ValidatorsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListL1ValidatorsResponse = {
  result: {
    validators: [
      {
        validationId: "<id>",
        nodeId: "<id>",
        subnetId: "<id>",
        weight: 4849.66,
        remainingBalance: 9011.62,
        creationTimestamp: 5546.45,
        blsCredentials: {},
        remainingBalanceOwner: {
          addresses: [
            "<value>",
          ],
          threshold: 8268.62,
        },
        deactivationOwner: {
          addresses: [
            "<value>",
          ],
          threshold: 7255.74,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListL1ValidatorsResponse](../../models/components/listl1validatorsresponse.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |