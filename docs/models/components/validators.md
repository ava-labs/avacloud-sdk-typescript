# Validators

## Example Usage

```typescript
import { Validators } from "@avalabs/avacloud-sdk/models/components";

let value: Validators = {
    txHash: "<value>",
    nodeId: "<value>",
    subnetId: "<value>",
    amountStaked: "<value>",
    startTimestamp: 9698.1,
    endTimestamp: 6667.67,
    stakePercentage: 6531.4,
    delegatorCount: 6706.38,
    uptimePerformance: 1709.09,
    potentialRewards: {
        validationRewardAmount: "<value>",
        delegationRewardAmount: "<value>",
    },
    validationStatus: "active",
    validatorHealth: {
        reachabilityPercent: 2103.82,
        benchedPChainRequestsPercent: 3581.52,
        benchedXChainRequestsPercent: 1289.26,
        benchedCChainRequestsPercent: 7506.86,
    },
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

