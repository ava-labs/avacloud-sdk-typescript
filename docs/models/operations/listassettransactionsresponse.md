# ListAssetTransactionsResponse

## Example Usage

```typescript
import { ListAssetTransactionsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListAssetTransactionsResponse = {
    result: {
        transactions: [],
        chainInfo: {
            chainName: "c-chain",
            network: "mainnet",
        },
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ListXChainTransactionsResponse](../../models/components/listxchaintransactionsresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |