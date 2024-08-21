# Validators

## Example Usage

```typescript
import { Validators } from "@avalabs/avalanche-sdk/models/components";

let value: Validators = {
    txHash: "<value>",
    nodeId: "<value>",
    subnetId: "<value>",
    amountStaked: "<value>",
    startTimestamp: 8651.03,
    endTimestamp: 2653.89,
    delegatorCount: 5089.69,
    rewards: {
        validationRewardAmount: "<value>",
        delegationRewardAmount: "<value>",
    },
    validationStatus: "completed",
};
```

## Supported Types

### `components.ActiveValidatorDetails`

```typescript
const value: components.ActiveValidatorDetails = /* values here */
```

### `components.PendingValidatorDetails`

```typescript
const value: components.PendingValidatorDetails = /* values here */
```

### `components.CompletedValidatorDetails`

```typescript
const value: components.CompletedValidatorDetails = /* values here */
```

### `components.RemovedValidatorDetails`

```typescript
const value: components.RemovedValidatorDetails = /* values here */
```

