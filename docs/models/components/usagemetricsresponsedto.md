# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  orgId: "<id>",
  metrics: [
    {
      timestamp: 1124.27,
      values: [
        {
          groupedBy: "responseCode",
          totalRequests: 1830.33,
          requestsPerSecond: 4030.26,
          successRatePercent: 7452.33,
          medianResponseTimeMsecs: 5269.07,
          invalidRequests: 4876.76,
          apiCreditsUsed: 5.45,
          apiCreditsWasted: 4254.02,
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