# @avalabs/avalanche-sdk

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=<no value>&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:

- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasy.com/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasy.com/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @avalabs/avalanche-sdk
```

### PNPM

```bash
pnpm add @avalabs/avalanche-sdk
```

### Bun

```bash
bun add @avalabs/avalanche-sdk
```

### Yarn

```bash
yarn add @avalabs/avalanche-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.glacier.healthCheck.healthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [glacier.healthCheck](docs/sdks/healthcheck/README.md)

* [healthCheck](docs/sdks/healthcheck/README.md#healthcheck) - Get the health of the service

### [glacier.nfts](docs/sdks/nfts/README.md)

* [reindexNft](docs/sdks/nfts/README.md#reindexnft) - Reindex NFT metadata
* [listTokens](docs/sdks/nfts/README.md#listtokens) - List tokens
* [getTokenDetails](docs/sdks/nfts/README.md#gettokendetails) - Get token details

### [glacier.operations](docs/sdks/operations/README.md)

* [getOperationResult](docs/sdks/operations/README.md#getoperationresult) - Get operation
* [postTransactionExportJob](docs/sdks/operations/README.md#posttransactionexportjob) - Create transaction export operation

### [glacier.primaryNetwork](docs/sdks/primarynetwork/README.md)

* [getAssetDetails](docs/sdks/primarynetwork/README.md#getassetdetails) - Get asset details
* [getChainIdsForAddresses](docs/sdks/primarynetwork/README.md#getchainidsforaddresses) - Get chain interactions for addresses
* [getNetworkDetails](docs/sdks/primarynetwork/README.md#getnetworkdetails) - Get network details
* [listBlockchains](docs/sdks/primarynetwork/README.md#listblockchains) - List blockchains
* [listSubnets](docs/sdks/primarynetwork/README.md#listsubnets) - List subnets
* [listValidators](docs/sdks/primarynetwork/README.md#listvalidators) - List validators
* [getSingleValidatorDetails](docs/sdks/primarynetwork/README.md#getsinglevalidatordetails) - Get single validator details
* [listDelegators](docs/sdks/primarynetwork/README.md#listdelegators) - List delegators

### [glacier.primaryNetwork.transactions](docs/sdks/transactions/README.md)

* [getTxByHash](docs/sdks/transactions/README.md#gettxbyhash) - Get transaction
* [listLatestPrimaryNetworkTransactions](docs/sdks/transactions/README.md#listlatestprimarynetworktransactions) - List latest transactions
* [listActivePrimaryNetworkStakingTransactions](docs/sdks/transactions/README.md#listactiveprimarynetworkstakingtransactions) - List staking transactions
* [listAssetTransactions](docs/sdks/transactions/README.md#listassettransactions) - List asset transactions

### [glacier.primaryNetwork.rewards](docs/sdks/rewards/README.md)

* [listPendingPrimaryNetworkRewards](docs/sdks/rewards/README.md#listpendingprimarynetworkrewards) - List pending rewards
* [listHistoricalPrimaryNetworkRewards](docs/sdks/rewards/README.md#listhistoricalprimarynetworkrewards) - List historical rewards

### [glacier.primaryNetwork.utxos](docs/sdks/utxos/README.md)

* [getUtxosByAddresses](docs/sdks/utxos/README.md#getutxosbyaddresses) - List UTXOs

### [glacier.primaryNetwork.balances](docs/sdks/balances/README.md)

* [getBalancesByAddresses](docs/sdks/balances/README.md#getbalancesbyaddresses) - Get balances

### [glacier.primaryNetwork.blocks](docs/sdks/blocks/README.md)

* [getBlockById](docs/sdks/blocks/README.md#getblockbyid) - Get block
* [listPrimaryNetworkBlocksByNodeId](docs/sdks/blocks/README.md#listprimarynetworkblocksbynodeid) - List blocks proposed by node
* [listLatestPrimaryNetworkBlocks](docs/sdks/blocks/README.md#listlatestprimarynetworkblocks) - List latest blocks

### [glacier.primaryNetwork.vertices](docs/sdks/vertices/README.md)

* [listLatestXChainVertices](docs/sdks/vertices/README.md#listlatestxchainvertices) - List vertices
* [getVertexByHash](docs/sdks/vertices/README.md#getvertexbyhash) - Get vertex
* [getVertexByHeight](docs/sdks/vertices/README.md#getvertexbyheight) - List vertices by height

### [glacier.webhooks](docs/sdks/webhooks/README.md)

* [listWebhooks](docs/sdks/webhooks/README.md#listwebhooks) - List webhooks
* [createWebhook](docs/sdks/webhooks/README.md#createwebhook) - Create a webhook
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook by ID
* [deactivateWebhook](docs/sdks/webhooks/README.md#deactivatewebhook) - Deactivate a webhook
* [updateWebhook](docs/sdks/webhooks/README.md#updatewebhook) - Update a webhook
* [generateSharedSecret](docs/sdks/webhooks/README.md#generatesharedsecret) - Generate a shared secret
* [getSharedSecret](docs/sdks/webhooks/README.md#getsharedsecret) - Get a shared secret
* [getAddressesFromWebhook](docs/sdks/webhooks/README.md#getaddressesfromwebhook) - List adresses by webhook
* [removeAddressesFromWebhook](docs/sdks/webhooks/README.md#removeaddressesfromwebhook) - Remove addresses from webhook
* [addAddressesToWebhook](docs/sdks/webhooks/README.md#addaddressestowebhook) - Add addresses to webhook

### [glacier.teleporter](docs/sdks/teleporter/README.md)

* [getTeleporterMessage](docs/sdks/teleporter/README.md#getteleportermessage) - Get a teleporter message
* [listTeleporterMessages](docs/sdks/teleporter/README.md#listteleportermessages) - List teleporter messages


### [glacier.evm.balances](docs/sdks/avalanchesdkbalances/README.md)

* [getNativeBalance](docs/sdks/avalanchesdkbalances/README.md#getnativebalance) - Get native token balance
* [listErc20Balances](docs/sdks/avalanchesdkbalances/README.md#listerc20balances) - List ERC-20 balances
* [listErc721Balances](docs/sdks/avalanchesdkbalances/README.md#listerc721balances) - List ERC-721 balances
* [listErc1155Balances](docs/sdks/avalanchesdkbalances/README.md#listerc1155balances) - List ERC-1155 balances
* [listCollectibleBalances](docs/sdks/avalanchesdkbalances/README.md#listcollectiblebalances) - List collectible (ERC-721/ERC-1155) balances

### [glacier.evm.blocks](docs/sdks/avalanchesdkblocks/README.md)

* [getLatestBlocks](docs/sdks/avalanchesdkblocks/README.md#getlatestblocks) - List latest blocks
* [getBlock](docs/sdks/avalanchesdkblocks/README.md#getblock) - Get block

### [glacier.evm.transactions](docs/sdks/avalanchesdktransactions/README.md)

* [getDeploymentTransaction](docs/sdks/avalanchesdktransactions/README.md#getdeploymenttransaction) - Get deployment transaction
* [listContractDeployments](docs/sdks/avalanchesdktransactions/README.md#listcontractdeployments) - List deployed contracts
* [listTransfers](docs/sdks/avalanchesdktransactions/README.md#listtransfers) - List ERC transfers
* [listTransactions](docs/sdks/avalanchesdktransactions/README.md#listtransactions) - List transactions
* [listNativeTransactions](docs/sdks/avalanchesdktransactions/README.md#listnativetransactions) - List native transactions
* [listErc20Transactions](docs/sdks/avalanchesdktransactions/README.md#listerc20transactions) - List ERC-20 transfers
* [listErc721Transactions](docs/sdks/avalanchesdktransactions/README.md#listerc721transactions) - List ERC-721 transfers
* [listErc1155Transactions](docs/sdks/avalanchesdktransactions/README.md#listerc1155transactions) - List ERC-1155 transfers
* [listInternalTransactions](docs/sdks/avalanchesdktransactions/README.md#listinternaltransactions) - List internal transactions
* [getTransaction](docs/sdks/avalanchesdktransactions/README.md#gettransaction) - Get transaction
* [getTransactionsForBlock](docs/sdks/avalanchesdktransactions/README.md#gettransactionsforblock) - List transactions for a block
* [listLatestTransactions](docs/sdks/avalanchesdktransactions/README.md#listlatesttransactions) - List latest transactions

### [glacier.evm.contracts](docs/sdks/contracts/README.md)

* [getContractMetadata](docs/sdks/contracts/README.md#getcontractmetadata) - Get contract metadata

### [glacier.evm.chains](docs/sdks/chains/README.md)

* [supportedChains](docs/sdks/chains/README.md#supportedchains) - List chains
* [getChainInfo](docs/sdks/chains/README.md#getchaininfo) - Get chain information
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.glacier.healthCheck.healthCheck({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
});

async function run() {
    const result = await avalancheSDK.glacier.healthCheck.healthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.HealthCheckResponseBody | 503                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";
import { SDKValidationError } from "@avalabs/avalanche-sdk/models/errors";

const avalancheSDK = new AvalancheSDK();

async function run() {
    let result;
    try {
        result = await avalancheSDK.glacier.healthCheck.healthCheck();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.HealthCheckResponseBody: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost:3000` | None |

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
    serverIdx: 0,
});

async function run() {
    const result = await avalancheSDK.glacier.healthCheck.healthCheck();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
    serverURL: "http://localhost:3000",
});

async function run() {
    const result = await avalancheSDK.glacier.healthCheck.healthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";
import { HTTPClient } from "@avalabs/avalanche-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new AvalancheSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.glacier.nfts.listTokens({
        pageSize: 10,
        chainId: "43114",
        address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=`<no value>`&utm_campaign=typescript)

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
