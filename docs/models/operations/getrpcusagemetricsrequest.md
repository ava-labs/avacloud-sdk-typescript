# GetRpcUsageMetricsRequest

## Example Usage

```typescript
import { GetRpcUsageMetricsRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: GetRpcUsageMetricsRequest = {
  startTimestamp: 1698100000,
  endTimestamp: 1698300000,
  groupBy: "requestPath",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            | Example                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeInterval`                                                                                                                                                                                         | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Query param for setting time interval of data aggregation.                                                                                                                                             |                                                                                                                                                                                                        |
| `startTimestamp`                                                                                                                                                                                       | *number*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | The start time of the range as a UNIX timestamp. The requested start time  will be rounded down to 0:00 UTC of the day.                                                                                | 1698100000                                                                                                                                                                                             |
| `endTimestamp`                                                                                                                                                                                         | *number*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | The end time of the range as a UNIX timestamp. The requested end time will be rounded down to 0:00 UTC of the day. `endTimestamp` must be no  earlier than 0:00 UTC of the day after `startTimestamp`. | 1698300000                                                                                                                                                                                             |
| `groupBy`                                                                                                                                                                                              | [components.UsageMetricsGroupByEnum](../../models/components/usagemetricsgroupbyenum.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Query param for the criterion used for grouping metrics                                                                                                                                                | requestPath                                                                                                                                                                                            |
| `chainId`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Filter data by chain ID.                                                                                                                                                                               |                                                                                                                                                                                                        |
| `requestPath`                                                                                                                                                                                          | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Filter data by request path.                                                                                                                                                                           |                                                                                                                                                                                                        |
| `responseCode`                                                                                                                                                                                         | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Filter data by response status code.                                                                                                                                                                   |                                                                                                                                                                                                        |
| `rpcMethod`                                                                                                                                                                                            | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Filter data by RPC method.                                                                                                                                                                             |                                                                                                                                                                                                        |
| `rlBypassApiToken`                                                                                                                                                                                     | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Filter data by Rl Bypass API Token.                                                                                                                                                                    |                                                                                                                                                                                                        |