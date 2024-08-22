# ListActivePrimaryNetworkStakingTransactionsResponse

## Example Usage

```typescript
import { ListActivePrimaryNetworkStakingTransactionsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListActivePrimaryNetworkStakingTransactionsResponse = {
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
| `result`                                                                                               | [components.ListPChainTransactionsResponse](../../models/components/listpchaintransactionsresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |