# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 163.29,
  values: [
    {
      groupedBy: "responseCode",
      totalRequests: 4012.60,
      requestsPerSecond: 9292.91,
      successRatePercent: 996.15,
      medianResponseTimeMsecs: 9453.02,
      invalidRequests: 8694.89,
      apiCreditsUsed: 4541.62,
      apiCreditsWasted: 3267.01,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |