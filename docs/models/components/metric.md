# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
    timestamp: 1624.93,
    values: [
        {
            groupedBy: "apiKeyId",
            totalRequests: 6155.6,
            requestsPerSecond: 1668.47,
            successRatePercent: 1238.2,
            medianResponseTimeMsecs: 7790.51,
            invalidRequests: 8480.09,
            apiCreditsUsed: 8649.34,
            apiCreditsWasted: 8073.19,
        },
    ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |