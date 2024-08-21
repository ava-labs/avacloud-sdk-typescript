# BadGateway

This is an internal error indicating invalid response 
      received by the client-facing proxy or gateway from the upstream server.

## Example Usage

```typescript
import { BadGateway } from "@avalabs/avalanche-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `message`                                                 | *string*[]                                                | :heavy_check_mark:                                        | The error message describing the reason for the exception |                                                           |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | The HTTP status code of the response                      | 502                                                       |
| `error`                                                   | *string*                                                  | :heavy_check_mark:                                        | The type of error                                         | Bad Gateway                                               |