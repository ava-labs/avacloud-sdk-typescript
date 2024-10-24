# XChainLinearTransaction

## Example Usage

```typescript
import { XChainLinearTransaction } from "@avalabs/avacloud-sdk/models/components";

let value: XChainLinearTransaction = {
  txHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
  chainFormat: "non-linear",
  timestamp: 1600762738,
  txType: "ExportTx",
  memo: "0x546865204176616c616e6368652050726f6a656374",
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
      consumedOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
      createdOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
      consumingTxTimestamp: 1599696000,
      creationTxHash: "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",
      credentials: [
        {
          signature:
            "bWWoZUu0Z3STjuk/+2az7M4vP0oqc9NtiA7kOdqINCIE/2+5va5R1KNCWwEX5jE1xVHLvAxU2LHTN5gK8m84HwA",
          publicKey: "AdMQOtubgBFFJu++0faHPIIA6KmdZ2ERErMRGzyy6juI",
        },
      ],
      locktime: 0,
      outputIndex: "38",
      threshold: 1,
      timestamp: 1599696000,
      utxoType: "mint",
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
      consumedOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
      createdOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
      consumingTxTimestamp: 1599696000,
      creationTxHash: "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",
      credentials: [
        {
          signature:
            "bWWoZUu0Z3STjuk/+2az7M4vP0oqc9NtiA7kOdqINCIE/2+5va5R1KNCWwEX5jE1xVHLvAxU2LHTN5gK8m84HwA",
          publicKey: "AdMQOtubgBFFJu++0faHPIIA6KmdZ2ERErMRGzyy6juI",
        },
      ],
      locktime: 0,
      outputIndex: "38",
      threshold: 1,
      timestamp: 1599696000,
      utxoType: "mint",
    },
  ],
  amountUnlocked: [
    {
      assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
      name: "Avalanche",
      symbol: "AVAX",
      denomination: 9,
      type: "nft",
      amount: "5001000",
    },
  ],
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
  assetCreated: {
    assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
    name: "Avalanche",
    symbol: "AVAX",
    denomination: 9,
    type: "secp256k1",
    createdAtTimestamp: 1675444720,
    cap: "variable",
  },
  blockHeight: 1005,
  blockHash: "82qPRREHmh8Cfta4PGD6GymY9ZLyvgYugqW6hj9FykpMVRz1S",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `txHash`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Unique ID for this transaction.                                                                                   | 3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c                                                                 |
| `chainFormat`                                                                                                     | [components.XChainLinearTransactionChainFormat](../../models/components/xchainlineartransactionchainformat.md)    | :heavy_check_mark:                                                                                                | Represents chain format this transaction is included in.                                                          | non-linear                                                                                                        |
| `timestamp`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | Latest timestamp in seconds this transaction was accepted out of the same transaction accepted in other vertices. | 1600762738                                                                                                        |
| `txType`                                                                                                          | [components.XChainTransactionType](../../models/components/xchaintransactiontype.md)                              | :heavy_check_mark:                                                                                                | Type of transaction.                                                                                              |                                                                                                                   |
| `memo`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Hex encoded memo bytes for this transaction.                                                                      | 0x546865204176616c616e6368652050726f6a656374                                                                      |
| `consumedUtxos`                                                                                                   | [components.Utxo](../../models/components/utxo.md)[]                                                              | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `emittedUtxos`                                                                                                    | [components.Utxo](../../models/components/utxo.md)[]                                                              | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `amountUnlocked`                                                                                                  | [components.AssetAmount](../../models/components/assetamount.md)[]                                                | :heavy_check_mark:                                                                                                | Assets unlocked by inputs of this transaction.                                                                    |                                                                                                                   |
| `amountCreated`                                                                                                   | [components.AssetAmount](../../models/components/assetamount.md)[]                                                | :heavy_check_mark:                                                                                                | Assets created by outputs of this transaction.                                                                    |                                                                                                                   |
| `sourceChain`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Source chain for an atomic transaction.                                                                           | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                                                |
| `destinationChain`                                                                                                | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Destination chain for an atomic transaction.                                                                      | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                                                |
| `assetCreated`                                                                                                    | [components.XChainAssetDetails](../../models/components/xchainassetdetails.md)                                    | :heavy_minus_sign:                                                                                                | AssetAmount details of the asset created in CreateAssetTx                                                         |                                                                                                                   |
| `blockHeight`                                                                                                     | *number*                                                                                                          | :heavy_check_mark:                                                                                                | Height of the block this transaction belongs to.                                                                  | 1005                                                                                                              |
| `blockHash`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Hash of the block this transaction belongs to.                                                                    | 82qPRREHmh8Cfta4PGD6GymY9ZLyvgYugqW6hj9FykpMVRz1S                                                                 |