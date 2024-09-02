# AnyTimeNftHoldersQueryDto

## Example Usage

```typescript
import { AnyTimeNftHoldersQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AnyTimeNftHoldersQueryDto = {
    id: "<id>",
    type: "AnyTimeNftHolders",
    params: {
        firstDate: "<value>",
        lastDate: "<value>",
        evmChainId: "<value>",
        contractAddress: "<value>",
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [components.AnyTimeNftHoldersQueryDtoType](../../models/components/anytimenftholdersquerydtotype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `params`                                                                                             | *components.AnyTimeNftHoldersQueryDtoParams*                                                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |