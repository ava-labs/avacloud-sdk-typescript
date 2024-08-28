# ServiceUnavailable

The error is returned for certain routes on a particular
    Subnet. This indicates an internal problem with our Subnet node, and may 
    not necessarily mean the Subnet is down or affected.

## Example Usage

```typescript
import { ServiceUnavailable } from "@avalabs/avacloud-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `message`                                                 | *errors.ServiceUnavailableMessage*                        | :heavy_check_mark:                                        | The error message describing the reason for the exception |                                                           |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | The HTTP status code of the response                      | 503                                                       |
| `error`                                                   | *string*                                                  | :heavy_check_mark:                                        | The type of error                                         | Service Unavailable                                       |