# Delegators


## Supported Types

### `components.ActiveDelegatorDetails`

```typescript
const value: components.ActiveDelegatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  rewardAddresses: [
    "<value 1>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 1058.92,
  endTimestamp: 337.36,
  estimatedGrossReward: "<value>",
  estimatedNetReward: "<value>",
  delegationStatus: "active",
};
```

### `components.PendingDelegatorDetails`

```typescript
const value: components.PendingDelegatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  rewardAddresses: [
    "<value 1>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 5278.42,
  endTimestamp: 9478.17,
  estimatedGrossReward: "<value>",
  estimatedNetReward: "<value>",
  delegationStatus: "pending",
};
```

### `components.CompletedDelegatorDetails`

```typescript
const value: components.CompletedDelegatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  rewardAddresses: [
    "<value 1>",
    "<value 2>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 6019.22,
  endTimestamp: 5820.57,
  grossReward: "<value>",
  netReward: "<value>",
  delegationStatus: "completed",
};
```

