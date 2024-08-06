# PrimaryNetworkTransactions
(*primaryNetworkTransactions*)

## Overview

Find information about transactions on Avalanche's Primary Network Chains - the P-Chain, the X-Chain, and the C-Chain.

### Available Operations

* [getTxByHash](#gettxbyhash) - Get transaction
* [listLatestPrimaryNetworkTransactions](#listlatestprimarynetworktransactions) - List latest transactions
* [listActivePrimaryNetworkStakingTransactions](#listactiveprimarynetworkstakingtransactions) - List staking transactions
* [listAssetTransactions](#listassettransactions) - List asset transactions

## getTxByHash

Gets the details of a single transaction on one of the Primary Network chains.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkTransactions.getTxByHash({
    blockchainId: "p-chain",
    network: "mainnet",
    txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTxByHashRequest](../../models/operations/gettxbyhashrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.GetTxByHashResponseBody](../../models/operations/gettxbyhashresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLatestPrimaryNetworkTransactions

Lists the latest transactions on one of the Primary Network chains.

Transactions are filterable by addresses, txTypes, and timestamps. When querying for latest transactions without an address parameter, filtering by txTypes and timestamps is not supported. An address filter must be provided to utilize txTypes and timestamp filters.

Given that each transaction may return a large number of UTXO objects, bounded only by the maximum transaction size, the query may return less transactions than the provided page size. The result will contain less results than the page size if the number of utxos contained in the resulting transactions reach a performance threshold.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkTransactions.listLatestPrimaryNetworkTransactions({
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    txTypes: [
      "AddValidatorTx",
    ],
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
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
| `request`                                                                                                                                                                      | [operations.ListLatestPrimaryNetworkTransactionsRequest](../../models/operations/listlatestprimarynetworktransactionsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListLatestPrimaryNetworkTransactionsResponseBody](../../models/operations/listlatestprimarynetworktransactionsresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listActivePrimaryNetworkStakingTransactions

Lists active staking transactions on the P-Chain for the supplied addresses.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkTransactions.listActivePrimaryNetworkStakingTransactions({
    addresses: "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
    txTypes: [
      "AddValidatorTx",
    ],
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    pageSize: 10,
    blockchainId: "p-chain",
    network: "mainnet",
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
| `request`                                                                                                                                                                      | [operations.ListActivePrimaryNetworkStakingTransactionsRequest](../../models/operations/listactiveprimarynetworkstakingtransactionsrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.ListPChainTransactionsResponse](../../models/components/listpchaintransactionsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAssetTransactions

Lists asset transactions corresponding to the given asset id on the X-Chain.

### Example Usage

```typescript
import { GlacierSDK } from "@avalabs/glacier-sdk";

const glacierSDK = new GlacierSDK();

async function run() {
  const result = await glacierSDK.primaryNetworkTransactions.listAssetTransactions({
    txTypes: [
      "AddValidatorTx",
    ],
    startTimestamp: 1689541049,
    endTimestamp: 1689800249,
    pageSize: 10,
    blockchainId: "x-chain",
    network: "mainnet",
    assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAssetTransactionsRequest](../../models/operations/listassettransactionsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.ListXChainTransactionsResponse](../../models/components/listxchaintransactionsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
