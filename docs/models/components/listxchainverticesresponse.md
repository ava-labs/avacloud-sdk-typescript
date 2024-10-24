# ListXChainVerticesResponse

## Example Usage

```typescript
import { ListXChainVerticesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListXChainVerticesResponse = {
  vertices: [
    {
      vertexHash: "<value>",
      parentHashes: [
        "<value>",
      ],
      vertexHeight: 353.62,
      vertexIndex: 4304.02,
      vertexTimestamp: 5100.17,
      txCount: 5361.77,
      transactions: [
        "<value>",
      ],
      vertexSizeBytes: 6813.93,
    },
  ],
  chainInfo: {
    chainName: "p-chain",
    network: "mainnet",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `vertices`                                                                                                                             | [components.XChainVertex](../../models/components/xchainvertex.md)[]                                                                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |