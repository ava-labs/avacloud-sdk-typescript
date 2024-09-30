# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  orgId: "<id>",
  metrics: [
    {
      timestamp: 2400.20,
      values: [
        {
          groupedBy: "requestPath",
          totalRequests: 7963.91,
          requestsPerSecond: 9591.67,
          successRatePercent: 4581.39,
          medianResponseTimeMsecs: 5909.84,
          invalidRequests: 8577.23,
          apiCreditsUsed: 4572.23,
          apiCreditsWasted: 9518.74,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `aggregateDuration`                                      | *string*                                                 | :heavy_check_mark:                                       | Duration in which the metrics value is aggregated        |
| `orgId`                                                  | *string*                                                 | :heavy_check_mark:                                       | Org ID for which the metrics are aggregated              |
| `metrics`                                                | [components.Metric](../../models/components/metric.md)[] | :heavy_check_mark:                                       | Metrics values                                           |