# ListErc20BalancesResponse

## Example Usage

```typescript
import { ListErc20BalancesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListErc20BalancesResponse = {
  nativeTokenBalance: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    chainId: "43114",
    price: {
      currencyCode: "usd",
      value: 42.42,
    },
    balance: "2000000000000000000",
    balanceValue: {
      currencyCode: "usd",
      value: 42.42,
    },
  },
  erc20TokenBalances: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `nativeTokenBalance`                                                                                                                   | [components.NativeTokenBalance](../../models/components/nativetokenbalance.md)                                                         | :heavy_check_mark:                                                                                                                     | The native token balance for the address.                                                                                              |
| `erc20TokenBalances`                                                                                                                   | [components.Erc20TokenBalance](../../models/components/erc20tokenbalance.md)[]                                                         | :heavy_check_mark:                                                                                                                     | The list of ERC-20 token balances for the address.                                                                                     |