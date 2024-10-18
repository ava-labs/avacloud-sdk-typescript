# RpcUsageMetricsResponseDTO

## Example Usage

```typescript
import { RpcUsageMetricsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: RpcUsageMetricsResponseDTO = {
  aggregateDuration: "<value>",
  chainId: "<id>",
  metrics: [
    {
      timestamp: 4461.36,
      values: [
        {
          totalRequests: 1046.28,
          apiCreditsUsed: 3484.76,
          requestsPerSecond: 7400.98,
          successRatePercent: 6805.14,
          medianResponseTimeMsecs: 6223.84,
          invalidRequests: 7105.28,
          groupedBy: "rpcMethod",
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