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
        vertexHeight: 7008.56,
        vertexIndex: 9132.84,
        vertexTimestamp: 5245.77,
        txCount: 3542.25,
        transactions: [
          "<value>",
        ],
        vertexSizeBytes: 1202.77,
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