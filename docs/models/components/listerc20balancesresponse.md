# ListErc20BalancesResponse

## Example Usage

```typescript
import { ListErc20BalancesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListErc20BalancesResponse = {
    erc20TokenBalances: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `erc20TokenBalances`                                                                                                                   | [components.Erc20TokenBalance](../../models/components/erc20tokenbalance.md)[]                                                         | :heavy_check_mark:                                                                                                                     | The list of ERC-20 token balances for the address.                                                                                     |