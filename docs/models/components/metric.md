# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avalanche-sdk/models/components";

let value: Metric = {
    timestamp: 2982.82,
    values: [
        {
            groupedBy: "requestPath",
            totalRequests: 5699.65,
            requestsPerSecond: 3540.47,
            successRatePercent: 5908.73,
            medianResponseTimeMsecs: 5518.16,
            invalidRequests: 5743.25,
            apiCreditsUsed: 336.25,
            apiCreditsWasted: 6532.01,
        },
    ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |