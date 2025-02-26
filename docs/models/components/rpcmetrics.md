# RpcMetrics

## Example Usage

```typescript
import { RpcMetrics } from "@avalabs/avacloud-sdk/models/components";

let value: RpcMetrics = {
  timestamp: 8268.62,
  values: [
    {
      totalRequests: 7255.74,
      apiCreditsUsed: 385.57,
      requestsPerSecond: 7731.1,
      successRatePercent: 2168.7,
      medianResponseTimeMsecs: 9031.5,
      invalidRequests: 429.24,
      apiCreditsWasted: 3330.72,
      groupedBy: "rpcMethod",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The timestamp of the metrics value                                                                       |
| `values`                                                                                                 | [components.RpcUsageMetricsValueAggregated](../../models/components/rpcusagemetricsvalueaggregated.md)[] | :heavy_check_mark:                                                                                       | The metrics values for the timestamp                                                                     |