# RpcUsageMetricsValueAggregated

## Example Usage

```typescript
import { RpcUsageMetricsValueAggregated } from "@avalabs/avacloud-sdk/models/components";

let value: RpcUsageMetricsValueAggregated = {
  totalRequests: 5754.46,
  apiCreditsUsed: 4964.38,
  requestsPerSecond: 4611.48,
  successRatePercent: 7818.05,
  medianResponseTimeMsecs: 7082.67,
  invalidRequests: 7783.3,
  apiCreditsWasted: 7954.49,
  groupedBy: "rpcMethod",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `totalRequests`                                                                                                          | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The total number of requests                                                                                             |
| `apiCreditsUsed`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The number of API credits used                                                                                           |
| `requestsPerSecond`                                                                                                      | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The number of requests per second                                                                                        |
| `successRatePercent`                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The success rate percentage                                                                                              |
| `medianResponseTimeMsecs`                                                                                                | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The median response time in milliseconds                                                                                 |
| `invalidRequests`                                                                                                        | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The number of invalid requests                                                                                           |
| `apiCreditsWasted`                                                                                                       | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The number of API credits wasted on invalid requests                                                                     |
| `groupedBy`                                                                                                              | [components.RpcUsageMetricsValueAggregatedGroupedBy](../../models/components/rpcusagemetricsvalueaggregatedgroupedby.md) | :heavy_check_mark:                                                                                                       | Column name used for data aggregation                                                                                    |
| `groupValue`                                                                                                             | *components.RpcUsageMetricsValueAggregatedGroupValue*                                                                    | :heavy_minus_sign:                                                                                                       | The value of the column used for data aggregation                                                                        |