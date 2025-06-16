# Validators


## Supported Types

### `components.ActiveValidatorDetails`

```typescript
const value: components.ActiveValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 9332.67,
  endTimestamp: 6572.88,
  stakePercentage: 6001.77,
  delegatorCount: 5325.15,
  uptimePerformance: 1851.65,
  potentialRewards: {
    validationRewardAmount: "<value>",
    delegationRewardAmount: "<value>",
  },
  validationStatus: "active",
  validatorHealth: {
    reachabilityPercent: 566.69,
    benchedPChainRequestsPercent: 5374.7,
    benchedXChainRequestsPercent: 3074.95,
    benchedCChainRequestsPercent: 4408.25,
  },
  geolocation: null,
};
```

### `components.PendingValidatorDetails`

```typescript
const value: components.PendingValidatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  subnetId: "<id>",
  amountStaked: "<value>",
  startTimestamp: 9843.29,
  endTimestamp: 5112.58,
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
  startTimestamp: 5378.27,
  endTimestamp: 6683.55,
  delegatorCount: 7443.98,
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
  startTimestamp: 1722.34,
  endTimestamp: 1657.27,
  removeTxHash: "<value>",
  removeTimestamp: 3786.23,
  validationStatus: "removed",
};
```

