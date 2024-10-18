# GetEvmChainMetricsResponse

## Example Usage

```typescript
import { GetEvmChainMetricsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetEvmChainMetricsResponse = {
  result: {
    results: [
      {
        value: 4567.04,
        timestamp: 209.50,
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.MetricsApiResponse](../../models/components/metricsapiresponse.md) | :heavy_check_mark:                                                             | N/A                                                                            |