# LogsResponseDTO

## Example Usage

```typescript
import { LogsResponseDTO } from "@avalabs/avalanche-sdk/models/components";

let value: LogsResponseDTO = {
    orgId: "<value>",
    logs: [
        {
            orgId: "<value>",
            logId: "<value>",
            eventTimestamp: 6790.91,
            apiKeyId: "<value>",
            apiKeyAlias: "<value>",
            hostRegion: "<value>",
            requestType: "Glacier RPC Request",
            requestPath: "<value>",
            apiCreditsConsumed: 8642.82,
            requestDurationMsecs: 5899.1,
            responseCode: 7508.44,
            metadata: {
                ipAddress: "186.246.79.141",
                host: "hurtful-counsel.biz",
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