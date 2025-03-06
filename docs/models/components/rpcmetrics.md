# RpcMetrics

## Example Usage

```typescript
import { RpcMetrics } from "@avalabs/avacloud-sdk/models/components";

let value: RpcMetrics = {
  timestamp: 688.52,
  values: [
    {
      totalRequests: 7057.1,
      apiCreditsUsed: 3952.33,
      requestsPerSecond: 3108.4,
      successRatePercent: 7186.27,
      medianResponseTimeMsecs: 3359.77,
      invalidRequests: 7277.72,
      apiCreditsWasted: 8152,
      groupedBy: "responseCode",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The timestamp of the metrics value                                                                       |
| `values`                                                                                                 | [components.RpcUsageMetricsValueAggregated](../../models/components/rpcusagemetricsvalueaggregated.md)[] | :heavy_check_mark:                                                                                       | The metrics values for the timestamp                                                                     |