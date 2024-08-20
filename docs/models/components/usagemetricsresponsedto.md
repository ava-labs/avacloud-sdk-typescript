# UsageMetricsResponseDTO

## Example Usage

```typescript
import { UsageMetricsResponseDTO } from "@avalabs/avalanche-sdk/models/components";

let value: UsageMetricsResponseDTO = {
    aggregateDuration: "<value>",
    orgId: "<value>",
    metrics: ["<value>"],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `aggregateDuration`                               | *string*                                          | :heavy_check_mark:                                | Duration in which the metrics value is aggregated |
| `orgId`                                           | *string*                                          | :heavy_check_mark:                                | Org ID for which the metrics are aggregated       |
| `metrics`                                         | *string*[]                                        | :heavy_check_mark:                                | Metrics values                                    |