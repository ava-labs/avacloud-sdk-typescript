# ERCTransfer

## Example Usage

```typescript
import { ERCTransfer } from "@avalabs/avacloud-sdk/models/components";

let value: ERCTransfer = {
  transactionHash:
    "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
  type: "ERC20",
  from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
  to: "0x40E832C3Df9562DfaE5A86A4849F27F687A9B46B",
  value: "3331009129",
  tokenId: "2",
  blockTimestamp: 1640995200,
  logIndex: 5,
  erc20Token: {
    address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    name: "TetherToken",
    symbol: "USDt",
    decimals: 6,
    valueWithDecimals: "3331.009129",
  },
  erc721Token: {
    address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    name: "TetherToken",
    symbol: "USDt",
    decimals: 6,
    valueWithDecimals: "3331.009129",
  },
  erc1155Token: {
    address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    name: "TetherToken",
    symbol: "USDt",
    decimals: 6,
    valueWithDecimals: "3331.009129",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `transactionHash`                                                  | *string*                                                           | :heavy_check_mark:                                                 | Transaction hash                                                   | 0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8 |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Transfer type                                                      | ERC20                                                              |
| `from`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Sender address                                                     | 0x737F6b0b8A04e8462d0fC7076451298F0dA9a972                         |
| `to`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Recipient address                                                  | 0x40E832C3Df9562DfaE5A86A4849F27F687A9B46B                         |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | Amount transferred                                                 | 3331009129                                                         |
| `tokenId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | Token Id                                                           | 2                                                                  |
| `blockTimestamp`                                                   | *number*                                                           | :heavy_check_mark:                                                 | Block timestamp                                                    | 1640995200                                                         |
| `logIndex`                                                         | *number*                                                           | :heavy_check_mark:                                                 | Log index                                                          | 5                                                                  |
| `erc20Token`                                                       | [components.ERCToken](../../models/components/erctoken.md)         | :heavy_minus_sign:                                                 | erc20 Token details                                                |                                                                    |
| `erc721Token`                                                      | [components.ERCToken](../../models/components/erctoken.md)         | :heavy_minus_sign:                                                 | erc721 Token details                                               |                                                                    |
| `erc1155Token`                                                     | [components.ERCToken](../../models/components/erctoken.md)         | :heavy_minus_sign:                                                 | erc1155 Token details                                              |                                                                    |