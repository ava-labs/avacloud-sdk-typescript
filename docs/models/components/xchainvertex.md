# XChainVertex

## Example Usage

```typescript
import { XChainVertex } from "@avalabs/avalanche-sdk/models/components";

let value: XChainVertex = {
    vertexHash: "<value>",
    parentHashes: ["<value>"],
    vertexHeight: 2378.93,
    vertexIndex: 9923.97,
    vertexTimestamp: 9342.14,
    txCount: 2672.62,
    transactions: ["<value>"],
    vertexSizeBytes: 6139.66,
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