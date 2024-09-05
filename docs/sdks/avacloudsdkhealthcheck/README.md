# AvaCloudSDKHealthCheck
(*data.healthCheck*)

## Overview

### Available Operations

* [dataHealthCheck](#datahealthcheck) - Get the health of the service

## dataHealthCheck

Get the health of the service

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.healthCheck.dataHealthCheck();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataHealthCheckDataHealthCheck } from "@avalabs/avacloud-sdk/funcs/dataHealthCheckDataHealthCheck.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataHealthCheckDataHealthCheck(avaCloudSDK);

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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.DataHealthCheckResponseBody](../../models/operations/datahealthcheckresponsebody.md)\>**

### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.DataHealthCheckResponseBody | 503                                | application/json                   |
| errors.SDKError                    | 4xx-5xx                            | */*                                |
