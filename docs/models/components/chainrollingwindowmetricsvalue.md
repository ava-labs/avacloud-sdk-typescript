# ChainRollingWindowMetricsValue

## Example Usage

```typescript
import { ChainRollingWindowMetricsValue } from "@avalabs/avacloud-sdk/models/components";

let value: ChainRollingWindowMetricsValue = {
  lastHour: 710.36,
  lastDay: 871.29,
  lastMonth: 202.18,
  lastYear: 8326.20,
  allTime: 7781.57,
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