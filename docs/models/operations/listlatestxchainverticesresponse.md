# ListLatestXChainVerticesResponse

## Example Usage

```typescript
import { ListLatestXChainVerticesResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListLatestXChainVerticesResponse = {
    result: {
        vertices: [
            {
                vertexHash: "<value>",
                parentHashes: ["<value>"],
                vertexHeight: 4254.51,
                vertexIndex: 7980.47,
                vertexTimestamp: 8853.38,
                txCount: 1856.36,
                transactions: ["<value>"],
                vertexSizeBytes: 6798.8,
            },
        ],
        chainInfo: {
            chainName: "c-chain",
            network: "mainnet",
        },
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListXChainVerticesResponse](../../models/components/listxchainverticesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |