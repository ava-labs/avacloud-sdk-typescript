# ListWebhookAddressesResponse

## Example Usage

```typescript
import { ListWebhookAddressesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListWebhookAddressesResponse = {
  addresses: [
    "<value>",
  ],
  totalAddresses: 4402.64,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `addresses`                                                                                                                            | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `totalAddresses`                                                                                                                       | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |