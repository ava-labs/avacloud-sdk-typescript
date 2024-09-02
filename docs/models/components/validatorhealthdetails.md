# ValidatorHealthDetails

## Example Usage

```typescript
import { ValidatorHealthDetails } from "@avalabs/avacloud-sdk/models/components";

let value: ValidatorHealthDetails = {
    reachabilityPercent: 2088.76,
    benchedPChainRequestsPercent: 6350.59,
    benchedXChainRequestsPercent: 1613.09,
    benchedCChainRequestsPercent: 9953,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `reachabilityPercent`                                          | *number*                                                       | :heavy_check_mark:                                             | Percent of requests responded to in last polling.              |
| `benchedPChainRequestsPercent`                                 | *number*                                                       | :heavy_check_mark:                                             | Percent of requests benched on the P-Chain in last polling.    |
| `benchedXChainRequestsPercent`                                 | *number*                                                       | :heavy_check_mark:                                             | Percentage of requests benched on the X-Chain in last polling. |
| `benchedCChainRequestsPercent`                                 | *number*                                                       | :heavy_check_mark:                                             | Percentage of requests benched on the C-Chain in last polling. |