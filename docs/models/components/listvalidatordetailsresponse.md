# ListValidatorDetailsResponse

## Example Usage

```typescript
import { ListValidatorDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListValidatorDetailsResponse = {
  validators: [
    {
      txHash: "<value>",
      nodeId: "<id>",
      subnetId: "<id>",
      amountStaked: "<value>",
      startTimestamp: 4420.36,
      endTimestamp: 5199.52,
      stakePercentage: 6939.57,
      delegatorCount: 908.85,
      uptimePerformance: 2277.59,
      potentialRewards: {
        validationRewardAmount: "<value>",
        delegationRewardAmount: "<value>",
      },
      validationStatus: "active",
      validatorHealth: {
        reachabilityPercent: 4103.01,
        benchedPChainRequestsPercent: 6232.95,
        benchedXChainRequestsPercent: 8869.61,
        benchedCChainRequestsPercent: 6188.26,
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `validators`                                                                                                                           | *components.Validators*[]                                                                                                              | :heavy_check_mark:                                                                                                                     | The list of validator Details.                                                                                                         |