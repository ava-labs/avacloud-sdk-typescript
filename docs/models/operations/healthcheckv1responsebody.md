# HealthCheckV1ResponseBody

The Health Check is successful

## Fields

| Field       | Type                                                                 | Required | Description | Example                                                            |
| ----------- | -------------------------------------------------------------------- | -------- | ----------- | ------------------------------------------------------------------ |
| `status`  | *string*                                                           | ➖       | N/A         | ok                                                                 |
| `info`    | Record<string,[operations.Info](../../models/operations/info.md)>       | ➖       | N/A         | {``"database": {``"status": "up"``}``} |
| `error`   | Record<string,[operations.ErrorT](../../models/operations/errort.md)>   | ➖       | N/A         | {}                                                                 |
| `details` | Record<string,[operations.Details](../../models/operations/details.md)> | ➖       | N/A         | {``"database": {``"status": "up"``}``} |
