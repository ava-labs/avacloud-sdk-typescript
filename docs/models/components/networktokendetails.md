# NetworkTokenDetails

## Example Usage

```typescript
import { NetworkTokenDetails } from "@avalabs/avalanche-sdk/models/components";

let value: NetworkTokenDetails = {
    networkToken: {
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        decimals: 18,
        logoUri:
            "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    },
    currentPrice: {
        currencyCode: "usd",
        value: 42.42,
    },
    historicalPrice: {
        currencyCode: "usd",
        value: 42.42,
    },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `networkToken`                                                                                                                                               | [components.NetworkToken](../../models/components/networktoken.md)                                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currentPrice`                                                                                                                                               | [components.Money](../../models/components/money.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                           | The current token price, if available.                                                                                                                       |
| `historicalPrice`                                                                                                                                            | [components.Money](../../models/components/money.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                           | The historical token price at the time the transaction occured, if available. Note, this is only provided if the transaction occured more than 24 hours ago. |