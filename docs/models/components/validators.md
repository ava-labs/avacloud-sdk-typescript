# Validators


## Supported Types

### `components.ActiveValidatorDetails`

```typescript
const value: components.ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 5249.7,
  endTimestamp: 7505.95,
  stakePercentage: 3335.07,
  delegatorCount: 9241.59,
  uptimePerformance: 8623.19,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 486.9,
    benchedPChainRequestsPercent: 2536.42,
    benchedXChainRequestsPercent: 4461.35,
    benchedCChainRequestsPercent: 1046.27,
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
  startTimestamp: 3484.76,
  endTimestamp: 7400.98,
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
  startTimestamp: 6805.15,
  endTimestamp: 6223.85,
  delegatorCount: 7105.29,
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
  startTimestamp: 2049.23,
  endTimestamp: 3416.98,
  removeTxHash: "<value>",
  removeTimestamp: 6762.43,
  validationStatus: "removed",
};
```

