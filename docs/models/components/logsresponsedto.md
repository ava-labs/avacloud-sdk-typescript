# LogsResponseDTO

## Example Usage

```typescript
import { LogsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: LogsResponseDTO = {
  orgId: "<id>",
  logs: [
    {
      orgId: "<id>",
      logId: "<id>",
      eventTimestamp: 513.76,
      apiKeyId: "<id>",
      apiKeyAlias: "<value>",
      hostRegion: "<value>",
      requestType: "rpc",
      requestPath: "<value>",
      apiCreditsConsumed: 1344.29,
      requestDurationMsecs: 3453.58,
      responseCode: 9686.9,
      metadata: {
        ipAddress: "3fb0:a69b:d363:bbaa:abae:fee1:95f6:ba52",
        host: "sticky-tail.com",
        userAgent: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `orgId`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The organization id of the request.                                                                                                    |
| `logs`                                                                                                                                 | [components.LogsFormat](../../models/components/logsformat.md)[]                                                                       | :heavy_check_mark:                                                                                                                     | An array of logs representing the requests made by clients.                                                                            |