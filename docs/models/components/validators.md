# Validators


## Supported Types

### `components.ActiveValidatorDetails`

```typescript
const value: components.ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 8811.03,
  endTimestamp: 5812.73,
  stakePercentage: 8817.35,
  delegatorCount: 6925.32,
  uptimePerformance: 7252.54,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 5013.24,
    benchedPChainRequestsPercent: 9560.84,
    benchedXChainRequestsPercent: 6439.90,
    benchedCChainRequestsPercent: 4238.55,
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
  startTimestamp: 6063.93,
  endTimestamp: 191.93,
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
  startTimestamp: 3015.75,
  endTimestamp: 6601.74,
  delegatorCount: 2900.78,
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
  startTimestamp: 6180.15,
  endTimestamp: 4287.69,
  removeTxHash: "<value>",
  removeTimestamp: 1354.74,
  validationStatus: "removed",
};
```

