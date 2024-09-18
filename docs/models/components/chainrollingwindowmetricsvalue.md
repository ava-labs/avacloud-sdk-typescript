# ChainRollingWindowMetricsValue

## Example Usage

```typescript
import { ChainRollingWindowMetricsValue } from "@avalabs/avacloud-sdk/models/components";

let value: ChainRollingWindowMetricsValue = {
  lastHour: 3843.82,
  lastDay: 4375.87,
  lastMonth: 2975.34,
  lastYear: 8917.73,
  allTime: 567.13,
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