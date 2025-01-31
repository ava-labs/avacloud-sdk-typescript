# Validators


## Supported Types

### `components.ActiveValidatorDetails`

```typescript
const value: components.ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 9413.78,
  endTimestamp: 7992.03,
  stakePercentage: 6304.48,
  delegatorCount: 8742.88,
  uptimePerformance: 2930.2,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 8489.44,
    benchedPChainRequestsPercent: 6178.77,
    benchedXChainRequestsPercent: 132.36,
    benchedCChainRequestsPercent: 3472.33,
  },
};
```

### `components.PendingValidatorDetails`

```typescript
const value: components.PendingValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 1481.41,
  endTimestamp: 9818.3,
  validationStatus: "pending",
};
```

### `components.CompletedValidatorDetails`

```typescript
const value: components.CompletedValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 4783.7,
  endTimestamp: 4973.91,
  delegatorCount: 6394.73,
  rewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "completed",
};
```

### `components.RemovedValidatorDetails`

```typescript
const value: components.RemovedValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 3685.84,
  endTimestamp: 1369,
  removeTxHash: "<value>",
  removeTimestamp: 8221.18,
  validationStatus: "removed",
};
```

