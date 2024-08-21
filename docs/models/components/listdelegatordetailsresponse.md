# ListDelegatorDetailsResponse

## Example Usage

```typescript
import { ListDelegatorDetailsResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListDelegatorDetailsResponse = {
    delegators: [
        {
            txHash: "<value>",
            nodeId: "<value>",
            rewardAddresses: ["<value>"],
            amountDelegated: "<value>",
            delegationFee: "<value>",
            startTimestamp: 46.95,
            endTimestamp: 1464.41,
            estimatedGrossReward: "<value>",
            estimatedNetReward: "<value>",
            delegationStatus: "pending",
        },
    ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `delegators`                                                                                                                           | *components.Delegators*[]                                                                                                              | :heavy_check_mark:                                                                                                                     | The list of Delegator Details.                                                                                                         |