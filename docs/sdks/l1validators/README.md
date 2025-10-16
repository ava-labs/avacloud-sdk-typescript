# L1Validators
(*metrics.l1Validators*)

## Overview

### Available Operations

* [listMetrics](#listmetrics) - Get given metric for all validators
* [getMetricsByValidationId](#getmetricsbyvalidationid) - Get metric values with given validationId and timestamp range
* [getMetricsByNodeId](#getmetricsbynodeid) - Get metric values with given nodeId and timestamp range
* [getMetricsBySubnetId](#getmetricsbysubnetid) - Get metric values with given subnetId and timestamp range

## listMetrics

Get given metric's value for all validators.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.l1Validators.listMetrics({
    metric: "totalValidatorFeesDaily",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { metricsL1ValidatorsListMetrics } from "@avalabs/avacloud-sdk/funcs/metricsL1ValidatorsListMetrics.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsL1ValidatorsListMetrics(avaCloudSDK, {
    metric: "totalValidatorFeesDaily",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsL1ValidatorsListMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTotalL1ValidatorMetricsRequest](../../models/operations/gettotall1validatormetricsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.MetricsApiResponse](../../models/components/metricsapiresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getMetricsByValidationId

Get given metric values for a given validationId with or without a timestamp range.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.l1Validators.getMetricsByValidationId({
    l1ValidationId: "2YYCZGHjqnbw1MzQ5fGrTp3SjqUu8y1J1xeW4yuhdXe4LoUVVG",
    metric: "validationFeesDaily",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { metricsL1ValidatorsGetMetricsByValidationId } from "@avalabs/avacloud-sdk/funcs/metricsL1ValidatorsGetMetricsByValidationId.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsL1ValidatorsGetMetricsByValidationId(avaCloudSDK, {
    l1ValidationId: "2YYCZGHjqnbw1MzQ5fGrTp3SjqUu8y1J1xeW4yuhdXe4LoUVVG",
    metric: "validationFeesDaily",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsL1ValidatorsGetMetricsByValidationId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricsByValidationIdRequest](../../models/operations/getmetricsbyvalidationidrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.MetricsApiResponse](../../models/components/metricsapiresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getMetricsByNodeId

Get given metric values for a given nodeId with or without a timestamp range.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.l1Validators.getMetricsByNodeId({
    metric: "perNodeDailyFeesPaid",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    nodeId: "NodeID-JQPadXEMWtRtJyXrisyDNWuXKSjSf9D36",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { metricsL1ValidatorsGetMetricsByNodeId } from "@avalabs/avacloud-sdk/funcs/metricsL1ValidatorsGetMetricsByNodeId.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsL1ValidatorsGetMetricsByNodeId(avaCloudSDK, {
    metric: "perNodeDailyFeesPaid",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    nodeId: "NodeID-JQPadXEMWtRtJyXrisyDNWuXKSjSf9D36",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsL1ValidatorsGetMetricsByNodeId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricsByNodeIdRequest](../../models/operations/getmetricsbynodeidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.MetricsApiResponse](../../models/components/metricsapiresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getMetricsBySubnetId

Get given metric values for a given subnetId with or without a timestamp range.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.l1Validators.getMetricsBySubnetId({
    metric: "perSubnetDailyFeesPaid",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    subnetId: "eYwmVU67LmSfZb1RwqCMhBYkFyG8ftxn6jAwqzFmxC9STBWLC",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { metricsL1ValidatorsGetMetricsBySubnetId } from "@avalabs/avacloud-sdk/funcs/metricsL1ValidatorsGetMetricsBySubnetId.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsL1ValidatorsGetMetricsBySubnetId(avaCloudSDK, {
    metric: "perSubnetDailyFeesPaid",
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    subnetId: "eYwmVU67LmSfZb1RwqCMhBYkFyG8ftxn6jAwqzFmxC9STBWLC",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsL1ValidatorsGetMetricsBySubnetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricsBySubnetIdRequest](../../models/operations/getmetricsbysubnetidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.MetricsApiResponse](../../models/components/metricsapiresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |