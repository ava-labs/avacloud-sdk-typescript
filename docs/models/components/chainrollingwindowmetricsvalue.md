# ChainRollingWindowMetricsValue

## Example Usage

```typescript
import { ChainRollingWindowMetricsValue } from "@avalabs/avacloud-sdk/models/components";

let value: ChainRollingWindowMetricsValue = {
    lastHour: 6235.64,
    lastDay: 6458.94,
    lastMonth: 3843.82,
    lastYear: 4375.87,
    allTime: 2975.34,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `lastHour`                                              | *number*                                                | :heavy_check_mark:                                      | Aggregated value for the current metrics in last hour.  |
| `lastDay`                                               | *number*                                                | :heavy_check_mark:                                      | Aggregated value for the current metrics in last day.   |
| `lastMonth`                                             | *number*                                                | :heavy_check_mark:                                      | Aggregated value for the current metrics in last month. |
| `lastYear`                                              | *number*                                                | :heavy_check_mark:                                      | Aggregated value for the current metrics in last year.  |
| `allTime`                                               | *number*                                                | :heavy_check_mark:                                      | Aggregated value for the current metrics for all time.  |