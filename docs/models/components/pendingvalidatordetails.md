# PendingValidatorDetails

## Example Usage

```typescript
import { PendingValidatorDetails } from "@avalabs/avalanche-sdk/models/components";

let value: PendingValidatorDetails = {
    txHash: "<value>",
    nodeId: "<value>",
    subnetId: "<value>",
    amountStaked: "<value>",
    startTimestamp: 6169.34,
    endTimestamp: 3864.89,
    validationStatus: "pending",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `txHash`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `nodeId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `subnetId`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `amountStaked`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `delegationFee`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `endTimestamp`                                                                                                           | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `blsCredentials`                                                                                                         | [components.BlsCredentials](../../models/components/blscredentials.md)                                                   | :heavy_minus_sign:                                                                                                       | Present for AddPermissionlessValidatorTx                                                                                 |
| `validationStatus`                                                                                                       | [components.PendingValidatorDetailsValidationStatus](../../models/components/pendingvalidatordetailsvalidationstatus.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |