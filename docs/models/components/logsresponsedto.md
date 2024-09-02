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
            eventTimestamp: 7220.56,
            apiKeyId: "<value>",
            apiKeyAlias: "<value>",
            hostRegion: "<value>",
            requestType: "Glacier API Request",
            requestPath: "<value>",
            apiCreditsConsumed: 8663.83,
            requestDurationMsecs: 3654.96,
            responseCode: 9755.22,
            metadata: {
                ipAddress: "4.219.59.2",
                host: "slushy-ford.org",
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