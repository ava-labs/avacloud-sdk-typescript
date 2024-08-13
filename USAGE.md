<!-- Start SDK Example Usage [usage] -->
```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.metrics.healthCheck.healthCheckV1();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->