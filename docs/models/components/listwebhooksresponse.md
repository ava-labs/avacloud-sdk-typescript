# ListWebhooksResponse

## Example Usage

```typescript
import { ListWebhooksResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListWebhooksResponse = {
    webhooks: [
        {
            id: "<id>",
            eventType: "address_activity",
            metadata: {
                addresses: ["0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"],
                eventSignatures: [
                    "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
                ],
            },
            url: "https://ornery-antechamber.net",
            chainId: "<value>",
            status: "active",
            createdAt: 5000.26,
            name: "<value>",
            description: "Pre-emptive 6th generation leverage",
        },
    ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `webhooks`                                                                                                                             | [components.WebhookResponse](../../models/components/webhookresponse.md)[]                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |