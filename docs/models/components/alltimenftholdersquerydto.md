# AllTimeNftHoldersQueryDto

## Example Usage

```typescript
import { AllTimeNftHoldersQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AllTimeNftHoldersQueryDto = {
    id: "<id>",
    type: "AllTimeNftHolders",
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
| `type`                                                                                               | [components.AllTimeNftHoldersQueryDtoType](../../models/components/alltimenftholdersquerydtotype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `params`                                                                                             | *components.Params*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |