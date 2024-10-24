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
        vertexHeight: 411.80,
        vertexIndex: 8164.21,
        vertexTimestamp: 8075.64,
        txCount: 510.07,
        transactions: [
          "<value>",
        ],
        vertexSizeBytes: 6271.61,
      },
    ],
    chainInfo: {
      chainName: "x-chain",
      network: "mainnet",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListXChainVerticesResponse](../../models/components/listxchainverticesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |