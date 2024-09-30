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
        eventTimestamp: 5831.93,
        apiKeyId: "<id>",
        apiKeyAlias: "<value>",
        hostRegion: "<value>",
        requestType: "data",
        requestPath: "<value>",
        apiCreditsConsumed: 1989.11,
        requestDurationMsecs: 9561.23,
        responseCode: 3304.41,
        metadata: {
          ipAddress: "6ea7:b284:f286:b7f0:d55b:f6c2:da39:d20c",
          host: "jam-packed-section.org",
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