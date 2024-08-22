# GetVertexByHeightResponse

## Example Usage

```typescript
import { GetVertexByHeightResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: GetVertexByHeightResponse = {
    result: {
        vertices: [
            {
                vertexHash: "<value>",
                parentHashes: ["<value>"],
                vertexHeight: 7470.8,
                vertexIndex: 1175.31,
                vertexTimestamp: 6748.48,
                txCount: 5173.79,
                transactions: ["<value>"],
                vertexSizeBytes: 2768.94,
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