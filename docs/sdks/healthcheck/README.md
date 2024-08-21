# HealthCheck
(*glacier.healthCheck*)

## Overview

### Available Operations

* [glacierHealthCheck](#glacierhealthcheck) - Get the health of the service

## glacierHealthCheck

Get the health of the service

### Example Usage

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
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvalancheSDKCore } from "@avalabs/avalanche-sdk/core.js";
import { glacierHealthCheckGlacierHealthCheck } from "@avalabs/avalanche-sdk/funcs/glacierHealthCheckGlacierHealthCheck.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await glacierHealthCheckGlacierHealthCheck(avalancheSDK);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GlacierHealthCheckResponseBody](../../models/operations/glacierhealthcheckresponsebody.md)\>**

### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GlacierHealthCheckResponseBody | 503                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |
