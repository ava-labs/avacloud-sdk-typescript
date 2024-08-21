# PostTransactionExportJobRequestBody

## Example Usage

```typescript
import { PostTransactionExportJobRequestBody } from "@avalabs/avalanche-sdk/models/operations";

let value: PostTransactionExportJobRequestBody = {
    type: "TRANSACTION_EXPORT_EVM",
    firstDate: "2023-05-01",
    lastDate: "2023-05-02",
    startDate: "2023-05-01",
    endDate: "2023-05-02",
    options: {
        addresses: ["<value>"],
        includeChains: ["43114"],
    },
};
```

## Supported Types

### `components.CreateEvmTransactionExportRequest`

```typescript
const value: components.CreateEvmTransactionExportRequest = /* values here */
```

### `components.CreatePrimaryNetworkTransactionExportRequest`

```typescript
const value: components.CreatePrimaryNetworkTransactionExportRequest = /* values here */
```

