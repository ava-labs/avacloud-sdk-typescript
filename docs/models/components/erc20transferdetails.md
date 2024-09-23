# Erc20TransferDetails

## Example Usage

```typescript
import { Erc20TransferDetails } from "@avalabs/avacloud-sdk/models/components";

let value: Erc20TransferDetails = {
  from: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  to: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  logIndex: 3828.08,
  value: "10000000000000000000",
  erc20Token: {
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
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `from`                                                           | [components.RichAddress](../../models/components/richaddress.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `to`                                                             | [components.RichAddress](../../models/components/richaddress.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `logIndex`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `value`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | 10000000000000000000                                             |
| `erc20Token`                                                     | [components.Erc20Token](../../models/components/erc20token.md)   | :heavy_check_mark:                                               | N/A                                                              |                                                                  |