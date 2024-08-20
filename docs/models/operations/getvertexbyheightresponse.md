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
                vertexHeight: 3241.41,
                vertexIndex: 6176.36,
                vertexTimestamp: 1496.75,
                txCount: 6120.96,
                transactions: ["<value>"],
                vertexSizeBytes: 2223.21,
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