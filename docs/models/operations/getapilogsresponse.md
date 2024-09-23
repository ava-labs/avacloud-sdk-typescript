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
        eventTimestamp: 1032.98,
        apiKeyId: "<value>",
        apiKeyAlias: "<value>",
        hostRegion: "<value>",
        requestType: "rpc",
        requestPath: "<value>",
        apiCreditsConsumed: 291.90,
        requestDurationMsecs: 5349.17,
        responseCode: 4042.44,
        metadata: {
          ipAddress: "840b:c841:1425:11c3:cba3:49b7:bae0:d8df",
          host: "wretched-ribbon.info",
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