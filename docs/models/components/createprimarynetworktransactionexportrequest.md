# CreatePrimaryNetworkTransactionExportRequest

## Example Usage

```typescript
import { CreatePrimaryNetworkTransactionExportRequest } from "@avalabs/avacloud-sdk/models/components";

let value: CreatePrimaryNetworkTransactionExportRequest = {
  type: "TRANSACTION_EXPORT_PRIMARY_NETWORK_STAKING",
  firstDate: "2023-05-01",
  lastDate: "2023-05-02",
  startDate: "2023-05-01",
  endDate: "2023-05-02",
  options: {
    includeChains: [
      "p-chain",
    ],
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                  | [components.PrimaryNetworkOperationType](../../models/components/primarynetworkoperationtype.md)                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `firstDate`                                                                                                             | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2023-05-01                                                                                                              |
| `lastDate`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2023-05-02                                                                                                              |
| ~~`startDate`~~                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. | 2023-05-01                                                                                                              |
| ~~`endDate`~~                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. | 2023-05-02                                                                                                              |
| `options`                                                                                                               | [components.PrimaryNetworkOptions](../../models/components/primarynetworkoptions.md)                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |