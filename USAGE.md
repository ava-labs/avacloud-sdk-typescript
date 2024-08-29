<!-- Start SDK Example Usage [usage] -->
```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.glacier.healthCheck.glacierHealthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->