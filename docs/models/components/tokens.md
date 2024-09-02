# Tokens

## Example Usage

```typescript
import { Tokens } from "@avalabs/avacloud-sdk/models/components";

let value: Tokens = {
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    ercType: "ERC-1155",
    tokenId: "<value>",
    tokenUri: "<value>",
    metadata: {
        indexStatus: "METADATA_CONTENT_TOO_LARGE",
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

