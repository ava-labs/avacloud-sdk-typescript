# PChainTransaction

## Example Usage

```typescript
import { PChainTransaction } from "@avalabs/avalanche-sdk/models/components";

let value: PChainTransaction = {
    txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
    txType: "UNKNOWN",
    blockTimestamp: 1648672486,
    blockNumber: "<value>",
    blockHash: "<value>",
    consumedUtxos: [
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
            amount: "248.75",
            assetId: "<value>",
            blockNumber: "<value>",
            blockTimestamp: 7561.07,
            outputIndex: 5761.57,
            txHash: "<value>",
            utxoType: "STAKE",
        },
    ],
    emittedUtxos: [
        {
            addresses: ["avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw"],
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
            amount: "896.04",
            assetId: "<value>",
            blockNumber: "<value>",
            blockTimestamp: 5722.52,
            outputIndex: 6389.21,
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
    subnetOwnershipInfo: {
        locktime: 0,
        threshold: 1,
        addresses: ["avax1qm2a25eytsrj235hxg6jc0mwk99tss64eqevsw"],
    },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `txHash`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | A P-Chain transaction hash.                                                                                                                                     | 3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP                                                                                                               |
| `txType`                                                                                                                                                        | [components.PChainTransactionType](../../models/components/pchaintransactiontype.md)                                                                            | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `blockTimestamp`                                                                                                                                                | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The block finality timestamp.                                                                                                                                   | 1648672486                                                                                                                                                      |
| `blockNumber`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `blockHash`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `consumedUtxos`                                                                                                                                                 | [components.PChainUtxo](../../models/components/pchainutxo.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `emittedUtxos`                                                                                                                                                  | [components.PChainUtxo](../../models/components/pchainutxo.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `sourceChain`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Source chain for an atomic transaction.                                                                                                                         | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                                                                                              |
| `destinationChain`                                                                                                                                              | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Destination chain for an atomic transaction.                                                                                                                    | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                                                                                              |
| `value`                                                                                                                                                         | [components.AssetAmount](../../models/components/assetamount.md)[]                                                                                              | :heavy_check_mark:                                                                                                                                              | A list of objects containing P-chain Asset basic info and the amount of that Asset ID.                                                                          |                                                                                                                                                                 |
| `amountBurned`                                                                                                                                                  | [components.AssetAmount](../../models/components/assetamount.md)[]                                                                                              | :heavy_check_mark:                                                                                                                                              | A list of objects containing P-chain Asset basic info and the amount of that Asset ID.                                                                          |                                                                                                                                                                 |
| `amountStaked`                                                                                                                                                  | [components.AssetAmount](../../models/components/assetamount.md)[]                                                                                              | :heavy_check_mark:                                                                                                                                              | A list of objects containing P-chain Asset basic info and the amount of that Asset ID. Present for AddValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx |                                                                                                                                                                 |
| `startTimestamp`                                                                                                                                                | *number*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for AddValidatorTx, AddSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx                                                                  |                                                                                                                                                                 |
| `endTimestamp`                                                                                                                                                  | *number*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for AddValidatorTx, AddSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx                                                                  |                                                                                                                                                                 |
| `delegationFeePercent`                                                                                                                                          | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for AddValidatorTx, AddPermissionlessValidatorTx                                                                                                        |                                                                                                                                                                 |
| `nodeId`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for AddValidatorTx, AddSubnetValidatorTx, RemoveSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx                                         |                                                                                                                                                                 |
| `subnetId`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for AddValidatorTx, AddSubnetValidatorTx, RemoveSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx, CreateChainTx, CreateSubnetTx          |                                                                                                                                                                 |
| `estimatedReward`                                                                                                                                               | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for AddValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx                                                                                        |                                                                                                                                                                 |
| `rewardTxHash`                                                                                                                                                  | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `rewardAddresses`                                                                                                                                               | *string*[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `memo`                                                                                                                                                          | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `stakingTxHash`                                                                                                                                                 | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Present for RewardValidatorTx                                                                                                                                   |                                                                                                                                                                 |
| `subnetOwnershipInfo`                                                                                                                                           | [components.SubnetOwnershipInfo](../../models/components/subnetownershipinfo.md)                                                                                | :heavy_minus_sign:                                                                                                                                              | Subnet owner details for the CreateSubnetTx or TransferSubnetOwnershipTx                                                                                        |                                                                                                                                                                 |
| `blsCredentials`                                                                                                                                                | [components.BlsCredentials](../../models/components/blscredentials.md)                                                                                          | :heavy_minus_sign:                                                                                                                                              | Present for AddPermissionlessValidatorTx                                                                                                                        |                                                                                                                                                                 |