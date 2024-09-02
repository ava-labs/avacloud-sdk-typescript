# GetVertexByHeightResponse

## Example Usage

```typescript
import { GetVertexByHeightResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetVertexByHeightResponse = {
    result: {
        vertices: [
            {
                vertexHash: "<value>",
                parentHashes: ["<value>"],
                vertexHeight: 5556.49,
                vertexIndex: 9295.3,
                vertexTimestamp: 92.4,
                txCount: 6699.17,
                transactions: ["<value>"],
                vertexSizeBytes: 8330.38,
            },
        ],
        chainInfo: {
            chainName: "c-chain",
            network: "fuji",
        },
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListXChainVerticesResponse](../../models/components/listxchainverticesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |