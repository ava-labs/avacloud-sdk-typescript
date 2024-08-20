# ListTransfersResponse

## Example Usage

```typescript
import { ListTransfersResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListTransfersResponse = {
    transfers: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `transfers`                                                                                                                            | *components.Transfers*[]                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |