# Validators

## Example Usage

```typescript
import { Validators } from "@avalabs/avacloud-sdk/models/components";

let value: Validators = {
  txHash: "<value>",
  nodeId: "<value>",
  subnetId: "<value>",
  amountStaked: "<value>",
  startTimestamp: 201.08,
  endTimestamp: 8289.40,
  delegatorCount: 46.95,
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

