# Tokens

## Example Usage

```typescript
import { Tokens } from "@avalabs/avalanche-sdk/models/components";

let value: Tokens = {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    ercType: "ERC-1155",
    tokenId: "<value>",
    tokenUri: "<value>",
    metadata: {
        indexStatus: "INVALID_TOKEN_URI",
    },
};
```

## Supported Types

### `components.Erc721Token`

```typescript
const value: components.Erc721Token = /* values here */
```

### `components.Erc1155Token`

```typescript
const value: components.Erc1155Token = /* values here */
```

