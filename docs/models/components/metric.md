# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 635.53,
  values: [
    {
      groupedBy: "responseCode",
      totalRequests: 9323.94,
      requestsPerSecond: 2153.98,
      successRatePercent: 8583.38,
      medianResponseTimeMsecs: 8028.94,
      invalidRequests: 1591.46,
      apiCreditsUsed: 6057.12,
      apiCreditsWasted: 1156.61,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |