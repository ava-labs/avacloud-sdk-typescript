# LogsResponseDTO

## Example Usage

```typescript
import { LogsResponseDTO } from "@avalabs/avacloud-sdk/models/components";

let value: LogsResponseDTO = {
  orgId: "<value>",
  logs: [
    {
      orgId: "<value>",
      logId: "<value>",
      eventTimestamp: 9564.06,
      apiKeyId: "<value>",
      apiKeyAlias: "<value>",
      hostRegion: "<value>",
      requestType: "data",
      requestPath: "<value>",
      apiCreditsConsumed: 9039.84,
      requestDurationMsecs: 5438.06,
      responseCode: 4569.11,
      metadata: {
        ipAddress: "af8d:ff7a:d53b:fadc:aecc:db3d:8195:c0f7",
        host: "hard-to-find-adviser.biz",
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