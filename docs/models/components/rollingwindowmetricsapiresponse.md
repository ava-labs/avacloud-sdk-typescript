# RollingWindowMetricsApiResponse

## Example Usage

```typescript
import { RollingWindowMetricsApiResponse } from "@avalabs/avacloud-sdk/models/components";

let value: RollingWindowMetricsApiResponse = {
  result: {
    lastHour: 3834.42,
    lastDay: 7917.25,
    lastMonth: 5288.95,
    lastYear: 5680.45,
    allTime: 9255.97,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ChainRollingWindowMetricsValue](../../models/components/chainrollingwindowmetricsvalue.md) | :heavy_check_mark:                                                                                     | Array of current metrics values for different windows.                                                 |