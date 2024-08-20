# GetApiLogsRequest

## Example Usage

```typescript
import { GetApiLogsRequest } from "@avalabs/avalanche-sdk/models/operations";

let value: GetApiLogsRequest = {
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `orgId`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Organization ID to fetch usage metrics for                                                      |                                                                                                 |
| `startTimestamp`                                                                                | *number*                                                                                        | :heavy_minus_sign:                                                                              | Query param for retrieving items after a specific timestamp.                                    | 1689541049                                                                                      |
| `endTimestamp`                                                                                  | *number*                                                                                        | :heavy_minus_sign:                                                                              | Query param for retrieving items before a specific timestamp.                                   | 1689800249                                                                                      |
| `pageToken`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | A page token, received from a previous list call. Provide this to retrieve the subsequent page. |                                                                                                 |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | The maximum number of items to return.                                                          |                                                                                                 |