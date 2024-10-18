# RpcUsageMetricsResponseDTO

## Example Usage

```typescript
import { RpcUsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: RpcUsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  chainId: "<id>",
  metrics: [
    {
      timestamp: 4067.33,
      values: [
        {
          totalRequests: 5520.78,
          apiCreditsUsed: 2716.53,
          requestsPerSecond: 4554.44,
          successRatePercent: 4017.14,
          medianResponseTimeMsecs: 2484.13,
          invalidRequests: 5058.66,
          groupedBy: "responseCode",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `aggregateDuration`                                              | *string*                                                         | :heavy_check_mark:                                               | Duration in which the metrics value is aggregated                |
| `chainId`                                                        | *string*                                                         | :heavy_check_mark:                                               | ChainId for which the metrics are aggregated                     |
| `metrics`                                                        | [components.RpcMetrics](../../models/components/rpcmetrics.md)[] | :heavy_check_mark:                                               | Metrics values                                                   |