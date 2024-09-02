# DataHealthCheckResponseBody

The Health Check is not successful

## Example Usage

```typescript
import { DataHealthCheckResponseBody } from "@avalabs/avacloud-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `status`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | error                                                                                             |
| `info`                                                                                            | Record<string, [errors.DataHealthCheckInfo](../../models/errors/datahealthcheckinfo.md)>          | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"database": {<br/>"status": "up"<br/>}<br/>}                                                |
| `error`                                                                                           | Record<string, [errors.DataHealthCheckError](../../models/errors/datahealthcheckerror.md)>        | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"redis": {<br/>"status": "down",<br/>"message": "Could not connect"<br/>}<br/>}             |
| `details`                                                                                         | Record<string, [errors.DataHealthCheckDetails](../../models/errors/datahealthcheckdetails.md)>    | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"database": {<br/>"status": "up"<br/>},<br/>"redis": {<br/>"status": "down",<br/>"message": "Could not connect"<br/>}<br/>} |