# ListPChainTransactionsResponse

## Example Usage

```typescript
import { ListPChainTransactionsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListPChainTransactionsResponse = {
  transactions: [
    {
      txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
      txType: "SetL1ValidatorWeightTx",
      blockTimestamp: 1648672486,
      blockNumber: "<value>",
      blockHash: "<value>",
      consumedUtxos: [
        {
          addresses: [
            "avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw",
          ],
          asset: {
            assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
            name: "Avalanche",
            symbol: "AVAX",
            denomination: 9,
            type: "secp256k1",
            amount: "5001000",
          },
          consumedOnChainId:
            "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
          consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
          createdOnChainId:
            "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
          utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
          amount: "271.25",
          assetId: "<id>",
          blockNumber: "<value>",
          blockTimestamp: 4037.93,
          outputIndex: 3998.12,
          txHash: "<value>",
          utxoType: "TRANSFER",
        },
      ],
      emittedUtxos: [
        {
          addresses: [
            "avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw",
          ],
          asset: {
            assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
            name: "Avalanche",
            symbol: "AVAX",
            denomination: 9,
            type: "secp256k1",
            amount: "5001000",
          },
          consumedOnChainId:
            "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
          consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
          createdOnChainId:
            "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
          utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
          amount: "713.77",
          assetId: "<id>",
          blockNumber: "<value>",
          blockTimestamp: 6391.87,
          outputIndex: 3991.61,
          txHash: "<value>",
          utxoType: "STAKE",
        },
      ],
      sourceChain: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      destinationChain: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      value: [
        {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "nft",
          amount: "5001000",
        },
      ],
      amountBurned: [
        {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "secp256k1",
          amount: "5001000",
        },
      ],
      amountStaked: [
        {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "nft",
          amount: "5001000",
        },
      ],
      amountL1ValidatorBalanceBurned: [
        {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "nft",
          amount: "5001000",
        },
      ],
      subnetOwnershipInfo: {
        locktime: 0,
        threshold: 1,
        addresses: [
          "avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw",
        ],
      },
    },
  ],
  chainInfo: {
    chainName: "c-chain",
    network: "mainnet",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `transactions`                                                                                                                         | [components.PChainTransaction](../../models/components/pchaintransaction.md)[]                                                         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `chainInfo`                                                                                                                            | [components.PrimaryNetworkChainInfo](../../models/components/primarynetworkchaininfo.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |