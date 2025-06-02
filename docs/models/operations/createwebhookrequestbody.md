# CreateWebhookRequestBody


## Supported Types

### `components.EVMAddressActivityRequest`

```typescript
const value: components.EVMAddressActivityRequest = {
  eventType: "address_activity",
  url: "https://scared-galoshes.name",
  chainId: "<id>",
  metadata: {
    addresses: [
      "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    ],
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
  },
};
```

### `components.PlatformActivityRequest`

```typescript
const value: components.PlatformActivityRequest = {
  eventType: "validator_activity",
  url: "https://self-reliant-scratch.com",
  chainId: "<id>",
  metadata: {
    keyType: "addresses",
    keys: [
      "<value>",
    ],
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
  },
};
```

