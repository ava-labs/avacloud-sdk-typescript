# ListErc20BalancesResponse

## Example Usage

```typescript
import { ListErc20BalancesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListErc20BalancesResponse = {
  result: {
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
    erc20TokenBalances: [
      {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        decimals: 18,
        logoUri:
          "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
        ercType: "ERC-20",
        price: {
          currencyCode: "usd",
          value: 42.42,
        },
        chainId: "43114",
        balance: "2000000000000000000",
        balanceValue: {
          currencyCode: "usd",
          value: 42.42,
        },
        tokenReputation: "Benign",
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListErc20BalancesResponse](../../models/components/listerc20balancesresponse.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |