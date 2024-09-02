# Delegators

## Example Usage

```typescript
import { Delegators } from "@avalabs/avacloud-sdk/models/components";

let value: Delegators = {
    txHash: "<value>",
    nodeId: "<value>",
    rewardAddresses: ["<value>"],
    amountDelegated: "<value>",
    delegationFee: "<value>",
    startTimestamp: 6235.1,
    endTimestamp: 1589.69,
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

