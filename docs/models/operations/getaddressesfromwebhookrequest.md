# GetAddressesFromWebhookRequest

## Example Usage

```typescript
import { GetAddressesFromWebhookRequest } from "@avalabs/avalanche-sdk/models/operations";

let value: GetAddressesFromWebhookRequest = {
    pageSize: 10,
    id: "f33de69c-d13b-4691-908f-870d6e2e6b04",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | A page token, received from a previous list call. Provide this to retrieve the subsequent page. |                                                                                                 |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100. | 10                                                                                              |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | The webhook identifier.                                                                         | f33de69c-d13b-4691-908f-870d6e2e6b04                                                            |