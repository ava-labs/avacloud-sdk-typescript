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
      eventTimestamp: 996.15,
      apiKeyId: "<id>",
      apiKeyAlias: "<value>",
      hostRegion: "<value>",
      requestType: "rpc",
      requestPath: "<value>",
      apiCreditsConsumed: 8694.89,
      requestDurationMsecs: 4541.62,
      responseCode: 3267.01,
      metadata: {
        ipAddress: "157.8.3.109",
        host: "black-director.biz",
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