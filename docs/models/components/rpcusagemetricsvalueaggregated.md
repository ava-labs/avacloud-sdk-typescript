# RpcUsageMetricsValueAggregated

## Example Usage

```typescript
import { RpcUsageMetricsValueAggregated } from "@avalabs/avacloud-sdk/models/components";

let value: RpcUsageMetricsValueAggregated = {
  totalRequests: 2981.87,
  apiCreditsUsed: 1509.35,
  requestsPerSecond: 3302.67,
  successRatePercent: 8138.8,
  medianResponseTimeMsecs: 1403.84,
  invalidRequests: 2273.62,
  apiCreditsWasted: 688.52,
  groupedBy: "rlBypassToken",
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