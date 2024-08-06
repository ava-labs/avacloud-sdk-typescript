# CreateWebhookRequest


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