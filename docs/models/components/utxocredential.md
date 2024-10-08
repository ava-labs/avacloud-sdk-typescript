# UtxoCredential

## Example Usage

```typescript
import { UtxoCredential } from "@avalabs/avacloud-sdk/models/components";

let value: UtxoCredential = {
  signature:
    "bWWoZUu0Z3STjuk/+2az7M4vP0oqc9NtiA7kOdqINCIE/2+5va5R1KNCWwEX5jE1xVHLvAxU2LHTN5gK8m84HwA",
  publicKey: "AdMQOtubgBFFJu++0faHPIIA6KmdZ2ERErMRGzyy6juI",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `signature`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Signature provided to consume the output.                                               | bWWoZUu0Z3STjuk/+2az7M4vP0oqc9NtiA7kOdqINCIE/2+5va5R1KNCWwEX5jE1xVHLvAxU2LHTN5gK8m84HwA |
| `publicKey`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Public key associated with the signature.                                               | AdMQOtubgBFFJu++0faHPIIA6KmdZ2ERErMRGzyy6juI                                            |