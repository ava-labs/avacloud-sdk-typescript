# Delegators


## Supported Types

### `components.ActiveDelegatorDetails`

```typescript
const value: components.ActiveDelegatorDetails = {
  txHash: "<value>",
  nodeId: "<id>",
  rewardAddresses: [
    "<value>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 4071.83,
  endTimestamp: 691.67,
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
    "<value>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 6974.29,
  endTimestamp: 4535.43,
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
    "<value>",
  ],
  amountDelegated: "<value>",
  delegationFee: "<value>",
  startTimestamp: 7220.56,
  endTimestamp: 8663.82,
  grossReward: "<value>",
  netReward: "<value>",
  delegationStatus: "completed",
};
```

