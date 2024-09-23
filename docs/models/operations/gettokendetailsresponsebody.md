# GetTokenDetailsResponseBody

Successful response

## Example Usage

```typescript
import { GetTokenDetailsResponseBody } from "@avalabs/avacloud-sdk/models/operations";

let value: GetTokenDetailsResponseBody = {
  address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  name: "Wrapped AVAX",
  symbol: "WAVAX",
  ercType: "ERC-721",
  tokenId: "<value>",
  tokenUri: "<value>",
  metadata: {
    indexStatus: "INVALID_TOKEN_URI",
  },
  ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
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

