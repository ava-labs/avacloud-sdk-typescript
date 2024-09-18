# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  orgId: "<value>",
  metrics: [
    {
      timestamp: 7038.89,
      values: [
        {
          groupedBy: "chainId",
          totalRequests: 1002.26,
          requestsPerSecond: 995.69,
          successRatePercent: 9194.83,
          medianResponseTimeMsecs: 3523.12,
          invalidRequests: 7142.42,
          apiCreditsUsed: 4692.49,
          apiCreditsWasted: 9988.48,
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