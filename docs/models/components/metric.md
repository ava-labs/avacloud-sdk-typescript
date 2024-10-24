# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 6360.61,
  values: [
    {
      groupedBy: "responseCode",
      totalRequests: 1605.39,
      requestsPerSecond: 7963.91,
      successRatePercent: 9591.67,
      medianResponseTimeMsecs: 4581.39,
      invalidRequests: 5909.84,
      apiCreditsUsed: 8577.23,
      apiCreditsWasted: 4572.23,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |