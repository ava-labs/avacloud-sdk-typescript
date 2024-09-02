# ListAssetTransactionsResponse

## Example Usage

```typescript
import { ListAssetTransactionsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListAssetTransactionsResponse = {
    result: {
        transactions: [],
        chainInfo: {
            chainName: "p-chain",
            network: "fuji",
        },
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ListXChainTransactionsResponse](../../models/components/listxchaintransactionsresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |