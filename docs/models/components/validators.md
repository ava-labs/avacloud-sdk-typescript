# Validators

## Example Usage

```typescript
import { Validators } from "@avalabs/avalanche-sdk/models/components";

let value: Validators = {
    txHash: "<value>",
    nodeId: "<value>",
    subnetId: "<value>",
    amountStaked: "<value>",
    startTimestamp: 8804.76,
    endTimestamp: 4142.63,
    validationStatus: "pending",
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

