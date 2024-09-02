# Transfers

## Example Usage

```typescript
import { Transfers } from "@avalabs/avacloud-sdk/models/components";

let value: Transfers = {
    blockNumber: "339",
    blockTimestamp: 1648672486,
    blockHash: "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
    txHash: "0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4",
    from: {
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        decimals: 18,
        logoUri:
            "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    },
    to: {
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        decimals: 18,
        logoUri:
            "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    },
    logIndex: 6070.45,
    erc721Token: {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        ercType: "ERC-721",
        tokenId: "<value>",
        tokenUri: "<value>",
        metadata: {
            indexStatus: "INDEXED",
        },
        ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    },
};
```

## Supported Types

### `components.Erc20Transfer`

```typescript
const value: components.Erc20Transfer = /* values here */
```

### `components.Erc721Transfer`

```typescript
const value: components.Erc721Transfer = /* values here */
```

### `components.Erc1155Transfer`

```typescript
const value: components.Erc1155Transfer = /* values here */
```

