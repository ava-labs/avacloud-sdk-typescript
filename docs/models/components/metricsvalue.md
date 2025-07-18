# MetricsValue

## Example Usage

```typescript
import { MetricsValue } from "@avalabs/avacloud-sdk/models/components";

let value: MetricsValue = {
  value: 5945.62,
  timestamp: 7531.57,
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                                              | *number*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Aggregated value for the current metrics.                                                                                                                            |
| `timestamp`                                                                                                                                                          | *number*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Unix Epoch timestamp for which metrics are aggregated. Depending on the interval of the metric this can be at the start of the relevant hour, day, month, year, etc. |