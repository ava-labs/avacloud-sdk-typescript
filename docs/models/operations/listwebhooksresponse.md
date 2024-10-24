# ListWebhooksResponse

## Example Usage

```typescript
import { ListWebhooksResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListWebhooksResponse = {
  result: {
    webhooks: [
      {
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
        url: "https://crushing-hoof.org",
        chainId: "<id>",
        status: "active",
        createdAt: 180.96,
        name: "<value>",
        description: "so mmm onto joshingly whose buttery once",
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListWebhooksResponse](../../models/components/listwebhooksresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |