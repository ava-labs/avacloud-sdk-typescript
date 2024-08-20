# AvalancheSDKBalances
(*glacier.evm.balances*)

### Available Operations

* [getNativeBalance](#getnativebalance) - Get native token balance
* [listErc20Balances](#listerc20balances) - List ERC-20 balances
* [listErc721Balances](#listerc721balances) - List ERC-721 balances
* [listErc1155Balances](#listerc1155balances) - List ERC-1155 balances
* [listCollectibleBalances](#listcollectiblebalances) - List collectible (ERC-721/ERC-1155) balances

## getNativeBalance

Gets native token balance of a wallet address.

Balance at a given block can be retrieved with the `blockNumber` parameter.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.balances.getNativeBalance({
    blockNumber: "6479329",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    currency: "usd",
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
import { glacierEvmBalancesGetNativeBalance } from "@avalabs/avalanche-sdk/funcs/glacierEvmBalancesGetNativeBalance.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmBalancesGetNativeBalance(avalancheSDK, {
    blockNumber: "6479329",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    currency: "usd",
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
| `request`                                                                                                                                                                      | [operations.GetNativeBalanceRequest](../../models/operations/getnativebalancerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.GetNativeBalanceResponse](../../models/components/getnativebalanceresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listErc20Balances

Lists ERC-20 token balances of a wallet address.

Balance at a given block can be retrieved with the `blockNumber` parameter.

Balance for specific contracts can be retrieved with the `contractAddresses` parameter.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.balances.listErc20Balances({
    blockNumber: "6479329",
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddresses: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7, 0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
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
import { glacierEvmBalancesListErc20Balances } from "@avalabs/avalanche-sdk/funcs/glacierEvmBalancesListErc20Balances.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmBalancesListErc20Balances(avalancheSDK, {
    blockNumber: "6479329",
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddresses: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7, 0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
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
| `request`                                                                                                                                                                      | [operations.ListErc20BalancesRequest](../../models/operations/listerc20balancesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListErc20BalancesResponse](../../models/operations/listerc20balancesresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listErc721Balances

Lists ERC-721 token balances of a wallet address.

Balance for a specific contract can be retrieved with the `contractAddress` parameter.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.balances.listErc721Balances({
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
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
import { glacierEvmBalancesListErc721Balances } from "@avalabs/avalanche-sdk/funcs/glacierEvmBalancesListErc721Balances.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmBalancesListErc721Balances(avalancheSDK, {
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
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
| `request`                                                                                                                                                                      | [operations.ListErc721BalancesRequest](../../models/operations/listerc721balancesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListErc721BalancesResponse](../../models/operations/listerc721balancesresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listErc1155Balances

Lists ERC-1155 token balances of a wallet address.

Balance at a given block can be retrieved with the `blockNumber` parameter.

Balance for a specific contract can be retrieved with the `contractAddress` parameter.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.balances.listErc1155Balances({
    blockNumber: "6479329",
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
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
import { glacierEvmBalancesListErc1155Balances } from "@avalabs/avalanche-sdk/funcs/glacierEvmBalancesListErc1155Balances.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmBalancesListErc1155Balances(avalancheSDK, {
    blockNumber: "6479329",
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
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
| `request`                                                                                                                                                                      | [operations.ListErc1155BalancesRequest](../../models/operations/listerc1155balancesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListErc1155BalancesResponse](../../models/operations/listerc1155balancesresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCollectibleBalances

Lists ERC-721 and ERC-1155 token balances of a wallet address.

Balance for a specific contract can be retrieved with the `contractAddress` parameter.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.balances.listCollectibleBalances({
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
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
import { glacierEvmBalancesListCollectibleBalances } from "@avalabs/avalanche-sdk/funcs/glacierEvmBalancesListCollectibleBalances.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmBalancesListCollectibleBalances(avalancheSDK, {
    pageSize: 10,
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
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
| `request`                                                                                                                                                                      | [operations.ListCollectibleBalancesRequest](../../models/operations/listcollectiblebalancesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListCollectibleBalancesResponse](../../models/operations/listcollectiblebalancesresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
