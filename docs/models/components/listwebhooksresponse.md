# ListWebhooksResponse

## Example Usage

```typescript
import { ListWebhooksResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListWebhooksResponse = {
  webhooks: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `webhooks`                                                                                                                             | *components.Webhooks*[]                                                                                                                | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |