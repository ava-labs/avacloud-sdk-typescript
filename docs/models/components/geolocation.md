# Geolocation

The geographical location of the validator node, if available.

## Example Usage

```typescript
import { Geolocation } from "@avalabs/avacloud-sdk/models/components";

let value: Geolocation = {
  city: "Antelope",
  country: "Oman",
  countryCode: "NR",
  latitude: 6205.17,
  longitude: 1551.06,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `city`                                  | *string*                                | :heavy_check_mark:                      | The name of the validator node.         |
| `country`                               | *string*                                | :heavy_check_mark:                      | The city of the validator node.         |
| `countryCode`                           | *string*                                | :heavy_check_mark:                      | The country code of the validator node. |
| `latitude`                              | *number*                                | :heavy_check_mark:                      | The latitude of the validator node.     |
| `longitude`                             | *number*                                | :heavy_check_mark:                      | The longitude of the validator node.    |