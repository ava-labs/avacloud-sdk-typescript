# Balances
(*data.primaryNetwork.balances*)

## Overview

### Available Operations

* [getBalancesByAddresses](#getbalancesbyaddresses) - Get balances

## getBalancesByAddresses

Gets primary network balances for one of the Primary Network chains for the supplied addresses.

C-Chain balances returned are only the shared atomic memory balance. For EVM balance, use the `/v1/chains/:chainId/addresses/:addressId/balances:getNative` endpoint.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.primaryNetwork.balances.getBalancesByAddresses({
    blockTimestamp: 1599696000,
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    blockchainId: "p-chain",
    network: "mainnet",
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
import { dataPrimaryNetworkBalancesGetBalancesByAddresses } from "@avalabs/avacloud-sdk/funcs/dataPrimaryNetworkBalancesGetBalancesByAddresses.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataPrimaryNetworkBalancesGetBalancesByAddresses(avaCloudSDK, {
    blockTimestamp: 1599696000,
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    blockchainId: "p-chain",
    network: "mainnet",
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
| `request`                                                                                                                                                                      | [operations.GetBalancesByAddressesRequest](../../models/operations/getbalancesbyaddressesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetBalancesByAddressesResponseBody](../../models/operations/getbalancesbyaddressesresponsebody.md)\>**

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