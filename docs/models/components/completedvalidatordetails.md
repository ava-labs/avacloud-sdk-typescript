# CompletedValidatorDetails

## Example Usage

```typescript
import { CompletedValidatorDetails } from "@avalabs/avalanche-sdk/models/components";

let value: CompletedValidatorDetails = {
    txHash: "<value>",
    nodeId: "<value>",
    subnetId: "<value>",
    amountStaked: "<value>",
    startTimestamp: 4146.62,
    endTimestamp: 4736,
    delegatorCount: 2645.55,
    rewards: {
        validationRewardAmount: "<value>",
        delegationRewardAmount: "<value>",
    },
    validationStatus: "completed",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `txHash`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `nodeId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `subnetId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `amountStaked`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `delegationFee`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `startTimestamp`                                                           | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `endTimestamp`                                                             | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `blsCredentials`                                                           | [components.BlsCredentials](../../models/components/blscredentials.md)     | :heavy_minus_sign:                                                         | Present for AddPermissionlessValidatorTx                                   |
| `delegatorCount`                                                           | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rewards`                                                                  | [components.Rewards](../../models/components/rewards.md)                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `validationStatus`                                                         | [components.ValidationStatus](../../models/components/validationstatus.md) | :heavy_check_mark:                                                         | N/A                                                                        |