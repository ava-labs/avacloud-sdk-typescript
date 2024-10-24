# AllTimeNativeBalanceQueryDto

## Example Usage

```typescript
import { AllTimeNativeBalanceQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AllTimeNativeBalanceQueryDto = {
  id: "<id>",
  type: "AllTimeNativeBalance",
  params: {
    firstDate: "<value>",
    lastDate: "<value>",
    minBalance: "<value>",
    evmChainId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.Type](../../models/components/type.md)                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `params`                                                                                   | [components.DateRangeMinBalanceParam](../../models/components/daterangeminbalanceparam.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |