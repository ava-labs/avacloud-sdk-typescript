# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 5757.51,
  values: [
    {
      groupedBy: "requestType",
      totalRequests: 9088.44,
      requestsPerSecond: 8155.24,
      successRatePercent: 1594.14,
      medianResponseTimeMsecs: 6288.98,
      invalidRequests: 3984.34,
      apiCreditsUsed: 627.13,
      apiCreditsWasted: 4240.32,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |