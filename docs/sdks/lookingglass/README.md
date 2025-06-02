# LookingGlass
(*lookingGlass*)

## Overview

Looking Glass is a tool that allows users to look up information for future airdrops.

### Available Operations

* [compositeQuery](#compositequery) - Composite query

## compositeQuery

Composite query to get list of addresses from multiple subqueries.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.lookingGlass.compositeQuery({
    queries: [
      {
        id: "<id>",
        type: "LatestBalance",
        params: {
          minBalance: "<value>",
          evmChainId: "<id>",
          tokenType: "NATIVE",
        },
      },
      {
        id: "<id>",
        type: "AllTimeNftHolders",
        params: {
          firstDate: "<value>",
          lastDate: "<value>",
          evmChainId: "<id>",
          contractAddress: "<value>",
        },
      },
      {
        id: "<id>",
        type: "AnyTimeErc20Balance",
        params: {
          firstDate: "<value>",
          lastDate: "<value>",
          minBalance: "<value>",
          evmChainId: "<id>",
          contractAddress: "<value>",
        },
      },
    ],
    operator: "OR",
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
import { lookingGlassCompositeQuery } from "@avalabs/avacloud-sdk/funcs/lookingGlassCompositeQuery.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await lookingGlassCompositeQuery(avaCloudSDK, {
    queries: [
      {
        id: "<id>",
        type: "LatestBalance",
        params: {
          minBalance: "<value>",
          evmChainId: "<id>",
          tokenType: "NATIVE",
        },
      },
      {
        id: "<id>",
        type: "AllTimeNftHolders",
        params: {
          firstDate: "<value>",
          lastDate: "<value>",
          evmChainId: "<id>",
          contractAddress: "<value>",
        },
      },
      {
        id: "<id>",
        type: "AnyTimeErc20Balance",
        params: {
          firstDate: "<value>",
          lastDate: "<value>",
          minBalance: "<value>",
          evmChainId: "<id>",
          contractAddress: "<value>",
        },
      },
    ],
    operator: "OR",
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
| `request`                                                                                                                                                                      | [components.CompositeQueryRequestDto](../../models/components/compositequeryrequestdto.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CompositeQueryV2Response](../../models/operations/compositequeryv2response.md)\>**

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