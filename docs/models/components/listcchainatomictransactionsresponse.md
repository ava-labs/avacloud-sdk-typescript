# ListCChainAtomicTransactionsResponse

## Example Usage

```typescript
import { ListCChainAtomicTransactionsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListCChainAtomicTransactionsResponse = {
  transactions: [],
  chainInfo: {
    chainName: "p-chain",
    network: "fuji",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `transactions`                                                                                                                         | *components.ListCChainAtomicTransactionsResponseTransactions*[]                                                                        | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |