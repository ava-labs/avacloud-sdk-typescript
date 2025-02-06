# UsageMetricsValueDTO

## Example Usage

```typescript
import { UsageMetricsValueDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsValueDTO = {
  groupedBy: "requestType",
  totalRequests: 4793.85,
  requestsPerSecond: 9148.64,
  successRatePercent: 493.48,
  medianResponseTimeMsecs: 2928.88,
  invalidRequests: 7150.53,
  apiCreditsUsed: 4181.09,
  apiCreditsWasted: 1729.51,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `groupedBy`                                                  | [components.GroupedBy](../../models/components/groupedby.md) | :heavy_check_mark:                                           | Column name used for data aggregation                        |
| `groupValue`                                                 | *components.GroupValue*                                      | :heavy_minus_sign:                                           | The value of the column used for data aggregation            |
| `totalRequests`                                              | *number*                                                     | :heavy_check_mark:                                           | The total number of requests                                 |
| `requestsPerSecond`                                          | *number*                                                     | :heavy_check_mark:                                           | The number of requests per second                            |
| `successRatePercent`                                         | *number*                                                     | :heavy_check_mark:                                           | The success rate percentage                                  |
| `medianResponseTimeMsecs`                                    | *number*                                                     | :heavy_check_mark:                                           | The median response time in milliseconds                     |
| `invalidRequests`                                            | *number*                                                     | :heavy_check_mark:                                           | The number of invalid requests                               |
| `apiCreditsUsed`                                             | *number*                                                     | :heavy_check_mark:                                           | The number of API credits used                               |
| `apiCreditsWasted`                                           | *number*                                                     | :heavy_check_mark:                                           | The number of API credits wasted on invalid requests         |