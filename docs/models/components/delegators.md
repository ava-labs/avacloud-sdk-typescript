# Delegators

## Example Usage

```typescript
import { Delegators } from "@avalabs/avalanche-sdk/models/components";

let value: Delegators = {
    txHash: "<value>",
    nodeId: "<value>",
    rewardAddresses: ["<value>"],
    amountDelegated: "<value>",
    delegationFee: "<value>",
    startTimestamp: 1649.4,
    endTimestamp: 8289.4,
    estimatedGrossReward: "<value>",
    estimatedNetReward: "<value>",
    delegationStatus: "active",
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

