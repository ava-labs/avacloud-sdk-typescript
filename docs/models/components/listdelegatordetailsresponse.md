# ListDelegatorDetailsResponse

## Example Usage

```typescript
import { ListDelegatorDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListDelegatorDetailsResponse = {
  delegators: [
    {
      txHash: "<value>",
      nodeId: "<id>",
      rewardAddresses: [
        "<value>",
      ],
      amountDelegated: "<value>",
      delegationFee: "<value>",
      startTimestamp: 568.48,
      endTimestamp: 6969.97,
      grossReward: "<value>",
      netReward: "<value>",
      delegationStatus: "completed",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `delegators`                                                                                                                           | *components.Delegators*[]                                                                                                              | :heavy_check_mark:                                                                                                                     | The list of Delegator Details.                                                                                                         |