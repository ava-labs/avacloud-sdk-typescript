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
                vertexHeight: 7742.34,
                vertexIndex: 7369.18,
                vertexTimestamp: 4561.5,
                txCount: 2165.5,
                transactions: ["<value>"],
                vertexSizeBytes: 5684.34,
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