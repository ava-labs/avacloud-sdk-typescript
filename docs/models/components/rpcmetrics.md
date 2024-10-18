# RpcMetrics

## Example Usage

```typescript
import { RpcMetrics } from "@avalabs/avacloud-sdk/models/components";

let value: RpcMetrics = {
  timestamp: 3730.35,
  values: [
    {
      totalRequests: 5249.70,
      apiCreditsUsed: 7505.95,
      requestsPerSecond: 3335.07,
      successRatePercent: 9241.59,
      medianResponseTimeMsecs: 8623.19,
      invalidRequests: 486.90,
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