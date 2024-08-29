# BadRequest

Bad requests generally mean the client has passed invalid 
    or malformed parameters. Error messages in the response could help in 
    evaluating the error.

## Example Usage

```typescript
import { BadRequest } from "@avalabs/avacloud-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `message`                                                 | *errors.Message*                                          | :heavy_check_mark:                                        | The error message describing the reason for the exception |                                                           |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | The HTTP status code of the response                      | 400                                                       |
| `error`                                                   | *string*                                                  | :heavy_check_mark:                                        | The type of error                                         | Bad Request                                               |