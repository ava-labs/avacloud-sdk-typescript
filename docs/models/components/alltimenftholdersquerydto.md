# AllTimeNftHoldersQueryDto

## Example Usage

```typescript
import { AllTimeNftHoldersQueryDto } from "@avalabs/avacloud-sdk/models/components";

let value: AllTimeNftHoldersQueryDto = {
  id: "<id>",
  type: "AllTimeNftHolders",
  params: {
    evmChainId: "<value>",
    contractAddress: "<value>",
    startTs: 6399.21,
    endTs: 1433.53,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [components.AllTimeNftHoldersQueryDtoType](../../models/components/alltimenftholdersquerydtotype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `params`                                                                                             | *components.Params*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |