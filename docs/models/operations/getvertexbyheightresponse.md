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
        vertexHeight: 8451.54,
        vertexIndex: 3827.64,
        vertexTimestamp: 247.69,
        txCount: 8310.31,
        transactions: [
          "<value>",
        ],
        vertexSizeBytes: 6605.36,
      },
    ],
    chainInfo: {
      chainName: "p-chain",
      network: "mainnet",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListXChainVerticesResponse](../../models/components/listxchainverticesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |