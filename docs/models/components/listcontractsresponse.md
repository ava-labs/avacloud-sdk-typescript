# ListContractsResponse

## Example Usage

```typescript
import { ListContractsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListContractsResponse = {
  contracts: [
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      ercType: "UNKNOWN",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `contracts`                                                                                                                            | *components.Contracts*[]                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |