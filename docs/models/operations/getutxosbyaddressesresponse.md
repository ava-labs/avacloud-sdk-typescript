# GetUtxosByAddressesResponse

## Example Usage

```typescript
import { GetUtxosByAddressesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetUtxosByAddressesResponse = {
  result: {
    utxos: [
      {
        addresses: [
          "avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw",
        ],
        asset: {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "nft",
          amount: "5001000",
        },
        consumedOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
        consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
        createdOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
        utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
        amount: "677.51",
        assetId: "<id>",
        blockNumber: "<value>",
        blockTimestamp: 9378.65,
        outputIndex: 6211.4,
        txHash: "<value>",
        utxoType: "STAKE",
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

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `result`                                     | *operations.GetUtxosByAddressesResponseBody* | :heavy_check_mark:                           | N/A                                          |