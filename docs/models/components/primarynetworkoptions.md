# PrimaryNetworkOptions

## Example Usage

```typescript
import { PrimaryNetworkOptions } from "@avalabs/avacloud-sdk/models/components";

let value: PrimaryNetworkOptions = {
  includeChains: [
    "p-chain",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `addresses`                                                            | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `cChainEvmAddresses`                                                   | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `includeChains`                                                        | [components.IncludeChains](../../models/components/includechains.md)[] | :heavy_check_mark:                                                     | N/A                                                                    | [<br/>"p-chain"<br/>]                                                  |