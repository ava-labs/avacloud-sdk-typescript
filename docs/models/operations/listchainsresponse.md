# ListChainsResponse

## Example Usage

```typescript
import { ListChainsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListChainsResponse = {
  result: {
    chains: [
      {
        evmChainId: 43114,
        chainName: "c_chain",
        blockchainId: "2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5",
        subnetId: "11111111111111111111111111111111LpoYY",
        network: "testnet",
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.MetricsListChainsResponse](../../models/components/metricslistchainsresponse.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |