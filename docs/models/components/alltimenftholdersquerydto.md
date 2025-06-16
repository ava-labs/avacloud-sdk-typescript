# AllTimeNftHoldersQueryDto

## Example Usage

```typescript
import { AllTimeNftHoldersQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AllTimeNftHoldersQueryDto = {
  id: "<id>",
  type: "AllTimeNftHolders",
  params: {
    evmChainId: "<id>",
    contractAddress: "<value>",
    startTs: 5574.75,
    endTs: 82.36,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [components.AllTimeNftHoldersQueryDtoType](../../models/components/alltimenftholdersquerydtotype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `params`                                                                                             | *components.Params*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |