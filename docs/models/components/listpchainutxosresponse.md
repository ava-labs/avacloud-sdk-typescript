# ListPChainUtxosResponse

## Example Usage

```typescript
import { ListPChainUtxosResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListPChainUtxosResponse = {
    utxos: [
        {
            addresses: ["avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw"],
            asset: {
                assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
                name: "Avalanche",
                symbol: "AVAX",
                denomination: 9,
                type: "secp256k1",
                amount: "5001000",
            },
            consumedOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
            consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
            createdOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
            utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
            amount: "904.65",
            assetId: "<value>",
            blockNumber: "<value>",
            blockTimestamp: 8681.26,
            outputIndex: 375.59,
            txHash: "<value>",
            utxoType: "STAKE",
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
| `utxos`                                                                                                                                | [components.PChainUtxo](../../models/components/pchainutxo.md)[]                                                                       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |