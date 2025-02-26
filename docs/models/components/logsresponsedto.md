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
      eventTimestamp: 6941.58,
      apiKeyId: "<id>",
      apiKeyAlias: "<value>",
      hostRegion: "<value>",
      requestType: "rpc",
      requestPath: "<value>",
      apiCreditsConsumed: 7104.56,
      requestDurationMsecs: 1770.05,
      responseCode: 4835.18,
      metadata: {
        ipAddress: "91.239.236.72",
        host: "gripping-nerve.org",
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