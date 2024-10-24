# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@avalabs/avacloud-sdk/models/components";

let value: CreateWebhookRequest = {
  url: "https://pure-nerve.name/",
  chainId: "<id>",
  eventType: "address_activity",
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

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `chainId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `eventType`                                                  | [components.EventType](../../models/components/eventtype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `metadata`                                                   | *components.CreateWebhookRequestMetadata*                    | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `includeInternalTxs`                                         | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to include traces in the webhook payload.            |
| `includeLogs`                                                | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to include logs in the webhook payload.              |