# AggregateSignaturesRequest

## Example Usage

```typescript
import { AggregateSignaturesRequest } from "@avalabs/avacloud-sdk/models/operations";

let value: AggregateSignaturesRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `network`                                                                                      | [components.GlobalParamNetwork](../../models/components/globalparamnetwork.md)                 | :heavy_minus_sign:                                                                             | Either mainnet or testnet/fuji.                                                                | mainnet                                                                                        |
| `signatureAggregatorRequest`                                                                   | [components.SignatureAggregatorRequest](../../models/components/signatureaggregatorrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |