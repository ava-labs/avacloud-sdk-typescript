# RollingWindowMetricsApiResponse

## Example Usage

```typescript
import { RollingWindowMetricsApiResponse } from "@avalabs/avacloud-sdk/models/components";

let value: RollingWindowMetricsApiResponse = {
  result: {
    lastHour: 5448.83,
    lastDay: 8472.52,
    lastMonth: 4236.55,
    lastYear: 6235.64,
    allTime: 6458.94,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ChainRollingWindowMetricsValue](../../models/components/chainrollingwindowmetricsvalue.md) | :heavy_check_mark:                                                                                     | Array of current metrics values for different windows.                                                 |