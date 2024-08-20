# Chains
(*glacier.evm.chains*)

### Available Operations

* [supportedChains](#supportedchains) - List chains
* [getChainInfo](#getchaininfo) - Get chain information

## supportedChains

Lists the supported EVM-compatible chains. Filterable by network.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.chains.supportedChains({
    network: "mainnet",
    feature: "nftIndexing",
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
import { glacierEvmChainsSupportedChains } from "@avalabs/avalanche-sdk/funcs/glacierEvmChainsSupportedChains.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmChainsSupportedChains(avalancheSDK, {
    network: "mainnet",
    feature: "nftIndexing",
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
| `request`                                                                                                                                                                      | [operations.SupportedChainsRequest](../../models/operations/supportedchainsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.GlacierListChainsResponse](../../models/components/glacierlistchainsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getChainInfo

Gets chain information for the EVM-compatible chain if supported by the api.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.evm.chains.getChainInfo({});

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { AvalancheSDKCore } from "@avalabs/avalanche-sdk/core.js";
import { glacierEvmChainsGetChainInfo } from "@avalabs/avalanche-sdk/funcs/glacierEvmChainsGetChainInfo.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierEvmChainsGetChainInfo(avalancheSDK, {});

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
| `request`                                                                                                                                                                      | [operations.GetChainInfoRequest](../../models/operations/getchaininforequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.GetChainResponse](../../models/components/getchainresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
