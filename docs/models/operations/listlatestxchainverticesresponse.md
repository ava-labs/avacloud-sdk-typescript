# ListLatestXChainVerticesResponse

## Example Usage

```typescript
import { ListLatestXChainVerticesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListLatestXChainVerticesResponse = {
  result: {
    vertices: [
      {
        vertexHash: "<value>",
        parentHashes: [
          "<value>",
        ],
        vertexHeight: 1397.45,
        vertexIndex: 3305.96,
        vertexTimestamp: 510.53,
        txCount: 3312.69,
        transactions: [
          "<value>",
        ],
        vertexSizeBytes: 3203.26,
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