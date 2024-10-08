# NativeTokenBalance

## Example Usage

```typescript
import { NativeTokenBalance } from "@avalabs/avacloud-sdk/models/components";

let value: NativeTokenBalance = {
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
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The contract name.                                                                                                                    | Wrapped AVAX                                                                                                                          |
| `symbol`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The contract symbol.                                                                                                                  | WAVAX                                                                                                                                 |
| `decimals`                                                                                                                            | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The number of decimals the token uses. For example `6`, means to divide the token amount by `1000000` to get its user representation. | 18                                                                                                                                    |
| `logoUri`                                                                                                                             | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The logo uri for the address.                                                                                                         | https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg             |
| `chainId`                                                                                                                             | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The evm chain id.                                                                                                                     | 43114                                                                                                                                 |
| `price`                                                                                                                               | [components.Money](../../models/components/money.md)                                                                                  | :heavy_minus_sign:                                                                                                                    | The token price, if available.                                                                                                        |                                                                                                                                       |
| `balance`                                                                                                                             | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The address balance for the token, in units specified by the `decimals` value for the contract.                                       | 2000000000000000000                                                                                                                   |
| `balanceValue`                                                                                                                        | [components.Money](../../models/components/money.md)                                                                                  | :heavy_minus_sign:                                                                                                                    | The monetary value of the balance, if a price is available for the token.                                                             |                                                                                                                                       |