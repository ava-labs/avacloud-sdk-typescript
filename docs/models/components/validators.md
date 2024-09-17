# Validators

## Example Usage

```typescript
import { Validators } from "@avalabs/avacloud-sdk/models/components";

let value: Validators = {
  txHash: "<value>",
  nodeId: "<value>",
  subnetId: "<value>",
  amountStaked: "<value>",
  startTimestamp: 6667.67,
  endTimestamp: 6531.4,
  removeTxHash: "<value>",
  removeTimestamp: 6706.38,
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

