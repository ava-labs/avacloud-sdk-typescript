# XChainVertex

## Example Usage

```typescript
import { XChainVertex } from "@avalabs/avalanche-sdk/models/components";

let value: XChainVertex = {
    vertexHash: "<value>",
    parentHashes: ["<value>"],
    vertexHeight: 5966.56,
    vertexIndex: 318.38,
    vertexTimestamp: 7836.45,
    txCount: 1646.94,
    transactions: ["<value>"],
    vertexSizeBytes: 5000.26,
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