# AnyTimeErc20BalanceQueryDto

## Example Usage

```typescript
import { AnyTimeErc20BalanceQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AnyTimeErc20BalanceQueryDto = {
  id: "<id>",
  type: "AnyTimeErc20Balance",
  params: {
    firstDate: "<value>",
    lastDate: "<value>",
    minBalance: "<value>",
    evmChainId: "<value>",
    contractAddress: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [components.AnyTimeErc20BalanceQueryDtoType](../../models/components/anytimeerc20balancequerydtotype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `params`                                                                                                 | [components.DateRangeErc20MinBalanceParam](../../models/components/daterangeerc20minbalanceparam.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |