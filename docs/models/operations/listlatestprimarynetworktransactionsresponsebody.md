# ListLatestPrimaryNetworkTransactionsResponseBody

Successful response


## Supported Types

### `components.ListPChainTransactionsResponse`

```typescript
const value: components.ListPChainTransactionsResponse = {
  transactions: [
    {
      txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
      txType: "ExportTx",
      blockTimestamp: 1648672486,
      blockNumber: "<value>",
      blockHash: "<value>",
      consumedUtxos: [],
      emittedUtxos: [],
      sourceChain: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      destinationChain: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      value: [
        {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "secp256k1",
          amount: "5001000",
        },
      ],
      amountBurned: [],
      amountStaked: [],
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

### `components.ListXChainTransactionsResponse`

```typescript
const value: components.ListXChainTransactionsResponse = {
  transactions: [],
  chainInfo: {
    chainName: "c-chain",
    network: "mainnet",
  },
};
```

### `components.ListCChainAtomicTransactionsResponse`

```typescript
const value: components.ListCChainAtomicTransactionsResponse = {
  transactions: [
    {
      txHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
      blockHeight: 1005,
      blockHash:
        "0x57a5cb7704561d1d59bd563b6421021b7563960c05ba3ae0e36fc36917c742ee",
      timestamp: 1600762738,
      memo: "0x546865204176616c616e6368652050726f6a656374",
      amountUnlocked: [],
      amountCreated: [
        {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "nft",
          amount: "5001000",
        },
      ],
      sourceChain: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      destinationChain: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      txType: "ExportTx",
      evmInputs: [
        {
          fromAddress: "0xD0f2898e49d941D6d479B381d3C8F0bd8d983b4c",
          asset: {
            assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
            name: "Avalanche",
            symbol: "AVAX",
            denomination: 9,
            type: "nft",
            amount: "5001000",
          },
          credentials: [],
        },
      ],
      emittedUtxos: [],
    },
  ],
  chainInfo: {
    chainName: "c-chain",
    network: "mainnet",
  },
};
```

