<!-- Start SDK Example Usage [usage] -->
```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
    glacierApiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avalancheSDK.glacier.healthCheck.glacierHealthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->