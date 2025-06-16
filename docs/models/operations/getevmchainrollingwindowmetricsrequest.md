# GetEvmChainRollingWindowMetricsRequest

## Example Usage

```typescript
import { GetEvmChainRollingWindowMetricsRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetEvmChainRollingWindowMetricsRequest = {
  metric: "txCount",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `metric`                                                                                                                              | [components.ChainRollingWindowMetric](../../models/components/chainrollingwindowmetric.md)                                            | :heavy_check_mark:                                                                                                                    | Which chain level metric to fetch for the rolling window.                                                                             | txCount                                                                                                                               |
| `chainId`                                                                                                                             | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | A supported EVM chain ID or one of "total", "mainnet", or "testnet". Use the `/chains` endpoint to get a list of supported chain IDs. | 43114                                                                                                                                 |