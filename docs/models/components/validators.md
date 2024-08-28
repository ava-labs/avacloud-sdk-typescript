# Validators

## Example Usage

```typescript
import { Validators } from "@avalabs/avacloud-sdk/models/components";

let value: Validators = {
    txHash: "<value>",
    nodeId: "<value>",
    subnetId: "<value>",
    amountStaked: "<value>",
    startTimestamp: 7586.16,
    endTimestamp: 5218.48,
    removeTxHash: "<value>",
    removeTimestamp: 1059.07,
    validationStatus: "removed",
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

