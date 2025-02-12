# SubnetRpcUsageMetricsResponseDTO

## Example Usage

```typescript
import { SubnetRpcUsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: SubnetRpcUsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  metrics: [
    {
      timestamp: 997.33,
      values: [
        {
          totalRequests: 4755.89,
          apiCreditsUsed: 8200.23,
          requestsPerSecond: 2981.87,
          successRatePercent: 1509.35,
          medianResponseTimeMsecs: 3302.67,
          invalidRequests: 8138.8,
          apiCreditsWasted: 1403.84,
          groupedBy: "rpcMethod",
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