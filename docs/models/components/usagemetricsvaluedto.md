# UsageMetricsValueDTO

## Example Usage

```typescript
import { UsageMetricsValueDTO } from "@avalabs/avacloud-sdk/models/components";

let value: UsageMetricsValueDTO = {
  groupedBy: "requestPath",
  totalRequests: 156.06,
  requestsPerSecond: 4287.96,
  successRatePercent: 680.74,
  medianResponseTimeMsecs: 2519.41,
  invalidRequests: 2211.61,
  apiCreditsUsed: 2531.91,
  apiCreditsWasted: 1310.55,
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