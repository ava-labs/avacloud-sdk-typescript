# OperationStatusResponse

## Example Usage

```typescript
import { OperationStatusResponse } from "@avalabs/avacloud-sdk/models/components";

let value: OperationStatusResponse = {
  operationId: "<value>",
  operationType: "TRANSACTION_EXPORT_PRIMARY_NETWORK",
  operationStatus: "COMPLETED",
  metadata: {},
  createdAtTimestamp: 3637.11,
  updatedAtTimestamp: 5701.97,
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