# Delegators

## Example Usage

```typescript
import { Delegators } from "@avalabs/avacloud-sdk/models/components";

let value: Delegators = {
  txHash: "<value>",
  nodeId: "<value>",
  rewardAddresses: [
    "<value>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 2532.91,
  endTimestamp: 4143.69,
  estimatedGrossReward: "<value>",
  estimatedNetReward: "<value>",
  delegationStatus: "pending",
};
```

## Supported Types

### `components.ActiveDelegatorDetails`

```typescript
const value: components.ActiveDelegatorDetails = /* values here */
```

### `components.PendingDelegatorDetails`

```typescript
const value: components.PendingDelegatorDetails = /* values here */
```

### `components.CompletedDelegatorDetails`

```typescript
const value: components.CompletedDelegatorDetails = /* values here */
```

