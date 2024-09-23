# CompositeQueryRequestDto

## Example Usage

```typescript
import { CompositeQueryRequestDto } from "@avalabs/avacloud-sdk/models/components";

let value: CompositeQueryRequestDto = {
  queries: [
    {
      id: "<id>",
      type: "LatestBalanceStarsArena",
      params: {
        minBalance: "<value>",
        subjectAddress: "<value>",
      },
    },
  ],
  operator: "OR",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `pageToken`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | A page token, received from a previous list call. Provide this to retrieve the subsequent page. |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | The maximum number of items to return.                                                          |
| `queries`                                                                                       | *components.Queries*[]                                                                          | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `operator`                                                                                      | [components.Operator](../../models/components/operator.md)                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |