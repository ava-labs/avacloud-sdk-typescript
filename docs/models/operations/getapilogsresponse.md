# GetApiLogsResponse

## Example Usage

```typescript
import { GetApiLogsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: GetApiLogsResponse = {
  result: {
    orgId: "<id>",
    logs: [
      {
        orgId: "<id>",
        logId: "<id>",
        eventTimestamp: 4724.14,
        apiKeyId: "<id>",
        apiKeyAlias: "<value>",
        hostRegion: "<value>",
        requestType: "data",
        requestPath: "<value>",
        apiCreditsConsumed: 2027.96,
        requestDurationMsecs: 4235.88,
        responseCode: 3577.58,
        metadata: {
          ipAddress: "112.67.133.9",
          host: "untimely-skean.name",
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