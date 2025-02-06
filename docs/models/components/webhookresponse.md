# WebhookResponse

## Example Usage

```typescript
import { WebhookResponse } from "@avalabs/avacloud-sdk/models/components";

let value: WebhookResponse = {
  id: "<id>",
  eventType: "address_activity",
  metadata: {
    addresses: [
      "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    ],
    eventSignatures: [
      "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
    ],
  },
  url: "https://thick-jungle.biz",
  chainId: "<id>",
  status: "inactive",
  createdAt: 1293.55,
  name: "<value>",
  description: "ew airmail abaft until against however",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `eventType`                                                                  | [components.EventType](../../models/components/eventtype.md)                 | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | *components.WebhookResponseMetadata*                                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `includeInternalTxs`                                                         | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether to include traces in the webhook payload.                            |
| `includeLogs`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether to include logs in the webhook payload.                              |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `chainId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [components.WebhookStatusType](../../models/components/webhookstatustype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |