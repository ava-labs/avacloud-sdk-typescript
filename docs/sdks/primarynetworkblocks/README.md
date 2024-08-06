# PrimaryNetworkBlocks
(*primaryNetworkBlocks*)

## Overview

Find information about blocks on Avalanche's Primary Network Chains - the P-Chain, the X-Chain, and the C-Chain.

### Available Operations

* [getBlockById](#getblockbyid) - Get block
* [listPrimaryNetworkBlocksByNodeId](#listprimarynetworkblocksbynodeid) - List blocks proposed by node
* [listLatestPrimaryNetworkBlocks](#listlatestprimarynetworkblocks) - List latest blocks

## getBlockById

Gets a block by block height or block hash on one of the Primary Network chains.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkBlocks.getBlockById({
    blockchainId: "p-chain",
    network: "mainnet",
    blockId: "5615di9ytxujackzaXNrVuWQy5y8Yrt8chPCscMr5Ku9YxJ1S",
  });

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
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkBlocks.listPrimaryNetworkBlocksByNodeId({
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
    nodeId: "NodeID-111111111111111111116DBWJs",
  });

  // Handle the result
  console.log(result)
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

**Promise\<[components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLatestPrimaryNetworkBlocks

Lists latest blocks on one of the Primary Network chains.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkBlocks.listLatestPrimaryNetworkBlocks({
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
  });

  // Handle the result
  console.log(result)
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

**Promise\<[components.ListPrimaryNetworkBlocksResponse](../../models/components/listprimarynetworkblocksresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
