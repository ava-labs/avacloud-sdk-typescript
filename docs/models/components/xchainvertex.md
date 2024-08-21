# XChainVertex

## Example Usage

```typescript
import { XChainVertex } from "@avalabs/avalanche-sdk/models/components";

let value: XChainVertex = {
    vertexHash: "<value>",
    parentHashes: ["<value>"],
    vertexHeight: 191.93,
    vertexIndex: 4701.32,
    vertexTimestamp: 3015.75,
    txCount: 7160.75,
    transactions: ["<value>"],
    vertexSizeBytes: 6601.74,
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