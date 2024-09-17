# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 8411.4,
  values: [
    {
      groupedBy: "requestPath",
      totalRequests: 9046.48,
      requestsPerSecond: 8681.26,
      successRatePercent: 375.59,
      medianResponseTimeMsecs: 1624.93,
      invalidRequests: 5083.15,
      apiCreditsUsed: 6155.6,
      apiCreditsWasted: 1668.47,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |