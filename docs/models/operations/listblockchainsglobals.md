# ListBlockchainsGlobals

## Example Usage

```typescript
import { ListBlockchainsGlobals } from "@avalabs/avacloud-sdk/models/operations";

let value: ListBlockchainsGlobals = {
  network: "mainnet",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `network`                                                                      | [components.GlobalParamNetwork](../../models/components/globalparamnetwork.md) | :heavy_minus_sign:                                                             | A supported network type mainnet or testnet/fuji.                              | mainnet                                                                        |