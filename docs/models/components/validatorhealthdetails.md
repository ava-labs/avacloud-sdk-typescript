# ValidatorHealthDetails

## Example Usage

```typescript
import { ValidatorHealthDetails } from "@avalabs/avacloud-sdk/models/components";

let value: ValidatorHealthDetails = {
  reachabilityPercent: 1157.03,
  benchedPChainRequestsPercent: 5771.4,
  benchedXChainRequestsPercent: 6952.7,
  benchedCChainRequestsPercent: 6719.57,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `reachabilityPercent`                                          | *number*                                                       | :heavy_check_mark:                                             | Percent of requests responded to in last polling.              |
| `benchedPChainRequestsPercent`                                 | *number*                                                       | :heavy_check_mark:                                             | Percent of requests benched on the P-Chain in last polling.    |
| `benchedXChainRequestsPercent`                                 | *number*                                                       | :heavy_check_mark:                                             | Percentage of requests benched on the X-Chain in last polling. |
| `benchedCChainRequestsPercent`                                 | *number*                                                       | :heavy_check_mark:                                             | Percentage of requests benched on the C-Chain in last polling. |