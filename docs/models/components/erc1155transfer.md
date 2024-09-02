# Erc1155Transfer

## Example Usage

```typescript
import { Erc1155Transfer } from "@avalabs/avacloud-sdk/models/components";

let value: Erc1155Transfer = {
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
    logIndex: 2224.43,
    value: "10000000000000000000",
    erc1155Token: {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        ercType: "ERC-1155",
        tokenId: "<value>",
        tokenUri: "<value>",
        metadata: {
            indexStatus: "INVALID_TOKEN_URI",
        },
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `blockNumber`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The block number on the chain.                                     | 339                                                                |
| `blockTimestamp`                                                   | *number*                                                           | :heavy_check_mark:                                                 | The block finality timestamp.                                      | 1648672486                                                         |
| `blockHash`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The block hash identifier.                                         | 0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c |
| `txHash`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The transaction hash identifier.                                   | 0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4 |
| `from`                                                             | [components.RichAddress](../../models/components/richaddress.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `to`                                                               | [components.RichAddress](../../models/components/richaddress.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `logIndex`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 10000000000000000000                                               |
| `erc1155Token`                                                     | [components.Erc1155Token](../../models/components/erc1155token.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |