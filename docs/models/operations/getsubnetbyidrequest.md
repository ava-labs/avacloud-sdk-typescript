# GetSubnetByIdRequest

## Example Usage

```typescript
import { GetSubnetByIdRequest } from "@avalabs/avalanche-sdk/models/operations";

let value: GetSubnetByIdRequest = {
    subnetId: "11111111111111111111111111111111LpoYY",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `network`                                                | [components.Network](../../models/components/network.md) | :heavy_minus_sign:                                       | Either mainnet or a testnet.                             | mainnet                                                  |
| `subnetId`                                               | *string*                                                 | :heavy_check_mark:                                       | Subnet ID to fetch details for                           | 11111111111111111111111111111111LpoYY                    |