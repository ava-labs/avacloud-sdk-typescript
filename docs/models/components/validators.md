# Validators


## Supported Types

### `components.ActiveValidatorDetails`

```typescript
const value: components.ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 2097.5,
  endTimestamp: 1157.03,
  stakePercentage: 5771.4,
  delegatorCount: 6952.7,
  uptimePerformance: 6719.57,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 9488.61,
    benchedPChainRequestsPercent: 27.03,
    benchedXChainRequestsPercent: 6471.97,
    benchedCChainRequestsPercent: 6003.92,
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
  startTimestamp: 5887.4,
  endTimestamp: 9627.71,
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
  startTimestamp: 168.71,
  endTimestamp: 6964.83,
  delegatorCount: 8136.79,
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
  startTimestamp: 5098.07,
  endTimestamp: 3339.65,
  removeTxHash: "<value>",
  removeTimestamp: 7908.4,
  validationStatus: "removed",
};
```

