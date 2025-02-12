# OperationStatusResponse

## Example Usage

```typescript
import { OperationStatusResponse } from "@avalabs/avacloud-sdk/models/components";

let value: OperationStatusResponse = {
  operationId: "<id>",
  operationType: "TRANSACTION_EXPORT_EVM",
  operationStatus: "FAILED",
  metadata: {},
  createdAtTimestamp: 5468.85,
  updatedAtTimestamp: 2748.23,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `operationId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `operationType`                                                          | [components.OperationType](../../models/components/operationtype.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `operationStatus`                                                        | [components.OperationStatus](../../models/components/operationstatus.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | *components.Metadata*                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAtTimestamp`                                                     | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAtTimestamp`                                                     | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |