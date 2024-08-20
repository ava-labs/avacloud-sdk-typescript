# Blocks
(*glacier.primaryNetwork.blocks*)

### Available Operations

* [getBlockById](#getblockbyid) - Get block
* [listPrimaryNetworkBlocksByNodeId](#listprimarynetworkblocksbynodeid) - List blocks proposed by node
* [listLatestPrimaryNetworkBlocks](#listlatestprimarynetworkblocks) - List latest blocks

## getBlockById

Gets a block by block height or block hash on one of the Primary Network chains.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.primaryNetwork.blocks.getBlockById({
    blockchainId: "p-chain",
    network: "mainnet",
    blockId: "5615di9ytxujackzaXNrVuWQy5y8Yrt8chPCscMr5Ku9YxJ1S",
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
import { glacierPrimaryNetworkBlocksGetBlockById } from "@avalabs/avalanche-sdk/funcs/glacierPrimaryNetworkBlocksGetBlockById.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierPrimaryNetworkBlocksGetBlockById(avalancheSDK, {
    blockchainId: "p-chain",
    network: "mainnet",
    blockId: "5615di9ytxujackzaXNrVuWQy5y8Yrt8chPCscMr5Ku9YxJ1S",
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
| `request`                                                                                                                                                                      | [operations.GetBlockByIdRequest](../../models/operations/getblockbyidrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.GetPrimaryNetworkBlockResponse](../../models/components/getprimarynetworkblockresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listPrimaryNetworkBlocksByNodeId

Lists the latest blocks proposed by a given NodeID on one of the Primary Network chains.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.primaryNetwork.blocks.listPrimaryNetworkBlocksByNodeId({
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
    nodeId: "NodeID-111111111111111111116DBWJs",
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
import { glacierPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId } from "@avalabs/avalanche-sdk/funcs/glacierPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId(avalancheSDK, {
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
    nodeId: "NodeID-111111111111111111116DBWJs",
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
| `request`                                                                                                                                                                      | [operations.ListPrimaryNetworkBlocksByNodeIdRequest](../../models/operations/listprimarynetworkblocksbynodeidrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListPrimaryNetworkBlocksByNodeIdResponse](../../models/operations/listprimarynetworkblocksbynodeidresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLatestPrimaryNetworkBlocks

Lists latest blocks on one of the Primary Network chains.

### Example Usage

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avalancheSDK.glacier.primaryNetwork.blocks.listLatestPrimaryNetworkBlocks({
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
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
import { glacierPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks } from "@avalabs/avalanche-sdk/funcs/glacierPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks.js";

// Use `AvalancheSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avalancheSDK = new AvalancheSDKCore({
  glacierApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await glacierPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks(avalancheSDK, {
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
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
| `request`                                                                                                                                                                      | [operations.ListLatestPrimaryNetworkBlocksRequest](../../models/operations/listlatestprimarynetworkblocksrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListLatestPrimaryNetworkBlocksResponse](../../models/operations/listlatestprimarynetworkblocksresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
