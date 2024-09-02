# PChainAddressDetails

## Example Usage

```typescript
import { PChainAddressDetails } from "@avalabs/avacloud-sdk/models/components";

let value: PChainAddressDetails = {
    addresses: ["avax1abcdef1234567890abcdef1234567890abcdef"],
    sortKey: "123",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `addresses`                                                                | *string*[]                                                                 | :heavy_check_mark:                                                         | A list of P-Chain addresses.                                               | [<br/>"avax1abcdef1234567890abcdef1234567890abcdef"<br/>]                  |
| `sortKey`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Route dependent value associated with an address at a given point in time. | 123                                                                        |