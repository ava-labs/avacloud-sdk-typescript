# Transactions
(*data.evm.transactions*)

## Overview

### Available Operations

* [listLatestAllChains](#listlatestallchains) - List the latest transactions across all supported EVM chains
* [get](#get) - Get transaction
* [listLatest](#listlatest) - List latest transactions

## listLatestAllChains

Lists the most recent transactions from all supported EVM-compatible  chains. The results can be filtered based on transaction status.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.evm.transactions.listLatestAllChains({
    network: "mainnet",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataEvmTransactionsListLatestAllChains } from "@avalabs/avacloud-sdk/funcs/dataEvmTransactionsListLatestAllChains.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataEvmTransactionsListLatestAllChains(avaCloudSDK, {
    network: "mainnet",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLatestTransactionsAllChainsRequest](../../models/operations/listlatesttransactionsallchainsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListLatestTransactionsAllChainsResponse](../../models/operations/listlatesttransactionsallchainsresponse.md)\>**

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

## get

Gets the details of a single transaction.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.evm.transactions.get({
    chainId: "43114",
    txHash: "0x8bf584d7b14b92a32a339872a66b134a70ba3ba7c305823f348db6f860253f45",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataEvmTransactionsGet } from "@avalabs/avacloud-sdk/funcs/dataEvmTransactionsGet.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataEvmTransactionsGet(avaCloudSDK, {
    chainId: "43114",
    txHash: "0x8bf584d7b14b92a32a339872a66b134a70ba3ba7c305823f348db6f860253f45",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionRequest](../../models/operations/gettransactionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.GetTransactionResponse](../../models/components/gettransactionresponse.md)\>**

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

## listLatest

Lists the latest transactions. Filterable by status.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.evm.transactions.listLatest({
    chainId: "43114",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataEvmTransactionsListLatest } from "@avalabs/avacloud-sdk/funcs/dataEvmTransactionsListLatest.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataEvmTransactionsListLatest(avaCloudSDK, {
    chainId: "43114",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLatestTransactionsRequest](../../models/operations/listlatesttransactionsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListLatestTransactionsResponse](../../models/operations/listlatesttransactionsresponse.md)\>**

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