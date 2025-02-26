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
        eventTimestamp: 1674.35,
        apiKeyId: "<id>",
        apiKeyAlias: "<value>",
        hostRegion: "<value>",
        requestType: "rpc",
        requestPath: "<value>",
        apiCreditsConsumed: 7005.29,
        requestDurationMsecs: 8830.78,
        responseCode: 9665.76,
        metadata: {
          ipAddress: "fd00:7cdf:10e6:cf8e:8ab5:55bf:efb3:89f6",
          host: "frozen-fork.net",
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