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
                eventTimestamp: 7044.74,
                apiKeyId: "<value>",
                apiKeyAlias: "<value>",
                hostRegion: "<value>",
                requestType: "Glacier API Request",
                requestPath: "<value>",
                apiCreditsConsumed: 4631.5,
                requestDurationMsecs: 5654.21,
                responseCode: 8404.29,
                metadata: {
                    ipAddress: "46.52.37.42",
                    host: "likely-camper.info",
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