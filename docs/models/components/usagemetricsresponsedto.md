# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsResponseDTO = {
    aggregateDuration: "<value>",
    orgId: "<value>",
    metrics: [
        {
            timestamp: 2879.91,
            values: [
                {
                    groupedBy: "responseCode",
                    totalRequests: 3834.62,
                    requestsPerSecond: 6180.16,
                    successRatePercent: 7491.7,
                    medianResponseTimeMsecs: 4287.69,
                    invalidRequests: 8784.53,
                    apiCreditsUsed: 1354.74,
                    apiCreditsWasted: 1028.63,
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