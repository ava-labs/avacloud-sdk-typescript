# ListL1ValidatorsResponse

## Example Usage

```typescript
import { ListL1ValidatorsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListL1ValidatorsResponse = {
  validators: [
    {
      validationId: "<id>",
      nodeId: "<id>",
      subnetId: "<id>",
      weight: 185.22,
      remainingBalance: 7936.98,
      creationTimestamp: 2239.25,
      blsCredentials: {},
      remainingBalanceOwner: {
        addresses: [
          "<value>",
        ],
        threshold: 3453.52,
      },
      deactivationOwner: {
        addresses: [
          "<value>",
        ],
        threshold: 9280.81,
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `validators`                                                                                                                           | [components.L1ValidatorDetailsFull](../../models/components/l1validatordetailsfull.md)[]                                               | :heavy_check_mark:                                                                                                                     | The list of L1 validations for the given Subnet ID, NodeId or validationId                                                             |