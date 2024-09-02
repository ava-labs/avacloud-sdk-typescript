# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
    aggregateDuration: "<value>",
    orgId: "<value>",
    metrics: [
        {
            timestamp: 3523.12,
            values: [
                {
                    groupedBy: "requestType",
                    totalRequests: 4692.49,
                    requestsPerSecond: 9988.48,
                    successRatePercent: 8411.4,
                    medianResponseTimeMsecs: 1494.48,
                    invalidRequests: 9046.48,
                    apiCreditsUsed: 8681.26,
                    apiCreditsWasted: 375.59,
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