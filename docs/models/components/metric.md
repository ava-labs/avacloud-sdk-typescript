# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 3277.20,
  values: [
    {
      groupedBy: "requestType",
      totalRequests: 6360.61,
      requestsPerSecond: 2400.20,
      successRatePercent: 1605.39,
      medianResponseTimeMsecs: 7963.91,
      invalidRequests: 9591.67,
      apiCreditsUsed: 4581.39,
      apiCreditsWasted: 5909.84,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |