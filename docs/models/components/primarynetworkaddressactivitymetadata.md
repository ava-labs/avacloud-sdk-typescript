# PrimaryNetworkAddressActivityMetadata

## Example Usage

```typescript
import { PrimaryNetworkAddressActivityMetadata } from "@avalabs/avacloud-sdk/models/components";

let value: PrimaryNetworkAddressActivityMetadata = {
  eventSignatures: [
    "0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64",
  ],
  keyType: "addresses",
  keys: [
    "<value 1>",
  ],
  subEvents: {
    addressActivitySubEvents: [
      "reward_distribution",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eventSignatures`                                                                                                                                             | *string*[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                            | Array of hexadecimal strings of the event signatures.                                                                                                         | [<br/>"0x61cbb2a3dee0b6064c2e681aadd61677fb4ef319f0b547508d495626f5a62f64"<br/>]                                                                              |
| `keyType`                                                                                                                                                     | [components.PlatformAddressActivityKeyType](../../models/components/platformaddressactivitykeytype.md)                                                        | :heavy_check_mark:                                                                                                                                            | The type of key to monitor for the address activity event type.                                                                                               |                                                                                                                                                               |
| `keys`                                                                                                                                                        | *string*[]                                                                                                                                                    | :heavy_check_mark:                                                                                                                                            | Array of keys like addresses corresponding to the keyType being monitored. For PlatformAddressActivity event, an array of multiple addresses can be provided. |                                                                                                                                                               |
| `subEvents`                                                                                                                                                   | [components.PrimaryNetworkAddressActivitySubEvents](../../models/components/primarynetworkaddressactivitysubevents.md)                                        | :heavy_check_mark:                                                                                                                                            | Sub-events to monitor                                                                                                                                         |                                                                                                                                                               |
| `balanceThresholdFilter`                                                                                                                                      | [components.PrimaryNetworkBalanceThresholdFilter](../../models/components/primarynetworkbalancethresholdfilter.md)                                            | :heavy_minus_sign:                                                                                                                                            | Balance threshold filter                                                                                                                                      |                                                                                                                                                               |