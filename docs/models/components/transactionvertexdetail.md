# TransactionVertexDetail

## Example Usage

```typescript
import { TransactionVertexDetail } from "@avalabs/avacloud-sdk/models/components";

let value: TransactionVertexDetail = {
  hash: "82qPRREHmh8Cfta4PGD6GymY9ZLyvgYugqW6hj9FykpMVRz1S",
  height: 1961,
  timestamp: 1600762738,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `hash`                                                   | *string*                                                 | :heavy_check_mark:                                       | Vertex ID of the vertex this transaction belongs to.     | 82qPRREHmh8Cfta4PGD6GymY9ZLyvgYugqW6hj9FykpMVRz1S        |
| `height`                                                 | *number*                                                 | :heavy_check_mark:                                       | Vertex height of the vertex this transaction belongs to. | 1961                                                     |
| `timestamp`                                              | *number*                                                 | :heavy_check_mark:                                       | Timestamp in seconds this vertex was accepted.           | 1600762738                                               |