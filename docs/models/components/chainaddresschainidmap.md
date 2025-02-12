# ChainAddressChainIdMap

## Example Usage

```typescript
import { ChainAddressChainIdMap } from "@avalabs/avacloud-sdk/models/components";

let value: ChainAddressChainIdMap = {
  address: "1376 Rath Estate",
  blockchainIds: [
    "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `address`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `blockchainIds`                                                        | [components.BlockchainIds](../../models/components/blockchainids.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |