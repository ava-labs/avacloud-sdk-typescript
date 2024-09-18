# AddressDetails

## Example Usage

```typescript
import { AddressDetails } from "@avalabs/avacloud-sdk/models/components";

let value: AddressDetails = {
  address: "0x1234567890abcdef1234567890abcdef123456789",
  sortKey: "123",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `address`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | An EVM address.                                                            | 0x1234567890abcdef1234567890abcdef123456789                                |
| `sortKey`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Route dependent value associated with an address at a given point in time. | 123                                                                        |