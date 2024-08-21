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
            eventTimestamp: 2879.91,
            apiKeyId: "<value>",
            apiKeyAlias: "<value>",
            hostRegion: "<value>",
            requestType: "Glacier API Request",
            requestPath: "<value>",
            apiCreditsConsumed: 3834.62,
            requestDurationMsecs: 6180.16,
            responseCode: 7491.7,
            metadata: {
                ipAddress: "109.224.34.26",
                host: "foolhardy-bolero.name",
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