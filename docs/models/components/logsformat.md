# LogsFormat

## Example Usage

```typescript
import { LogsFormat } from "@avalabs/avacloud-sdk/models/components";

let value: LogsFormat = {
  orgId: "<id>",
  logId: "<id>",
  eventTimestamp: 4271.59,
  apiKeyId: "<id>",
  apiKeyAlias: "<value>",
  hostRegion: "<value>",
  requestType: "rpc",
  requestPath: "<value>",
  apiCreditsConsumed: 7807.32,
  requestDurationMsecs: 298.8,
  responseCode: 6483.06,
  metadata: {
    ipAddress: "91.34.232.64",
    host: "ironclad-pigpen.org",
    userAgent: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `orgId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | The organization id of the request.                                            |
| `logId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | The unique log id of the request.                                              |
| `eventTimestamp`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | The timestamp of the request.                                                  |
| `apiKeyId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The apiKey used to make the request.                                           |
| `apiKeyAlias`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The alias of the apiKey used to make the request.                              |
| `hostRegion`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The region of the host for the request made by the client.                     |
| `requestType`                                                                  | [components.RequestType](../../models/components/requesttype.md)               | :heavy_check_mark:                                                             | The type of request made by the client.                                        |
| `requestPath`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The path of the request made by the client.                                    |
| `apiCreditsConsumed`                                                           | *number*                                                                       | :heavy_check_mark:                                                             | The number of API credits consumed by the request.                             |
| `requestDurationMsecs`                                                         | *number*                                                                       | :heavy_check_mark:                                                             | The duration of the request in milliseconds.                                   |
| `responseCode`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | The response code of the request.                                              |
| `chainId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The chain id of the request.                                                   |
| `rpcMethod`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The rpc method of the request.                                                 |
| `metadata`                                                                     | [components.LogsFormatMetadata](../../models/components/logsformatmetadata.md) | :heavy_check_mark:                                                             | The metadata of the request.                                                   |