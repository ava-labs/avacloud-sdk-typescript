# EVMAddressActivityResponse

## Example Usage

```typescript
import { EVMAddressActivityResponse } from "@avalabs/avacloud-sdk/models/components";

let value: EVMAddressActivityResponse = {
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

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `chainId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [components.WebhookStatusType](../../models/components/webhookstatustype.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `eventType`                                                                                | [components.AddressActivityEventType](../../models/components/addressactivityeventtype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | [components.AddressActivityMetadata](../../models/components/addressactivitymetadata.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `includeInternalTxs`                                                                       | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether to include traces in the webhook payload.                                          |
| `includeLogs`                                                                              | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether to include logs in the webhook payload.                                            |