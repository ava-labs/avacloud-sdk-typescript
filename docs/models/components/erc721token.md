# Erc721Token

## Example Usage

```typescript
import { Erc721Token } from "@avalabs/avalanche-sdk/models/components";

let value: Erc721Token = {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    ercType: "ERC-721",
    tokenId: "<value>",
    tokenUri: "<value>",
    metadata: {
        indexStatus: "UNREACHABLE_TOKEN_URI",
    },
    ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `address`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | A wallet or contract address in mixed-case checksum encoding.                    | 0x71C7656EC7ab88b098defB751B7401B5f6d8976F                                       |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The contract name.                                                               | Wrapped AVAX                                                                     |
| `symbol`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | The contract symbol.                                                             | WAVAX                                                                            |
| `ercType`                                                                        | [components.ErcType](../../models/components/erctype.md)                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `tokenId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `tokenUri`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `metadata`                                                                       | [components.Erc721TokenMetadata](../../models/components/erc721tokenmetadata.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `ownerAddress`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A wallet or contract address in mixed-case checksum encoding.                    | 0x71C7656EC7ab88b098defB751B7401B5f6d8976F                                       |