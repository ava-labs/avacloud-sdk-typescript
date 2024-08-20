# GetNetworkDetailsRequest

## Example Usage

```typescript
import { GetNetworkDetailsRequest } from "@avalabs/avalanche-sdk/models/operations";

let value: GetNetworkDetailsRequest = {
    network: "mainnet",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `network`                                                | [components.Network](../../models/components/network.md) | :heavy_check_mark:                                       | Either mainnet or a testnet.                             | mainnet                                                  |