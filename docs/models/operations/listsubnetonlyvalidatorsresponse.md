# ListSubnetOnlyValidatorsResponse

## Example Usage

```typescript
import { ListSubnetOnlyValidatorsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListSubnetOnlyValidatorsResponse = {
  result: {
    validators: [
      {
        validationId: "<id>",
        nodeId: "<id>",
        subnetId: "<id>",
        weight: 8483.45,
        remainingBalance: 4904.20,
        creationTimestamp: 1853.49,
        blsCredentials: {},
        remainingBalanceOwner: {
          addresses: [
            "<value>",
          ],
          threshold: 9958.15,
        },
        deactivationOwner: {
          addresses: [
            "<value>",
          ],
          threshold: 1293.56,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListSubnetOnlyValidatorsResponse](../../models/components/listsubnetonlyvalidatorsresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |