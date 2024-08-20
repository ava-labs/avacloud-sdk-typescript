# ListPChainTransactionsResponse

## Example Usage

```typescript
import { ListPChainTransactionsResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListPChainTransactionsResponse = {
    transactions: [],
    chainInfo: {
        chainName: "x-chain",
        network: "mainnet",
    },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `transactions`                                                                                                                         | [components.PChainTransaction](../../models/components/pchaintransaction.md)[]                                                         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |