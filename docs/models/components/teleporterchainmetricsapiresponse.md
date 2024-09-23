# TeleporterChainMetricsApiResponse

## Example Usage

```typescript
import { TeleporterChainMetricsApiResponse } from "@avalabs/avacloud-sdk/models/components";

let value: TeleporterChainMetricsApiResponse = {
  result: {
    value: 8917.73,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.TeleporterMetricsValue](../../models/components/teleportermetricsvalue.md) | :heavy_check_mark:                                                                     | current metrics value for a given teleporter metric.                                   |