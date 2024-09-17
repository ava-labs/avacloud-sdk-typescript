# GetTeleporterMessageResponseBody

Successful response

## Example Usage

```typescript
import { GetTeleporterMessageResponseBody } from "@avalabs/avacloud-sdk/models/operations";

let value: GetTeleporterMessageResponseBody = {
  messageId: "<value>",
  teleporterContractAddress: "<value>",
  sourceBlockchainId: "<value>",
  destinationBlockchainId: "<value>",
  sourceEvmChainId: "<value>",
  destinationEvmChainId: "<value>",
  messageNonce: "<value>",
  from: "<value>",
  to: "<value>",
  messageExecuted: false,
  receipts: [
    {
      receivedMessageNonce: "<value>",
      relayerRewardAddress: "<value>",
    },
  ],
  receiptDelivered: false,
  rewardDetails: {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    ercType: "ERC-20",
    price: {
      currencyCode: "usd",
      value: 42.42,
    },
    value: "<value>",
  },
  destinationTransaction: {
    txHash: "<value>",
    timestamp: 4861.6,
    gasSpent: "<value>",
    rewardRedeemer: "<value>",
    delivererAddress: "<value>",
  },
  status: "delivered_source_not_indexed",
};
```

## Supported Types

### `components.PendingTeleporterMessage`

```typescript
const value: components.PendingTeleporterMessage = /* values here */
```

### `components.DeliveredTeleporterMessage`

```typescript
const value: components.DeliveredTeleporterMessage = /* values here */
```

### `components.DeliveredSourceNotIndexedTeleporterMessage`

```typescript
const value: components.DeliveredSourceNotIndexedTeleporterMessage = /* values here */
```

