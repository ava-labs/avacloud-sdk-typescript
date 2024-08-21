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
                vertexHeight: 6874.88,
                vertexIndex: 4834.09,
                vertexTimestamp: 2155.07,
                txCount: 7887.4,
                transactions: ["<value>"],
                vertexSizeBytes: 9473.71,
            },
        ],
        chainInfo: {
            chainName: "p-chain",
            network: "fuji",
        },
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListXChainVerticesResponse](../../models/components/listxchainverticesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |