# TokenReputation

Indicates the reputation of the token based on a security analysis. 'Benign' suggests the token is likely safe, while 'Malicious'  indicates potential security risks. This field is nullable and is only populated for tokens on the C-Chain. Possible values are 'Benign', 'Malicious', or null if the  reputation is unknown.

## Example Usage

```typescript
import { TokenReputation } from "@avalabs/avacloud-sdk/models/components";

let value: TokenReputation = null;
```

## Values

```typescript
"Malicious" | "Benign"
```