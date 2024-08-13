# HealthCheckV2ResponseBody

The Health Check is successful

## Fields

| Field       | Type                                                                                           | Required | Description | Example                                                            |
| ----------- | ---------------------------------------------------------------------------------------------- | -------- | ----------- | ------------------------------------------------------------------ |
| `status`  | *string*                                                                                     | ➖       | N/A         | ok                                                                 |
| `info`    | Record<string,[operations.HealthCheckV2Info](../../models/operations/healthcheckv2info.md)>       | ➖       | N/A         | {``"database": {``"status": "up"``}``} |
| `error`   | Record<string,[operations.HealthCheckV2Error](../../models/operations/healthcheckv2error.md)>     | ➖       | N/A         | {}                                                                 |
| `details` | Record<string,[operations.HealthCheckV2Details](../../models/operations/healthcheckv2details.md)> | ➖       | N/A         | {``"database": {``"status": "up"``}``} |
