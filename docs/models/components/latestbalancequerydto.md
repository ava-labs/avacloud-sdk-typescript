# LatestBalanceQueryDto

## Example Usage

```typescript
import { LatestBalanceQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: LatestBalanceQueryDto = {
  id: "<id>",
  type: "LatestBalance",
  params: {
    minBalance: "<value>",
    evmChainId: "<value>",
    tokenType: "NATIVE",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [components.LatestBalanceQueryDtoType](../../models/components/latestbalancequerydtotype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `params`                                                                                     | [components.LatestBalanceParams](../../models/components/latestbalanceparams.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |