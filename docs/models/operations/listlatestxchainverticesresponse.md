# ListLatestXChainVerticesResponse

## Example Usage

```typescript
import { ListLatestXChainVerticesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListLatestXChainVerticesResponse = {
    result: {
        vertices: [
            {
                vertexHash: "<value>",
                parentHashes: ["<value>"],
                vertexHeight: 4635.75,
                vertexIndex: 2148.8,
                vertexTimestamp: 2776.28,
                txCount: 1864.58,
                transactions: ["<value>"],
                vertexSizeBytes: 5867.84,
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