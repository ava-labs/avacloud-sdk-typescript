# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  orgId: "<value>",
  metrics: [
    {
      timestamp: 1811.51,
      values: [
        {
          groupedBy: "requestType",
          totalRequests: 568.48,
          requestsPerSecond: 6969.97,
          successRatePercent: 7786.95,
          medianResponseTimeMsecs: 7774.08,
          invalidRequests: 2594.23,
          apiCreditsUsed: 3738.13,
          apiCreditsWasted: 5876.00,
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