# RemoveAddressesFromWebhookRequest

## Example Usage

```typescript
import { RemoveAddressesFromWebhookRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: RemoveAddressesFromWebhookRequest = {
  id: "f33de69c-d13b-4691-908f-870d6e2e6b04",
  addressesChangeRequest: {
    addresses: [
      "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The webhook identifier.                                                                | f33de69c-d13b-4691-908f-870d6e2e6b04                                                   |
| `addressesChangeRequest`                                                               | [components.AddressesChangeRequest](../../models/components/addresseschangerequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |