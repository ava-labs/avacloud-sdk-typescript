# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 2728.22,
  values: [
    {
      groupedBy: "chainId",
      totalRequests: 1970.54,
      requestsPerSecond: 4598.56,
      successRatePercent: 446.12,
      medianResponseTimeMsecs: 7997.96,
      invalidRequests: 769.56,
      apiCreditsUsed: 5188.35,
      apiCreditsWasted: 3068.10,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |