# ListActivePrimaryNetworkStakingTransactionsResponse

## Example Usage

```typescript
import { ListActivePrimaryNetworkStakingTransactionsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListActivePrimaryNetworkStakingTransactionsResponse = {
  result: {
    transactions: [
      {
        txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
        txType: "ExportTx",
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
            consumingTxHash:
              "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
            createdOnChainId:
              "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
            utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
            amount: "20.95",
            assetId: "<id>",
            blockNumber: "<value>",
            blockTimestamp: 4116.16,
            outputIndex: 4894.59,
            txHash: "<value>",
            utxoType: "STAKE",
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
              type: "nft",
              amount: "5001000",
            },
            consumedOnChainId:
              "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
            consumingTxHash:
              "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
            createdOnChainId:
              "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
            utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
            amount: "753.24",
            assetId: "<id>",
            blockNumber: "<value>",
            blockTimestamp: 2358.34,
            outputIndex: 6205.00,
            txHash: "<value>",
            utxoType: "TRANSFER",
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
            type: "nft",
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
            type: "secp256k1",
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
      chainName: "p-chain",
      network: "mainnet",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ListPChainTransactionsResponse](../../models/components/listpchaintransactionsresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |