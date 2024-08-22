# LogsFormatMetadata

## Example Usage

```typescript
import { LogsFormatMetadata } from "@avalabs/avalanche-sdk/models/components";

let value: LogsFormatMetadata = {
    ipAddress: "217.221.206.105",
    host: "nimble-caution.info",
    userAgent: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `ipAddress`                                         | *string*                                            | :heavy_check_mark:                                  | The IP address of the client that made the request. |
| `host`                                              | *string*                                            | :heavy_check_mark:                                  | The host for the request made by the client.        |
| `userAgent`                                         | *string*                                            | :heavy_check_mark:                                  | The user agent of the client that made the request. |