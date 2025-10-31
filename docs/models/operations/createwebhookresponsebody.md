# CreateWebhookResponseBody

Successful response


## Supported Types

### `components.EVMAddressActivityResponse`

```typescript
const value: components.EVMAddressActivityResponse = {
  id: "<id>",
  url: "https://another-marathon.name",
  chainId: "<id>",
  status: "inactive",
  createdAt: 4132.35,
  name: "<value>",
  description: "mantua duh minority since regarding nor tomography",
  eventType: "address_activity",
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

### `components.PrimaryNetworkAddressActivityResponse`

```typescript
const value: components.PrimaryNetworkAddressActivityResponse = {
  id: "<id>",
  url: "https://official-armoire.com",
  chainId: "<id>",
  status: "inactive",
  createdAt: 6715.74,
  name: "<value>",
  description: "yearly extremely feather whose er owlishly toward",
  eventType: "primary_network_address_activity",
  metadata: {
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
    keyType: "addresses",
    keys: [],
    subEvents: {
      addressActivitySubEvents: [
        "reward_distribution",
      ],
    },
  },
};
```

### `components.ValidatorActivityResponse`

```typescript
const value: components.ValidatorActivityResponse = {
  id: "<id>",
  url: "https://negative-apricot.info/",
  chainId: "<id>",
  status: "inactive",
  createdAt: 3981.87,
  name: "<value>",
  description: "propound astride guard where yowza",
  eventType: "validator_activity",
  metadata: {
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
    keyType: "subnetId",
    keys: [],
    subEvents: {
      validatorActivitySubEvents: [],
    },
  },
};
```

