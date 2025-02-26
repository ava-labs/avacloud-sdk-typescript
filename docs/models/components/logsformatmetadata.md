# LogsFormatMetadata

## Example Usage

```typescript
import { LogsFormatMetadata } from "@avalabs/avacloud-sdk/models/components";

let value: LogsFormatMetadata = {
  ipAddress: "a6cb:b7aa:3d9a:9cda:dd89:b741:de27:32d1",
  host: "worldly-boyfriend.org",
  userAgent: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `ipAddress`                                         | *string*                                            | :heavy_check_mark:                                  | The IP address of the client that made the request. |
| `host`                                              | *string*                                            | :heavy_check_mark:                                  | The host for the request made by the client.        |
| `userAgent`                                         | *string*                                            | :heavy_check_mark:                                  | The user agent of the client that made the request. |