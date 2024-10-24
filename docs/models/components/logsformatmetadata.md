# LogsFormatMetadata

## Example Usage

```typescript
import { LogsFormatMetadata } from "@avalabs/avacloud-sdk/models/components";

let value: LogsFormatMetadata = {
  ipAddress: "158.249.253.104",
  host: "damp-packaging.info",
  userAgent: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `ipAddress`                                         | *string*                                            | :heavy_check_mark:                                  | The IP address of the client that made the request. |
| `host`                                              | *string*                                            | :heavy_check_mark:                                  | The host for the request made by the client.        |
| `userAgent`                                         | *string*                                            | :heavy_check_mark:                                  | The user agent of the client that made the request. |