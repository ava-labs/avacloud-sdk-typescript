# GetApiLogsResponse

## Example Usage

```typescript
import { GetApiLogsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetApiLogsResponse = {
    result: {
        orgId: "<value>",
        logs: [
            {
                orgId: "<value>",
                logId: "<value>",
                eventTimestamp: 3960.6,
                apiKeyId: "<value>",
                apiKeyAlias: "<value>",
                hostRegion: "<value>",
                requestType: "Glacier API Request",
                requestPath: "<value>",
                apiCreditsConsumed: 5654.21,
                requestDurationMsecs: 8404.29,
                responseCode: 1832.8,
                metadata: {
                    ipAddress: "52.37.42.124",
                    host: "clumsy-flytrap.net",
                    userAgent: "<value>",
                },
            },
        ],
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `result`                                                                 | [components.LogsResponseDTO](../../models/components/logsresponsedto.md) | :heavy_check_mark:                                                       | N/A                                                                      |