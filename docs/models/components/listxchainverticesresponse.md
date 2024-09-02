# ListXChainVerticesResponse

## Example Usage

```typescript
import { ListXChainVerticesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListXChainVerticesResponse = {
    vertices: [
        {
            vertexHash: "<value>",
            parentHashes: ["<value>"],
            vertexHeight: 972.6,
            vertexIndex: 4358.65,
            vertexTimestamp: 9840.43,
            txCount: 8919.24,
            transactions: ["<value>"],
            vertexSizeBytes: 2603.41,
        },
    ],
    chainInfo: {
        chainName: "c-chain",
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