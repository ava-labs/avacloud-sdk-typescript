# UsageMetricsValueDTO

## Example Usage

```typescript
import { UsageMetricsValueDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsValueDTO = {
  groupedBy: "None",
  totalRequests: 3519.36,
  requestsPerSecond: 8975.43,
  successRatePercent: 7699.67,
  medianResponseTimeMsecs: 3574.25,
  invalidRequests: 6216.66,
  apiCreditsUsed: 2885.7,
  apiCreditsWasted: 8744,
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