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
      eventTimestamp: 1072.1,
      apiKeyId: "<id>",
      apiKeyAlias: "<value>",
      hostRegion: "<value>",
      requestType: "rpc",
      requestPath: "<value>",
      apiCreditsConsumed: 4731.43,
      requestDurationMsecs: 8822.84,
      responseCode: 7332.89,
      metadata: {
        ipAddress: "95.132.227.188",
        host: "accurate-populist.org",
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