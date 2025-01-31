# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 9223.48,
  values: [
    {
      groupedBy: "apiKeyId",
      totalRequests: 9233.06,
      requestsPerSecond: 8298.98,
      successRatePercent: 9682.87,
      medianResponseTimeMsecs: 9197.83,
      invalidRequests: 360.33,
      apiCreditsUsed: 1747.72,
      apiCreditsWasted: 3891.35,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |