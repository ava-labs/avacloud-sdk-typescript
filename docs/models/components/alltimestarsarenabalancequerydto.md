# AllTimeStarsArenaBalanceQueryDto

## Example Usage

```typescript
import { AllTimeStarsArenaBalanceQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AllTimeStarsArenaBalanceQueryDto = {
    id: "<id>",
    type: "AllTimeStarsArenaBalance",
    params: {
        firstDate: "<value>",
        lastDate: "<value>",
        minBalance: "<value>",
        subjectAddress: "<value>",
    },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.AllTimeStarsArenaBalanceQueryDtoType](../../models/components/alltimestarsarenabalancequerydtotype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `params`                                                                                                           | [components.DateRangeStarsArenaMinBalanceParam](../../models/components/daterangestarsarenaminbalanceparam.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |