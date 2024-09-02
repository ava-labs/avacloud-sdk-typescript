
<div align="center">
    <h1> AvaCloud SDK TypeScript </h1>
        <p>
            The AvaCloud SDK is a powerful and flexible toolset designed to simplify the integration with AvaCloud's suite of blockchain services. Currently, this SDK is focused on providing robust support for Glacier APIs.          </p>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @avalabs/avacloud-sdk
```

### PNPM

```bash
pnpm add @avalabs/avacloud-sdk
```

### Bun

```bash
bun add @avalabs/avacloud-sdk
```

### Yarn

```bash
yarn add @avalabs/avacloud-sdk zod

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
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.healthCheck.metricsHealthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [metrics.healthCheck](docs/sdks/healthcheck/README.md)

* [metricsHealthCheck](docs/sdks/healthcheck/README.md#metricshealthcheck) - Get the health of the service


### [metrics.evm.chains](docs/sdks/chains/README.md)

* [listChains](docs/sdks/chains/README.md#listchains) - Get a list of supported blockchains
* [getChain](docs/sdks/chains/README.md#getchain) - Get chain information for supported blockchain


### [metrics.chain.metrics](docs/sdks/avacloudsdkmetrics/README.md)

* [getEvmChainMetrics](docs/sdks/avacloudsdkmetrics/README.md#getevmchainmetrics) - Get metrics for EVM chains
* [getEvmChainRollingWindowMetrics](docs/sdks/avacloudsdkmetrics/README.md#getevmchainrollingwindowmetrics) - Get rolling window metrics for EVM chains
* [getStakingMetrics](docs/sdks/avacloudsdkmetrics/README.md#getstakingmetrics) - Get staking metrics for a given subnet

### [metrics.lookingGlass](docs/sdks/lookingglass/README.md)

* [getNftHoldersByContractAddress](docs/sdks/lookingglass/README.md#getnftholdersbycontractaddress) - Get NFT holders by contract address
* [getAddressesByBalanceOverTime](docs/sdks/lookingglass/README.md#getaddressesbybalanceovertime) - Get addresses by balance over time
* [getAddressesByBtcbBridged](docs/sdks/lookingglass/README.md#getaddressesbybtcbbridged) - Get addresses by BTCb bridged balance
* [getValidatorsByDateRange](docs/sdks/lookingglass/README.md#getvalidatorsbydaterange) - Get addresses running validators during a given time frame
* [compositeQuery](docs/sdks/lookingglass/README.md#compositequery) - Composite query


### [data.healthCheck](docs/sdks/avacloudsdkhealthcheck/README.md)

* [dataHealthCheck](docs/sdks/avacloudsdkhealthcheck/README.md#datahealthcheck) - Get the health of the service

### [data.nfts](docs/sdks/nfts/README.md)

* [reindexNft](docs/sdks/nfts/README.md#reindexnft) - Reindex NFT metadata
* [listTokens](docs/sdks/nfts/README.md#listtokens) - List tokens
* [getTokenDetails](docs/sdks/nfts/README.md#gettokendetails) - Get token details

### [data.operations](docs/sdks/operations/README.md)

* [getOperationResult](docs/sdks/operations/README.md#getoperationresult) - Get operation
* [postTransactionExportJob](docs/sdks/operations/README.md#posttransactionexportjob) - Create transaction export operation

### [data.primaryNetwork](docs/sdks/primarynetwork/README.md)

* [getAssetDetails](docs/sdks/primarynetwork/README.md#getassetdetails) - Get asset details
* [getChainIdsForAddresses](docs/sdks/primarynetwork/README.md#getchainidsforaddresses) - Get chain interactions for addresses
* [getNetworkDetails](docs/sdks/primarynetwork/README.md#getnetworkdetails) - Get network details
* [listBlockchains](docs/sdks/primarynetwork/README.md#listblockchains) - List blockchains
* [listSubnets](docs/sdks/primarynetwork/README.md#listsubnets) - List subnets
* [getSubnetById](docs/sdks/primarynetwork/README.md#getsubnetbyid) - Get Subnet details by ID
* [listValidators](docs/sdks/primarynetwork/README.md#listvalidators) - List validators
* [getSingleValidatorDetails](docs/sdks/primarynetwork/README.md#getsinglevalidatordetails) - Get single validator details
* [listDelegators](docs/sdks/primarynetwork/README.md#listdelegators) - List delegators

### [data.primaryNetwork.transactions](docs/sdks/transactions/README.md)

* [getTxByHash](docs/sdks/transactions/README.md#gettxbyhash) - Get transaction
* [listLatestPrimaryNetworkTransactions](docs/sdks/transactions/README.md#listlatestprimarynetworktransactions) - List latest transactions
* [listActivePrimaryNetworkStakingTransactions](docs/sdks/transactions/README.md#listactiveprimarynetworkstakingtransactions) - List staking transactions
* [listAssetTransactions](docs/sdks/transactions/README.md#listassettransactions) - List asset transactions

### [data.primaryNetwork.rewards](docs/sdks/rewards/README.md)

* [listPendingPrimaryNetworkRewards](docs/sdks/rewards/README.md#listpendingprimarynetworkrewards) - List pending rewards
* [listHistoricalPrimaryNetworkRewards](docs/sdks/rewards/README.md#listhistoricalprimarynetworkrewards) - List historical rewards

### [data.primaryNetwork.utxos](docs/sdks/utxos/README.md)

* [getUtxosByAddresses](docs/sdks/utxos/README.md#getutxosbyaddresses) - List UTXOs

### [data.primaryNetwork.balances](docs/sdks/balances/README.md)

* [getBalancesByAddresses](docs/sdks/balances/README.md#getbalancesbyaddresses) - Get balances

### [data.primaryNetwork.blocks](docs/sdks/blocks/README.md)

* [getBlockById](docs/sdks/blocks/README.md#getblockbyid) - Get block
* [listPrimaryNetworkBlocksByNodeId](docs/sdks/blocks/README.md#listprimarynetworkblocksbynodeid) - List blocks proposed by node
* [listLatestPrimaryNetworkBlocks](docs/sdks/blocks/README.md#listlatestprimarynetworkblocks) - List latest blocks

### [data.primaryNetwork.vertices](docs/sdks/vertices/README.md)

* [listLatestXChainVertices](docs/sdks/vertices/README.md#listlatestxchainvertices) - List vertices
* [getVertexByHash](docs/sdks/vertices/README.md#getvertexbyhash) - Get vertex
* [getVertexByHeight](docs/sdks/vertices/README.md#getvertexbyheight) - List vertices by height

### [data.usageMetrics](docs/sdks/usagemetrics/README.md)

* [getApiUsageMetrics](docs/sdks/usagemetrics/README.md#getapiusagemetrics) - Get usage metrics for the Glacier API
* [getApiLogs](docs/sdks/usagemetrics/README.md#getapilogs) - Get logs for requests made by client

### [data.webhooks](docs/sdks/webhooks/README.md)

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

### [data.teleporter](docs/sdks/teleporter/README.md)

* [getTeleporterMessage](docs/sdks/teleporter/README.md#getteleportermessage) - Get a teleporter message
* [listTeleporterMessages](docs/sdks/teleporter/README.md#listteleportermessages) - List teleporter messages


### [data.evm.balances](docs/sdks/avacloudsdkbalances/README.md)

* [getNativeBalance](docs/sdks/avacloudsdkbalances/README.md#getnativebalance) - Get native token balance
* [listErc20Balances](docs/sdks/avacloudsdkbalances/README.md#listerc20balances) - List ERC-20 balances
* [listErc721Balances](docs/sdks/avacloudsdkbalances/README.md#listerc721balances) - List ERC-721 balances
* [listErc1155Balances](docs/sdks/avacloudsdkbalances/README.md#listerc1155balances) - List ERC-1155 balances
* [listCollectibleBalances](docs/sdks/avacloudsdkbalances/README.md#listcollectiblebalances) - List collectible (ERC-721/ERC-1155) balances

### [data.evm.blocks](docs/sdks/avacloudsdkblocks/README.md)

* [getLatestBlocks](docs/sdks/avacloudsdkblocks/README.md#getlatestblocks) - List latest blocks
* [getBlock](docs/sdks/avacloudsdkblocks/README.md#getblock) - Get block

### [data.evm.transactions](docs/sdks/avacloudsdktransactions/README.md)

* [getDeploymentTransaction](docs/sdks/avacloudsdktransactions/README.md#getdeploymenttransaction) - Get deployment transaction
* [listContractDeployments](docs/sdks/avacloudsdktransactions/README.md#listcontractdeployments) - List deployed contracts
* [listTransfers](docs/sdks/avacloudsdktransactions/README.md#listtransfers) - List ERC transfers
* [listTransactions](docs/sdks/avacloudsdktransactions/README.md#listtransactions) - List transactions
* [listNativeTransactions](docs/sdks/avacloudsdktransactions/README.md#listnativetransactions) - List native transactions
* [listErc20Transactions](docs/sdks/avacloudsdktransactions/README.md#listerc20transactions) - List ERC-20 transfers
* [listErc721Transactions](docs/sdks/avacloudsdktransactions/README.md#listerc721transactions) - List ERC-721 transfers
* [listErc1155Transactions](docs/sdks/avacloudsdktransactions/README.md#listerc1155transactions) - List ERC-1155 transfers
* [listInternalTransactions](docs/sdks/avacloudsdktransactions/README.md#listinternaltransactions) - List internal transactions
* [getTransaction](docs/sdks/avacloudsdktransactions/README.md#gettransaction) - Get transaction
* [getTransactionsForBlock](docs/sdks/avacloudsdktransactions/README.md#gettransactionsforblock) - List transactions for a block
* [listLatestTransactions](docs/sdks/avacloudsdktransactions/README.md#listlatesttransactions) - List latest transactions

### [data.evm.contracts](docs/sdks/contracts/README.md)

* [getContractMetadata](docs/sdks/contracts/README.md#getcontractmetadata) - Get contract metadata

### [data.evm.chains](docs/sdks/avacloudsdkchains/README.md)

* [supportedChains](docs/sdks/avacloudsdkchains/README.md#supportedchains) - List chains
* [getChainInfo](docs/sdks/avacloudsdkchains/README.md#getchaininfo) - Get chain information
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [dataEvmBalancesGetNativeBalance](docs/sdks/avacloudsdkbalances/README.md#getnativebalance)
- [dataEvmBalancesListCollectibleBalances](docs/sdks/avacloudsdkbalances/README.md#listcollectiblebalances)
- [dataEvmBalancesListErc1155Balances](docs/sdks/avacloudsdkbalances/README.md#listerc1155balances)
- [dataEvmBalancesListErc20Balances](docs/sdks/avacloudsdkbalances/README.md#listerc20balances)
- [dataEvmBalancesListErc721Balances](docs/sdks/avacloudsdkbalances/README.md#listerc721balances)
- [dataEvmBlocksGetBlock](docs/sdks/avacloudsdkblocks/README.md#getblock)
- [dataEvmBlocksGetLatestBlocks](docs/sdks/avacloudsdkblocks/README.md#getlatestblocks)
- [dataEvmChainsGetChainInfo](docs/sdks/avacloudsdkchains/README.md#getchaininfo)
- [dataEvmChainsSupportedChains](docs/sdks/avacloudsdkchains/README.md#supportedchains)
- [dataEvmContractsGetContractMetadata](docs/sdks/contracts/README.md#getcontractmetadata)
- [dataEvmTransactionsGetDeploymentTransaction](docs/sdks/avacloudsdktransactions/README.md#getdeploymenttransaction)
- [dataEvmTransactionsGetTransaction](docs/sdks/avacloudsdktransactions/README.md#gettransaction)
- [dataEvmTransactionsGetTransactionsForBlock](docs/sdks/avacloudsdktransactions/README.md#gettransactionsforblock)
- [dataEvmTransactionsListContractDeployments](docs/sdks/avacloudsdktransactions/README.md#listcontractdeployments)
- [dataEvmTransactionsListErc1155Transactions](docs/sdks/avacloudsdktransactions/README.md#listerc1155transactions)
- [dataEvmTransactionsListErc20Transactions](docs/sdks/avacloudsdktransactions/README.md#listerc20transactions)
- [dataEvmTransactionsListErc721Transactions](docs/sdks/avacloudsdktransactions/README.md#listerc721transactions)
- [dataEvmTransactionsListInternalTransactions](docs/sdks/avacloudsdktransactions/README.md#listinternaltransactions)
- [dataEvmTransactionsListLatestTransactions](docs/sdks/avacloudsdktransactions/README.md#listlatesttransactions)
- [dataEvmTransactionsListNativeTransactions](docs/sdks/avacloudsdktransactions/README.md#listnativetransactions)
- [dataEvmTransactionsListTransactions](docs/sdks/avacloudsdktransactions/README.md#listtransactions)
- [dataEvmTransactionsListTransfers](docs/sdks/avacloudsdktransactions/README.md#listtransfers)
- [dataHealthCheckDataHealthCheck](docs/sdks/avacloudsdkhealthcheck/README.md#datahealthcheck)
- [dataNftsGetTokenDetails](docs/sdks/nfts/README.md#gettokendetails)
- [dataNftsListTokens](docs/sdks/nfts/README.md#listtokens)
- [dataNftsReindexNft](docs/sdks/nfts/README.md#reindexnft)
- [dataOperationsGetOperationResult](docs/sdks/operations/README.md#getoperationresult)
- [dataOperationsPostTransactionExportJob](docs/sdks/operations/README.md#posttransactionexportjob)
- [dataPrimaryNetworkBalancesGetBalancesByAddresses](docs/sdks/balances/README.md#getbalancesbyaddresses)
- [dataPrimaryNetworkBlocksGetBlockById](docs/sdks/blocks/README.md#getblockbyid)
- [dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks](docs/sdks/blocks/README.md#listlatestprimarynetworkblocks)
- [dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId](docs/sdks/blocks/README.md#listprimarynetworkblocksbynodeid)
- [dataPrimaryNetworkGetAssetDetails](docs/sdks/primarynetwork/README.md#getassetdetails)
- [dataPrimaryNetworkGetChainIdsForAddresses](docs/sdks/primarynetwork/README.md#getchainidsforaddresses)
- [dataPrimaryNetworkGetNetworkDetails](docs/sdks/primarynetwork/README.md#getnetworkdetails)
- [dataPrimaryNetworkGetSingleValidatorDetails](docs/sdks/primarynetwork/README.md#getsinglevalidatordetails)
- [dataPrimaryNetworkGetSubnetById](docs/sdks/primarynetwork/README.md#getsubnetbyid)
- [dataPrimaryNetworkListBlockchains](docs/sdks/primarynetwork/README.md#listblockchains)
- [dataPrimaryNetworkListDelegators](docs/sdks/primarynetwork/README.md#listdelegators)
- [dataPrimaryNetworkListSubnets](docs/sdks/primarynetwork/README.md#listsubnets)
- [dataPrimaryNetworkListValidators](docs/sdks/primarynetwork/README.md#listvalidators)
- [dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards](docs/sdks/rewards/README.md#listhistoricalprimarynetworkrewards)
- [dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards](docs/sdks/rewards/README.md#listpendingprimarynetworkrewards)
- [dataPrimaryNetworkTransactionsGetTxByHash](docs/sdks/transactions/README.md#gettxbyhash)
- [dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions](docs/sdks/transactions/README.md#listactiveprimarynetworkstakingtransactions)
- [dataPrimaryNetworkTransactionsListAssetTransactions](docs/sdks/transactions/README.md#listassettransactions)
- [dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions](docs/sdks/transactions/README.md#listlatestprimarynetworktransactions)
- [dataPrimaryNetworkUtxosGetUtxosByAddresses](docs/sdks/utxos/README.md#getutxosbyaddresses)
- [dataPrimaryNetworkVerticesGetVertexByHash](docs/sdks/vertices/README.md#getvertexbyhash)
- [dataPrimaryNetworkVerticesGetVertexByHeight](docs/sdks/vertices/README.md#getvertexbyheight)
- [dataPrimaryNetworkVerticesListLatestXChainVertices](docs/sdks/vertices/README.md#listlatestxchainvertices)
- [dataTeleporterGetTeleporterMessage](docs/sdks/teleporter/README.md#getteleportermessage)
- [dataTeleporterListTeleporterMessages](docs/sdks/teleporter/README.md#listteleportermessages)
- [dataUsageMetricsGetApiLogs](docs/sdks/usagemetrics/README.md#getapilogs)
- [dataUsageMetricsGetApiUsageMetrics](docs/sdks/usagemetrics/README.md#getapiusagemetrics)
- [dataWebhooksAddAddressesToWebhook](docs/sdks/webhooks/README.md#addaddressestowebhook)
- [dataWebhooksCreateWebhook](docs/sdks/webhooks/README.md#createwebhook)
- [dataWebhooksDeactivateWebhook](docs/sdks/webhooks/README.md#deactivatewebhook)
- [dataWebhooksGenerateSharedSecret](docs/sdks/webhooks/README.md#generatesharedsecret)
- [dataWebhooksGetAddressesFromWebhook](docs/sdks/webhooks/README.md#getaddressesfromwebhook)
- [dataWebhooksGetSharedSecret](docs/sdks/webhooks/README.md#getsharedsecret)
- [dataWebhooksGetWebhook](docs/sdks/webhooks/README.md#getwebhook)
- [dataWebhooksListWebhooks](docs/sdks/webhooks/README.md#listwebhooks)
- [dataWebhooksRemoveAddressesFromWebhook](docs/sdks/webhooks/README.md#removeaddressesfromwebhook)
- [dataWebhooksUpdateWebhook](docs/sdks/webhooks/README.md#updatewebhook)
- [metricsChainMetricsGetEvmChainMetrics](docs/sdks/avacloudsdkmetrics/README.md#getevmchainmetrics)
- [metricsChainMetricsGetEvmChainRollingWindowMetrics](docs/sdks/avacloudsdkmetrics/README.md#getevmchainrollingwindowmetrics)
- [metricsChainMetricsGetStakingMetrics](docs/sdks/avacloudsdkmetrics/README.md#getstakingmetrics)
- [metricsEvmChainsGetChain](docs/sdks/chains/README.md#getchain)
- [metricsEvmChainsListChains](docs/sdks/chains/README.md#listchains)
- [metricsHealthCheckMetricsHealthCheck](docs/sdks/healthcheck/README.md#metricshealthcheck)
- [metricsLookingGlassCompositeQuery](docs/sdks/lookingglass/README.md#compositequery)
- [metricsLookingGlassGetAddressesByBalanceOverTime](docs/sdks/lookingglass/README.md#getaddressesbybalanceovertime)
- [metricsLookingGlassGetAddressesByBtcbBridged](docs/sdks/lookingglass/README.md#getaddressesbybtcbbridged)
- [metricsLookingGlassGetNftHoldersByContractAddress](docs/sdks/lookingglass/README.md#getnftholdersbycontractaddress)
- [metricsLookingGlassGetValidatorsByDateRange](docs/sdks/lookingglass/README.md#getvalidatorsbydaterange)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `chainId` to `"43114"` at SDK initialization and then you do not have to pass the same value on calls to operations like `listChains`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| chainId | string |  | A supported EVM chain id, chain alias, or blockchain id. |
| network | components.GlobalParamNetwork |  | A supported network type mainnet or a testnet. |


### Example

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.evm.chains.listChains({
        network: "mainnet",
    });

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.evm.chains.listChains({
        network: "mainnet",
    });

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.healthCheck.metricsHealthCheck({
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
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
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
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.healthCheck.metricsHealthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

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

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";
import {
    BadGateway,
    BadRequest,
    Forbidden,
    InternalServerError,
    NotFound,
    SDKValidationError,
    ServiceUnavailable,
    TooManyRequests,
    Unauthorized,
} from "@avalabs/avacloud-sdk/models/errors";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    try {
        await avaCloudSDK.data.nfts.reindexNft({
            address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            tokenId: "145",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof BadRequest: {
                // Handle err.data$: BadRequestData
                console.error(err);
                return;
            }
            case err instanceof Unauthorized: {
                // Handle err.data$: UnauthorizedData
                console.error(err);
                return;
            }
            case err instanceof Forbidden: {
                // Handle err.data$: ForbiddenData
                console.error(err);
                return;
            }
            case err instanceof NotFound: {
                // Handle err.data$: NotFoundData
                console.error(err);
                return;
            }
            case err instanceof TooManyRequests: {
                // Handle err.data$: TooManyRequestsData
                console.error(err);
                return;
            }
            case err instanceof InternalServerError: {
                // Handle err.data$: InternalServerErrorData
                console.error(err);
                return;
            }
            case err instanceof BadGateway: {
                // Handle err.data$: BadGatewayData
                console.error(err);
                return;
            }
            case err instanceof ServiceUnavailable: {
                // Handle err.data$: ServiceUnavailableData
                console.error(err);
                return;
            }
            default: {
                throw err;
            }
        }
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    serverURL: "",
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.healthCheck.metricsHealthCheck();

    // Handle the result
    console.log(result);
}

run();

```
### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.healthCheck.metricsHealthCheck({
        serverURL: "https://popsicle-api.avax.network",
    });

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
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";
import { HTTPClient } from "@avalabs/avacloud-sdk/lib/http";

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

const sdk = new AvaCloudSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
    apiKey: "<YOUR_API_KEY_HERE>",
    chainId: "43114",
    network: "mainnet",
});

async function run() {
    const result = await avaCloudSDK.metrics.healthCheck.metricsHealthCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const sdk = new AvaCloudSDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Summary [summary] -->
## Summary

Glacier API: The Glacier API provides web3 application developers with multi-chain data related to Avalanche's primary network, Avalanche subnets, and Ethereum. With Glacier, you can easily build products that leverage real-time and historical transaction and transfer history, native and token balances, and various types of token metadata. The API is in Beta and may be subject to change.</br></br>If you have feedback or feature requests for the API, please submit them <a href="https://portal.productboard.com/dndv9ahlkdfye4opdm8ksafi/tabs/4-glacier-api">here</a>. Bug reports can be submitted <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJQrcp7QoNiqozMDKrVJGX5wpU827d3cVTgF8qa7t_J1Pb-g/viewform">here</a>, and any potential security issues can be reported <a href="https://immunefi.com/bounty/avalabs">here</a>.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Global Parameters](#global-parameters)
* [Pagination](#pagination)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Verify Webhook Signature

The isValidSignature function is a utility function in the Avalanche SDK that verifies the authenticity and integrity of incoming webhook requests from AvaCloud. This function ensures that the requests are coming from a trusted source by validating the HMAC SHA-256 signature provided in the request header.Usage

Import and use the `isValidSignature` function:

```js
import { isValidSignature } from '@avalabs/avacloud-sdk/utils';
import express from 'express';

const app = express();
app.use(express.json());

const signingSecret = 'your-signing-secret'; // Replace with your signing secret

app.post('/webhook', (req, res) => {
    const signature = req.headers['x-signature'];
    const payload = req.body;

    if (isValidSignature(signingSecret, signature, payload)) {
        console.log('Valid signature');
        // Process the request
    } else {
        console.log('Invalid signature');
    }

    res.json({ received: true });
});

app.listen(8000, () => console.log('Server running on port 8000'));
```

### Parameters

* `signingSecret`: The secret key for signing.
* `signature`: The HMAC SHA-256 signature from the request header.
* `payload`: The JSON payload of the request.

### More Information

Use this function to securely validate webhooks from AvaCloud.

For more information, visit the [AvaCloud](https://glacier.docs.avacloud.io/reference/validate-signature) documentation.

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
