# SupportedChainsRequest

## Example Usage

```typescript
import { SupportedChainsRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: SupportedChainsRequest = {
  network: "mainnet",
  feature: "nftIndexing",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `network`                                                                    | [components.NetworkType](../../models/components/networktype.md)             | :heavy_minus_sign:                                                           | mainnet or testnet.                                                          | mainnet                                                                      |
| `feature`                                                                    | [components.GlacierApiFeature](../../models/components/glacierapifeature.md) | :heavy_minus_sign:                                                           | Filter by feature.                                                           | nftIndexing                                                                  |