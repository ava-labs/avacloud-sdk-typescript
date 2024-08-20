# Contracts

## Example Usage

```typescript
import { Contracts } from "@avalabs/avalanche-sdk/models/components";

let value: Contracts = {
    name: "Wrapped AVAX",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    deploymentDetails: {
        txHash: "<value>",
        deployerAddress: "<value>",
    },
    ercType: "UNKNOWN",
};
```

## Supported Types

### `components.Erc721Contract`

```typescript
const value: components.Erc721Contract = /* values here */
```

### `components.Erc1155Contract`

```typescript
const value: components.Erc1155Contract = /* values here */
```

### `components.Erc20Contract`

```typescript
const value: components.Erc20Contract = /* values here */
```

### `components.UnknownContract`

```typescript
const value: components.UnknownContract = /* values here */
```

