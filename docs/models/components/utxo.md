# Utxo

## Example Usage

```typescript
import { Utxo } from "@avalabs/avalanche-sdk/models/components";

let value: Utxo = {
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
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `addresses`                                                                           | *string*[]                                                                            | :heavy_check_mark:                                                                    | Addresses that are eligible to sign the consumption of this output.                   | [<br/>"avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw"<br/>]                             |
| `asset`                                                                               | [components.AssetAmount](../../models/components/assetamount.md)                      | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `consumedOnChainId`                                                                   | *string*                                                                              | :heavy_check_mark:                                                                    | Blockchain ID on which this output is consumed on.                                    | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                    |
| `consumingTxHash`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | Transaction ID that consumed this output.                                             | 3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c                                     |
| `createdOnChainId`                                                                    | *string*                                                                              | :heavy_check_mark:                                                                    | Blockchain ID on which this output is created on.                                     | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                    |
| `utxoId`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | UTXO ID for this output.                                                              | 68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC                                     |
| `consumingTxTimestamp`                                                                | *number*                                                                              | :heavy_minus_sign:                                                                    | Unix timestamp in seconds at which this output was consumed.                          | 1599696000                                                                            |
| `creationTxHash`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | Transaction ID that created this output.                                              | FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z                                     |
| `credentials`                                                                         | [components.UtxoCredential](../../models/components/utxocredential.md)[]              | :heavy_minus_sign:                                                                    | Credentials that signed the transaction to consume this utxo                          |                                                                                       |
| `groupId`                                                                             | *number*                                                                              | :heavy_minus_sign:                                                                    | Index representing the minting set for the NFT mint output.                           |                                                                                       |
| `locktime`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | Locktime in seconds after which this output can be consumed.                          | 0                                                                                     |
| `outputIndex`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | Postion of this output in a list of lexiographically sorted outputs of a transaction. | 38                                                                                    |
| `payload`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | Hex encoded data for NFT assets.                                                      |                                                                                       |
| `threshold`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | Minimum number of signatures required to consume this output.                         | 1                                                                                     |
| `timestamp`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | Unix timestamp in seconds at which this outptut was created.                          | 1599696000                                                                            |
| `utxoType`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | Type of output.                                                                       | mint                                                                                  |