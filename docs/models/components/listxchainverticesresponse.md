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
      vertexHeight: 5100.17,
      vertexIndex: 5361.77,
      vertexTimestamp: 6813.93,
      txCount: 2775.96,
      transactions: [
        "<value>",
      ],
      vertexSizeBytes: 1288.61,
    },
  ],
  chainInfo: {
    chainName: "x-chain",
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