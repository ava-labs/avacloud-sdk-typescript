# Rewards
(*glacier.primaryNetwork.rewards*)

### Available Operations

* [listPendingPrimaryNetworkRewards](#listpendingprimarynetworkrewards) - List pending rewards
* [listHistoricalPrimaryNetworkRewards](#listhistoricalprimarynetworkrewards) - List historical rewards

## listPendingPrimaryNetworkRewards

Lists pending rewards on the Primary Network for the supplied addresses.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
  const result = await avalancheSDK.glacier.primaryNetwork.rewards.listPendingPrimaryNetworkRewards({
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    pageSize: 10,
    network: "mainnet",
    nodeIds: "NodeID-111111111111111111116DBWJs,NodeID-222222222222222222227DBWJs",
    sortOrder: "asc",
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { AvalancheSDKCore } from "@avalabs/avalanche-sdk/core.js";
import { glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards } from "@avalabs/avalanche-sdk/funcs/glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore();

async function run() {
  const res = await glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards(avalancheSDK, {
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    pageSize: 10,
    network: "mainnet",
    nodeIds: "NodeID-111111111111111111116DBWJs,NodeID-222222222222222222227DBWJs",
    sortOrder: "asc",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |


### Response

**Promise\<[operations.ListPendingPrimaryNetworkRewardsResponse](../../models/operations/listpendingprimarynetworkrewardsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listHistoricalPrimaryNetworkRewards

Lists historical rewards on the Primary Network for the supplied addresses.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
  const result = await avalancheSDK.glacier.primaryNetwork.rewards.listHistoricalPrimaryNetworkRewards({
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    pageSize: 10,
    network: "mainnet",
    nodeIds: "NodeID-111111111111111111116DBWJs,NodeID-222222222222222222227DBWJs",
    sortOrder: "asc",
    currency: "usd",
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { AvalancheSDKCore } from "@avalabs/avalanche-sdk/core.js";
import { glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards } from "@avalabs/avalanche-sdk/funcs/glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore();

async function run() {
  const res = await glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(avalancheSDK, {
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    pageSize: 10,
    network: "mainnet",
    nodeIds: "NodeID-111111111111111111116DBWJs,NodeID-222222222222222222227DBWJs",
    sortOrder: "asc",
    currency: "usd",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |


### Response

**Promise\<[operations.ListHistoricalPrimaryNetworkRewardsResponse](../../models/operations/listhistoricalprimarynetworkrewardsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |