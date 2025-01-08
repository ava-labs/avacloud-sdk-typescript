# GetBalancesByAddressesRequest

## Example Usage

```typescript
import { GetBalancesByAddressesRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetBalancesByAddressesRequest = {
  blockTimestamp: 1599696000,
  addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
  blockchainId: "p-chain",
  network: "mainnet",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `blockTimestamp`                                                                                                                    | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | An epoch timestamp in seconds. Balance will be calculated at this timestamp.                                                        | 1599696000                                                                                                                          |
| `addresses`                                                                                                                         | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji". | avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg                                                                                         |
| `blockchainId`                                                                                                                      | [components.BlockchainId](../../models/components/blockchainid.md)                                                                  | :heavy_check_mark:                                                                                                                  | A primary network blockchain id or alias.                                                                                           | p-chain                                                                                                                             |
| `network`                                                                                                                           | [components.GlobalParamNetwork](../../models/components/globalparamnetwork.md)                                                      | :heavy_minus_sign:                                                                                                                  | Either mainnet or testnet/fuji.                                                                                                     | mainnet                                                                                                                             |