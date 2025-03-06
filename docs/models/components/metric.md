# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 9325.62,
  values: [
    {
      groupedBy: "chainId",
      totalRequests: 2421.78,
      requestsPerSecond: 2503.98,
      successRatePercent: 4833.94,
      medianResponseTimeMsecs: 399.92,
      invalidRequests: 6397.05,
      apiCreditsUsed: 4083.03,
      apiCreditsWasted: 3774.06,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |