# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 8155.24,
  values: [
    {
      groupedBy: "requestPath",
      totalRequests: 6288.98,
      requestsPerSecond: 3984.34,
      successRatePercent: 627.13,
      medianResponseTimeMsecs: 4240.32,
      invalidRequests: 2586.84,
      apiCreditsUsed: 8490.38,
      apiCreditsWasted: 333.05,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |