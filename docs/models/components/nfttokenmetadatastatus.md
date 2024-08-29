# NftTokenMetadataStatus

The metadata indexing status of the nft.

## Example Usage

```typescript
import { NftTokenMetadataStatus } from "@avalabs/avacloud-sdk/models/components";

let value: NftTokenMetadataStatus = "METADATA_CONTENT_TOO_LARGE";
```

## Values

```typescript
"UNKNOWN" | "MISSING_TOKEN" | "INVALID_TOKEN_URI" | "INVALID_TOKEN_URI_SCHEME" | "UNREACHABLE_TOKEN_URI" | "THROTTLED_TOKEN_URI" | "METADATA_CONTENT_TOO_LARGE" | "INVALID_METADATA" | "INVALID_METADATA_JSON" | "INDEXED" | "UNINDEXED"
```