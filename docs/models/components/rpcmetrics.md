# RpcMetrics

## Example Usage

```typescript
import { RpcMetrics } from "@avalabs/avacloud-sdk/models/components";

let value: RpcMetrics = {
  timestamp: 3416.98,
  values: [
    {
      totalRequests: 6762.42,
      apiCreditsUsed: 8792.35,
      requestsPerSecond: 5436.78,
      successRatePercent: 2827.00,
      medianResponseTimeMsecs: 302.35,
      invalidRequests: 7103.37,
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