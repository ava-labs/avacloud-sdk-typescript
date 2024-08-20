# ListXChainVerticesResponse

## Example Usage

```typescript
import { ListXChainVerticesResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListXChainVerticesResponse = {
    vertices: [
        {
            vertexHash: "<value>",
            parentHashes: ["<value>"],
            vertexHeight: 2239.24,
            vertexIndex: 8745.73,
            vertexTimestamp: 3453.52,
            txCount: 9441.2,
            transactions: ["<value>"],
            vertexSizeBytes: 9280.82,
        },
    ],
    chainInfo: {
        chainName: "x-chain",
        network: "fuji",
    },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `vertices`                                                                                                                             | [components.XChainVertex](../../models/components/xchainvertex.md)[]                                                                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |