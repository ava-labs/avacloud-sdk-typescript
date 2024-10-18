# RpcUsageMetricsValueAggregated

## Example Usage

```typescript
import { RpcUsageMetricsValueAggregated } from "@avalabs/avacloud-sdk/models/components";

let value: RpcUsageMetricsValueAggregated = {
  totalRequests: 3484.76,
  apiCreditsUsed: 7400.98,
  requestsPerSecond: 6805.14,
  successRatePercent: 6223.84,
  medianResponseTimeMsecs: 7105.28,
  invalidRequests: 2049.24,
  groupedBy: "responseCode",
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
| `groupedBy`                                                                                                              | [components.RpcUsageMetricsValueAggregatedGroupedBy](../../models/components/rpcusagemetricsvalueaggregatedgroupedby.md) | :heavy_check_mark:                                                                                                       | Column name used for data aggregation                                                                                    |
| `groupValue`                                                                                                             | *components.RpcUsageMetricsValueAggregatedGroupValue*                                                                    | :heavy_minus_sign:                                                                                                       | The value of the column used for data aggregation                                                                        |