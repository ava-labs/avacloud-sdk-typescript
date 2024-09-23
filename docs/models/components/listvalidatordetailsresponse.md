# ListValidatorDetailsResponse

## Example Usage

```typescript
import { ListValidatorDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListValidatorDetailsResponse = {
  validators: [
    {
      txHash: "<value>",
      nodeId: "<value>",
      subnetId: "<value>",
      amountStaked: "<value>",
      startTimestamp: 2700.08,
      endTimestamp: 7351.94,
      delegatorCount: 9621.89,
      rewards: {
        validationRewardAmount: "<value>",
        delegationRewardAmount: "<value>",
      },
      validationStatus: "completed",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `validators`                                                                                                                           | *components.Validators*[]                                                                                                              | :heavy_check_mark:                                                                                                                     | The list of validator Details.                                                                                                         |