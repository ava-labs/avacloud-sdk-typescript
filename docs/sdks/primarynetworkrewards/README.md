# PrimaryNetworkRewards
(*primaryNetworkRewards*)

## Overview

Find information about rewards on Avalanche's Primary Network.

### Available Operations

* [listPendingPrimaryNetworkRewards](#listpendingprimarynetworkrewards) - List pending rewards
* [listHistoricalPrimaryNetworkRewards](#listhistoricalprimarynetworkrewards) - List historical rewards

## listPendingPrimaryNetworkRewards

Lists pending rewards on the Primary Network for the supplied addresses.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkRewards.listPendingPrimaryNetworkRewards({
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    pageSize: 10,
    network: "mainnet",
    nodeIds: "NodeID-111111111111111111116DBWJs,NodeID-222222222222222222227DBWJs",
    sortOrder: "asc",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPendingPrimaryNetworkRewardsRequest](../../models/operations/listpendingprimarynetworkrewardsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.ListPendingRewardsResponse](../../models/components/listpendingrewardsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listHistoricalPrimaryNetworkRewards

Lists historical rewards on the Primary Network for the supplied addresses.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkRewards.listHistoricalPrimaryNetworkRewards({
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    pageSize: 10,
    network: "mainnet",
    nodeIds: "NodeID-111111111111111111116DBWJs,NodeID-222222222222222222227DBWJs",
    sortOrder: "asc",
    currency: "usd",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHistoricalPrimaryNetworkRewardsRequest](../../models/operations/listhistoricalprimarynetworkrewardsrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.ListHistoricalRewardsResponse](../../models/components/listhistoricalrewardsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
