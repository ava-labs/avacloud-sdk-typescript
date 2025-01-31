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
      startTimestamp: 5113.19,
      endTimestamp: 2243.17,
      stakePercentage: 978.44,
      delegatorCount: 8621.92,
      uptimePerformance: 9729.2,
      potentialRewards: {
        validationRewardAmount: "<value>",
        delegationRewardAmount: "<value>",
      },
      validationStatus: "active",
      validatorHealth: {
        reachabilityPercent: 9608.35,
        benchedPChainRequestsPercent: 9065.56,
        benchedXChainRequestsPercent: 7740.48,
        benchedCChainRequestsPercent: 3331.45,
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