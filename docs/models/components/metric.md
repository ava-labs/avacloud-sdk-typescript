# Metric

## Example Usage

```typescript
import { Metric } from "@avalabs/avacloud-sdk/models/components";

let value: Metric = {
  timestamp: 8119.39,
  values: [
    {
      groupedBy: "chainId",
      totalRequests: 9148.64,
      requestsPerSecond: 493.48,
      successRatePercent: 2928.88,
      medianResponseTimeMsecs: 7150.53,
      invalidRequests: 4181.09,
      apiCreditsUsed: 1729.51,
      apiCreditsWasted: 1072.1,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The timestamp of the metrics value                                                   |
| `values`                                                                             | [components.UsageMetricsValueDTO](../../models/components/usagemetricsvaluedto.md)[] | :heavy_check_mark:                                                                   | The metrics values for the timestamp                                                 |