# XChainVertex

## Example Usage

```typescript
import { XChainVertex } from "@avalabs/avacloud-sdk/models/components";

let value: XChainVertex = {
  vertexHash: "<value>",
  parentHashes: [
    "<value>",
  ],
  vertexHeight: 6900.25,
  vertexIndex: 6996.22,
  vertexTimestamp: 3277.20,
  txCount: 7567.79,
  transactions: [
    "<value>",
  ],
  vertexSizeBytes: 6360.61,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `vertexHash`       | *string*           | :heavy_check_mark: | N/A                |
| `parentHashes`     | *string*[]         | :heavy_check_mark: | N/A                |
| `vertexHeight`     | *number*           | :heavy_check_mark: | N/A                |
| `vertexIndex`      | *number*           | :heavy_check_mark: | N/A                |
| `vertexTimestamp`  | *number*           | :heavy_check_mark: | N/A                |
| `txCount`          | *number*           | :heavy_check_mark: | N/A                |
| `transactions`     | *string*[]         | :heavy_check_mark: | N/A                |
| `vertexSizeBytes`  | *number*           | :heavy_check_mark: | N/A                |