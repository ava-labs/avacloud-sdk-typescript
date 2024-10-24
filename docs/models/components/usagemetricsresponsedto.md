# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  orgId: "<id>",
  metrics: [
    {
      timestamp: 8820.41,
      values: [
        {
          groupedBy: "chainId",
          totalRequests: 7241.68,
          requestsPerSecond: 3990.25,
          successRatePercent: 9040.44,
          medianResponseTimeMsecs: 6900.25,
          invalidRequests: 6996.22,
          apiCreditsUsed: 3277.20,
          apiCreditsWasted: 7567.79,
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