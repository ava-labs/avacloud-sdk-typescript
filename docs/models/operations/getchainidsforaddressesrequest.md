# GetChainIdsForAddressesRequest

## Example Usage

```typescript
import { GetChainIdsForAddressesRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetChainIdsForAddressesRequest = {
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji". | avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg                                                                                         |
| `network`                                                                                                                           | [components.Network](../../models/components/network.md)                                                                            | :heavy_minus_sign:                                                                                                                  | Either mainnet or a testnet.                                                                                                        | mainnet                                                                                                                             |