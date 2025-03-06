# XChainVertex

## Example Usage

```typescript
import { XChainVertex } from "@avalabs/avacloud-sdk/models/components";

let value: XChainVertex = {
  vertexHash: "<value>",
  parentHashes: [
    "<value>",
  ],
  vertexHeight: 3182.33,
  vertexIndex: 8587.78,
  vertexTimestamp: 4585.03,
  txCount: 4445.87,
  transactions: [
    "<value>",
  ],
  vertexSizeBytes: 3361.02,
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