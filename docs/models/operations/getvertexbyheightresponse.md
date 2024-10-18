# GetVertexByHeightResponse

## Example Usage

```typescript
import { GetVertexByHeightResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetVertexByHeightResponse = {
  result: {
    vertices: [
      {
        vertexHash: "<value>",
        parentHashes: [
          "<value>",
        ],
        vertexHeight: 8268.05,
        vertexIndex: 1039.91,
        vertexTimestamp: 6339.82,
        txCount: 7510.32,
        transactions: [
          "<value>",
        ],
        vertexSizeBytes: 1559.78,
      },
    ],
    chainInfo: {
      chainName: "x-chain",
      network: "devnet",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListXChainVerticesResponse](../../models/components/listxchainverticesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |