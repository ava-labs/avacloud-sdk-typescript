# DataHealthCheckResponseBody

The Health Check is successful

## Example Usage

```typescript
import { DataHealthCheckResponseBody } from "@avalabs/avacloud-sdk/models/operations";

let value: DataHealthCheckResponseBody = {
    status: "ok",
    info: {
        database: {
            status: "up",
            additionalProperties: {},
        },
    },
    error: {},
    details: {
        database: {
            status: "up",
            additionalProperties: {},
        },
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `status`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | ok                                                                                                     |
| `info`                                                                                                 | Record<string, [operations.DataHealthCheckInfo](../../models/operations/datahealthcheckinfo.md)>       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | {<br/>"database": {<br/>"status": "up"<br/>}<br/>}                                                     |
| `error`                                                                                                | Record<string, [operations.DataHealthCheckError](../../models/operations/datahealthcheckerror.md)>     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | {}                                                                                                     |
| `details`                                                                                              | Record<string, [operations.DataHealthCheckDetails](../../models/operations/datahealthcheckdetails.md)> | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | {<br/>"database": {<br/>"status": "up"<br/>}<br/>}                                                     |