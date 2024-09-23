# GetUtxosByAddressesResponseBody

Successful response

## Example Usage

```typescript
import { GetUtxosByAddressesResponseBody } from "@avalabs/avacloud-sdk/models/operations";

let value: GetUtxosByAddressesResponseBody = {
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
        type: "secp256k1",
        amount: "5001000",
      },
      consumedOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      consumingTxHash: "3j9JpF1aGuQtLLbo3YkvvKkWrCZViXZjdeJQWUSEY5hcqUn2c",
      createdOnChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
      utxoId: "68vLva9kfKUsX88ZPM8jdbf8qHUZRoZSFH6NdpAVTspkfrXDC",
      amount: "589.70",
      assetId: "<value>",
      blockNumber: "<value>",
      blockTimestamp: 7453.98,
      outputIndex: 8481.50,
      txHash: "<value>",
      utxoType: "TRANSFER",
    },
  ],
  chainInfo: {
    chainName: "c-chain",
    network: "mainnet",
  },
};
```

## Supported Types

### `components.ListPChainUtxosResponse`

```typescript
const value: components.ListPChainUtxosResponse = /* values here */
```

### `components.ListUtxosResponse`

```typescript
const value: components.ListUtxosResponse = /* values here */
```

