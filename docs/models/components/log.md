# Log

## Example Usage

```typescript
import { Log } from "@avalabs/avacloud-sdk/models/components";

let value: Log = {
  address: "0x54C800d2331E10467143911aabCa092d68bF4166",
  topic0: "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
  topic1: "0x0000000000000000000000000000333883f313ad709f583d0a3d2e18a44ef29b",
  topic2: "0x0000000000000000000000000000000000000000000000000000000000000000",
  topic3: "0x0000000000000000000000000000000000000000000000000000000000001350",
  data: "0x",
  transactionIndex: 2,
  logIndex: 10,
  removed: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `address`                                                          | *string*                                                           | :heavy_check_mark:                                                 | Contract address                                                   | 0x54C800d2331E10467143911aabCa092d68bF4166                         |
| `topic0`                                                           | *string*                                                           | :heavy_check_mark:                                                 | First topic                                                        | 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925 |
| `topic1`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Second topic (optional)                                            | 0x0000000000000000000000000000333883f313ad709f583d0a3d2e18a44ef29b |
| `topic2`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Third topic (optional)                                             | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| `topic3`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Fourth topic (optional)                                            | 0x0000000000000000000000000000000000000000000000000000000000001350 |
| `data`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Event data                                                         | 0x                                                                 |
| `transactionIndex`                                                 | *number*                                                           | :heavy_check_mark:                                                 | Transaction index                                                  | 2                                                                  |
| `logIndex`                                                         | *number*                                                           | :heavy_check_mark:                                                 | Log index                                                          | 10                                                                 |
| `removed`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | Indicates if the log was removed                                   | false                                                              |