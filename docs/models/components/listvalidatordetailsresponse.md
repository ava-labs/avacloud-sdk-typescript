# ListValidatorDetailsResponse

## Example Usage

```typescript
import { ListValidatorDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListValidatorDetailsResponse = {
  validators: [
    {
      txHash: "<value>",
      nodeId: "<id>",
      subnetId: "<id>",
      amountStaked: "<value>",
      startTimestamp: 5436.78,
      endTimestamp: 2826.99,
      removeTxHash: "<value>",
      removeTimestamp: 302.35,
      validationStatus: "removed",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `validators`                                                                                                                           | *components.Validators*[]                                                                                                              | :heavy_check_mark:                                                                                                                     | The list of validator Details.                                                                                                         |