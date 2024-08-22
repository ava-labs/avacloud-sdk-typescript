# GetApiLogsResponse

## Example Usage

```typescript
import { GetApiLogsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: GetApiLogsResponse = {
    result: {
        orgId: "<value>",
        logs: [
            {
                orgId: "<value>",
                logId: "<value>",
                eventTimestamp: 7168.6,
                apiKeyId: "<value>",
                apiKeyAlias: "<value>",
                hostRegion: "<value>",
                requestType: "Glacier RPC Request",
                requestPath: "<value>",
                apiCreditsConsumed: 3960.6,
                requestDurationMsecs: 4631.5,
                responseCode: 5654.21,
                metadata: {
                    ipAddress: "215.46.52.37",
                    host: "damp-keystone.com",
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