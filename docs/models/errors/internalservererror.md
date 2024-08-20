# InternalServerError

The error is a generic server side error that is 
    returned for any uncaught and unexpected issues on the server side. 
    This should be very rare, and you may reach out to us if the problem 
    persists for a longer duration.

## Example Usage

```typescript
import { InternalServerError } from "@avalabs/avalanche-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `message`                                                 | *string*[]                                                | :heavy_check_mark:                                        | The error message describing the reason for the exception |                                                           |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | The HTTP status code of the response                      | 500                                                       |
| `error`                                                   | *string*                                                  | :heavy_check_mark:                                        | The type of error                                         | Internal Server Error                                     |