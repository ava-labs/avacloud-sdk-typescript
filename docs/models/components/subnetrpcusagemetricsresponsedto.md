# SubnetRpcUsageMetricsResponseDTO

## Example Usage

```typescript
import { SubnetRpcUsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: SubnetRpcUsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  metrics: [
    {
      timestamp: 3679.17,
      values: [
        {
          totalRequests: 3423.42,
          apiCreditsUsed: 7573.64,
          requestsPerSecond: 3145.73,
          successRatePercent: 6573.19,
          medianResponseTimeMsecs: 5173.26,
          invalidRequests: 4849.66,
          apiCreditsWasted: 9011.63,
          groupedBy: "rlBypassToken",
        },
      ],
    },
  ],
  chainId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `aggregateDuration`                                              | *string*                                                         | :heavy_check_mark:                                               | Duration in which the metrics value is aggregated                |
| `metrics`                                                        | [components.RpcMetrics](../../models/components/rpcmetrics.md)[] | :heavy_check_mark:                                               | Metrics values                                                   |
| `chainId`                                                        | *string*                                                         | :heavy_check_mark:                                               | ChainId for which the metrics are aggregated                     |