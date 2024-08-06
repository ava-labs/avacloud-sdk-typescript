# HealthCheckResponseBody

The Health Check is successful


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `status`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | ok                                                                       |
| `info`                                                                   | Record<string, [operations.Info](../../models/operations/info.md)>       | :heavy_minus_sign:                                                       | N/A                                                                      | {<br/>"database": {<br/>"status": "up"<br/>}<br/>}                       |
| `error`                                                                  | Record<string, [operations.ErrorT](../../models/operations/errort.md)>   | :heavy_minus_sign:                                                       | N/A                                                                      | {}                                                                       |
| `details`                                                                | Record<string, [operations.Details](../../models/operations/details.md)> | :heavy_minus_sign:                                                       | N/A                                                                      | {<br/>"database": {<br/>"status": "up"<br/>}<br/>}                       |