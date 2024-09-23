# MetricsValue

## Example Usage

```typescript
import { MetricsValue } from "@avalabs/avacloud-sdk/models/components";

let value: MetricsValue = {
  value: 6458.94,
  timestamp: 4375.87,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `value`                                    | *number*                                   | :heavy_check_mark:                         | Aggregated value for the current metrics.  |
| `timestamp`                                | *number*                                   | :heavy_check_mark:                         | Timestamp at which metrics are aggregated. |