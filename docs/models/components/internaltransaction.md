# InternalTransaction

## Example Usage

```typescript
import { InternalTransaction } from "@avalabs/avacloud-sdk/models/components";

let value: InternalTransaction = {
  from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
  to: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
  internalTxType: "call",
  value: "50000000000000000",
  gasUsed: "44038",
  gasLimit: "50000",
  transactionHash:
    "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `from`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Sender address                                                     | 0x737F6b0b8A04e8462d0fC7076451298F0dA9a972                         |
| `to`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Recipient address                                                  | 0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7                         |
| `internalTxType`                                                   | *string*                                                           | :heavy_check_mark:                                                 | Internal transaction type                                          | call                                                               |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | Value transferred                                                  | 50000000000000000                                                  |
| `gasUsed`                                                          | *string*                                                           | :heavy_check_mark:                                                 | Gas used                                                           | 44038                                                              |
| `gasLimit`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Gas limit                                                          | 50000                                                              |
| `transactionHash`                                                  | *string*                                                           | :heavy_check_mark:                                                 | Transaction hash                                                   | 0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8 |