# CreateWebhookRequestBody


## Supported Types

### `components.EVMAddressActivityRequest`

```typescript
const value: components.EVMAddressActivityRequest = {
  eventType: "address_activity",
  url: "https://buttery-couch.biz/",
  chainId: "<id>",
  metadata: {
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
    addresses: [
      "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    ],
  },
};
```

### `components.PrimaryNetworkAddressActivityRequest`

```typescript
const value: components.PrimaryNetworkAddressActivityRequest = {
  eventType: "primary_network_address_activity",
  url: "https://irresponsible-entry.name",
  network: "mainnet",
  chainId: "<id>",
  metadata: {
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
    keyType: "addresses",
    keys: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    subEvents: {
      addressActivitySubEvents: [
        "reward_distribution",
      ],
    },
  },
};
```

### `components.ValidatorActivityRequest`

```typescript
const value: components.ValidatorActivityRequest = {
  eventType: "validator_activity",
  url: "https://cultivated-archaeology.biz/",
  network: "fuji",
  metadata: {
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
    keyType: "nodeId",
    keys: [],
    subEvents: {
      validatorActivitySubEvents: [],
    },
  },
};
```

