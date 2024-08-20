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
                eventTimestamp: 9437.49,
                apiKeyId: "<value>",
                apiKeyAlias: "<value>",
                hostRegion: "<value>",
                requestType: "Glacier RPC Request",
                requestPath: "<value>",
                apiCreditsConsumed: 6818.2,
                requestDurationMsecs: 4499.5,
                responseCode: 3595.08,
                metadata: {
                    ipAddress: "156.111.231.178",
                    host: "burdensome-bail.org",
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