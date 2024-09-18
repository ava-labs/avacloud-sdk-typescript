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
        eventTimestamp: 2817.3,
        apiKeyId: "<value>",
        apiKeyAlias: "<value>",
        hostRegion: "<value>",
        requestType: "rpc",
        requestPath: "<value>",
        apiCreditsConsumed: 5864.1,
        requestDurationMsecs: 1816.31,
        responseCode: 639.55,
        metadata: {
          ipAddress: "131.124.148.250",
          host: "spicy-swallow.name",
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