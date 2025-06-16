<!-- Start SDK Example Usage [usage] -->
```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.healthCheck();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->