# CompletedDelegatorDetails

## Example Usage

```typescript
import { CompletedDelegatorDetails } from "@avalabs/avacloud-sdk/models/components";

let value: CompletedDelegatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  rewardAddresses: [
    "<value>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 6725.82,
  endTimestamp: 5289.4,
  grossReward: "<value>",
  netReward: "<value>",
  delegationStatus: "completed",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `txHash`                                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `nodeId`                                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `rewardAddresses`                                                                                                            | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `amountDelegated`                                                                                                            | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `delegationFee`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `startTimestamp`                                                                                                             | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `endTimestamp`                                                                                                               | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `grossReward`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Total rewards distributed for the successful delegation.                                                                     |
| `netReward`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Net rewards distributed to the delegator after deducting delegation fee from the gross reward for the successful delegation. |
| `delegationStatus`                                                                                                           | [components.DelegationStatus](../../models/components/delegationstatus.md)                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |