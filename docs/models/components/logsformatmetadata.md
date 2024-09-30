# LogsFormatMetadata

## Example Usage

```typescript
import { LogsFormatMetadata } from "@avalabs/avacloud-sdk/models/components";

let value: LogsFormatMetadata = {
  ipAddress: "1ad5:88a5:396c:5bed:deaf:ff91:6392:d8df",
  host: "negative-drug.name",
  userAgent: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `ipAddress`                                         | *string*                                            | :heavy_check_mark:                                  | The IP address of the client that made the request. |
| `host`                                              | *string*                                            | :heavy_check_mark:                                  | The host for the request made by the client.        |
| `userAgent`                                         | *string*                                            | :heavy_check_mark:                                  | The user agent of the client that made the request. |