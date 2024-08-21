# Contracts
(*glacier.evm.contracts*)

## Overview

### Available Operations

* [getContractMetadata](#getcontractmetadata) - Get contract metadata

## getContractMetadata

Gets metadata about the contract at the given address.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.contracts.getContractMetadata({
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvalancheSDKCore } from "@avalabs/avalanche-sdk/core.js";
import { glacierEvmContractsGetContractMetadata } from "@avalabs/avalanche-sdk/funcs/glacierEvmContractsGetContractMetadata.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await glacierEvmContractsGetContractMetadata(avalancheSDK, {
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  });

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
| `request`                                                                                                                                                                      | [operations.GetContractMetadataRequest](../../models/operations/getcontractmetadatarequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetContractMetadataResponseBody](../../models/operations/getcontractmetadataresponsebody.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
