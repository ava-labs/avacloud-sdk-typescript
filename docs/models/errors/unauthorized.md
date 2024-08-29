# Unauthorized

When a client attempts to access resources that require 
    authorization credentials but the client lacks proper authentication 
    in the request, the server responds with 401.

## Example Usage

```typescript
import { Unauthorized } from "@avalabs/avacloud-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `message`                                                 | *errors.UnauthorizedMessage*                              | :heavy_check_mark:                                        | The error message describing the reason for the exception |                                                           |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | The HTTP status code of the response                      | 401                                                       |
| `error`                                                   | *string*                                                  | :heavy_check_mark:                                        | The type of error                                         | Unauthorized                                              |