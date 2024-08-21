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
                eventTimestamp: 8802.98,
                apiKeyId: "<value>",
                apiKeyAlias: "<value>",
                hostRegion: "<value>",
                requestType: "Glacier API Request",
                requestPath: "<value>",
                apiCreditsConsumed: 3136.92,
                requestDurationMsecs: 2133.12,
                responseCode: 9574.51,
                metadata: {
                    ipAddress: "132.120.6.182",
                    host: "distinct-cheque.info",
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