
<div align="center">
    <h1> AvaCloud SDK TypeScript </h1>
        <p>
            The AvaCloud SDK is a powerful and flexible toolset designed to simplify the integration with AvaCloud's suite of blockchain services. Currently, this SDK is focused on providing robust support for Data APIs.          
        </p>
        <a href="https://developers.avacloud.io/avacloud-sdk/getting-started">
            <img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=3b6ef9&style=for-the-badge" />
        </a>

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

<details open>
<summary>Available methods</summary>


### [data](docs/sdks/data/README.md)


#### [data.evm](docs/sdks/avacloudsdkevm/README.md)


#### [data.evm.balances](docs/sdks/avacloudsdkbalances/README.md)

* [getNativeBalance](docs/sdks/avacloudsdkbalances/README.md#getnativebalance) - Get native token balance
* [listErc20Balances](docs/sdks/avacloudsdkbalances/README.md#listerc20balances) - List ERC-20 balances
* [listErc721Balances](docs/sdks/avacloudsdkbalances/README.md#listerc721balances) - List ERC-721 balances
* [listErc1155Balances](docs/sdks/avacloudsdkbalances/README.md#listerc1155balances) - List ERC-1155 balances
* [listCollectibleBalances](docs/sdks/avacloudsdkbalances/README.md#listcollectiblebalances) - List collectible (ERC-721/ERC-1155) balances

#### [data.evm.blocks](docs/sdks/avacloudsdkblocks/README.md)

* [getLatestBlocks](docs/sdks/avacloudsdkblocks/README.md#getlatestblocks) - List latest blocks
* [getBlock](docs/sdks/avacloudsdkblocks/README.md#getblock) - Get block

#### [data.evm.chains](docs/sdks/avacloudsdkchains/README.md)

* [supportedChains](docs/sdks/avacloudsdkchains/README.md#supportedchains) - List chains
* [getChainInfo](docs/sdks/avacloudsdkchains/README.md#getchaininfo) - Get chain information
* [getAddressChains](docs/sdks/avacloudsdkchains/README.md#getaddresschains) - Get chains for address

#### [data.evm.contracts](docs/sdks/contracts/README.md)

* [getContractMetadata](docs/sdks/contracts/README.md#getcontractmetadata) - Get contract metadata

#### [data.evm.transactions](docs/sdks/avacloudsdktransactions/README.md)

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

#### [data.healthCheck](docs/sdks/avacloudsdkhealthcheck/README.md)

* [dataHealthCheck](docs/sdks/avacloudsdkhealthcheck/README.md#datahealthcheck) - Get the health of the service

#### [data.nfts](docs/sdks/nfts/README.md)

* [reindexNft](docs/sdks/nfts/README.md#reindexnft) - Reindex NFT metadata
* [listTokens](docs/sdks/nfts/README.md#listtokens) - List tokens
* [getTokenDetails](docs/sdks/nfts/README.md#gettokendetails) - Get token details

#### [data.operations](docs/sdks/operations/README.md)

* [getOperationResult](docs/sdks/operations/README.md#getoperationresult) - Get operation
* [postTransactionExportJob](docs/sdks/operations/README.md#posttransactionexportjob) - Create transaction export operation

#### [data.primaryNetwork](docs/sdks/primarynetwork/README.md)

* [getAssetDetails](docs/sdks/primarynetwork/README.md#getassetdetails) - Get asset details
* [getChainIdsForAddresses](docs/sdks/primarynetwork/README.md#getchainidsforaddresses) - Get chain interactions for addresses
* [getNetworkDetails](docs/sdks/primarynetwork/README.md#getnetworkdetails) - Get network details
* [listBlockchains](docs/sdks/primarynetwork/README.md#listblockchains) - List blockchains
* [listSubnets](docs/sdks/primarynetwork/README.md#listsubnets) - List subnets
* [getSubnetById](docs/sdks/primarynetwork/README.md#getsubnetbyid) - Get Subnet details by ID
* [listValidators](docs/sdks/primarynetwork/README.md#listvalidators) - List validators
* [getSingleValidatorDetails](docs/sdks/primarynetwork/README.md#getsinglevalidatordetails) - Get single validator details
* [listDelegators](docs/sdks/primarynetwork/README.md#listdelegators) - List delegators
* [listL1Validators](docs/sdks/primarynetwork/README.md#listl1validators) - List L1 validators

#### [data.primaryNetwork.balances](docs/sdks/balances/README.md)

* [getBalancesByAddresses](docs/sdks/balances/README.md#getbalancesbyaddresses) - Get balances

#### [data.primaryNetwork.blocks](docs/sdks/blocks/README.md)

* [getBlockById](docs/sdks/blocks/README.md#getblockbyid) - Get block
* [listPrimaryNetworkBlocksByNodeId](docs/sdks/blocks/README.md#listprimarynetworkblocksbynodeid) - List blocks proposed by node
* [listLatestPrimaryNetworkBlocks](docs/sdks/blocks/README.md#listlatestprimarynetworkblocks) - List latest blocks

#### [data.primaryNetwork.rewards](docs/sdks/rewards/README.md)

* [listPendingPrimaryNetworkRewards](docs/sdks/rewards/README.md#listpendingprimarynetworkrewards) - List pending rewards
* [listHistoricalPrimaryNetworkRewards](docs/sdks/rewards/README.md#listhistoricalprimarynetworkrewards) - List historical rewards

#### [data.primaryNetwork.transactions](docs/sdks/transactions/README.md)

* [getTxByHash](docs/sdks/transactions/README.md#gettxbyhash) - Get transaction
* [listLatestPrimaryNetworkTransactions](docs/sdks/transactions/README.md#listlatestprimarynetworktransactions) - List latest transactions
* [listActivePrimaryNetworkStakingTransactions](docs/sdks/transactions/README.md#listactiveprimarynetworkstakingtransactions) - List staking transactions
* [listAssetTransactions](docs/sdks/transactions/README.md#listassettransactions) - List asset transactions

#### [data.primaryNetwork.utxos](docs/sdks/utxos/README.md)

* [getUtxosByAddresses](docs/sdks/utxos/README.md#getutxosbyaddresses) - List UTXOs

#### [data.primaryNetwork.vertices](docs/sdks/vertices/README.md)

* [listLatestXChainVertices](docs/sdks/vertices/README.md#listlatestxchainvertices) - List vertices
* [getVertexByHash](docs/sdks/vertices/README.md#getvertexbyhash) - Get vertex
* [getVertexByHeight](docs/sdks/vertices/README.md#getvertexbyheight) - List vertices by height

#### [data.teleporter](docs/sdks/teleporter/README.md)

* [getTeleporterMessage](docs/sdks/teleporter/README.md#getteleportermessage) - Get a teleporter message
* [listTeleporterMessages](docs/sdks/teleporter/README.md#listteleportermessages) - List teleporter messages
* [listTeleporterMessagesByAddress](docs/sdks/teleporter/README.md#listteleportermessagesbyaddress) - List teleporter messages by address

#### [data.usageMetrics](docs/sdks/usagemetrics/README.md)

* [getApiUsageMetrics](docs/sdks/usagemetrics/README.md#getapiusagemetrics) - Get usage metrics for the Data API
* [getApiLogs](docs/sdks/usagemetrics/README.md#getapilogs) - Get logs for requests made by client

#### [data.webhooks](docs/sdks/webhooks/README.md)

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

### [metrics](docs/sdks/metrics/README.md)


#### [metrics.chain](docs/sdks/chain/README.md)


#### [metrics.chain.metrics](docs/sdks/avacloudsdkmetrics/README.md)

* [getEvmChainMetrics](docs/sdks/avacloudsdkmetrics/README.md#getevmchainmetrics) - Get metrics for EVM chains
* [getTeleporterMetricsByChain](docs/sdks/avacloudsdkmetrics/README.md#getteleportermetricsbychain) - Get teleporter metrics for EVM chains
* [getEvmChainRollingWindowMetrics](docs/sdks/avacloudsdkmetrics/README.md#getevmchainrollingwindowmetrics) - Get rolling window metrics for EVM chains
* [getStakingMetrics](docs/sdks/avacloudsdkmetrics/README.md#getstakingmetrics) - Get staking metrics for a given subnet

#### [metrics.evm](docs/sdks/evm/README.md)


#### [metrics.evm.chains](docs/sdks/chains/README.md)

* [listChains](docs/sdks/chains/README.md#listchains) - Get a list of supported blockchains
* [getChain](docs/sdks/chains/README.md#getchain) - Get chain information for supported blockchain

#### [metrics.healthCheck](docs/sdks/healthcheck/README.md)

* [metricsHealthCheck](docs/sdks/healthcheck/README.md#metricshealthcheck) - Get the health of the service

#### [metrics.lookingGlass](docs/sdks/lookingglass/README.md)

* [getNftHoldersByContractAddress](docs/sdks/lookingglass/README.md#getnftholdersbycontractaddress) - Get NFT holders by contract address
* [getAddressesByBalanceOverTime](docs/sdks/lookingglass/README.md#getaddressesbybalanceovertime) - Get addresses by balance over time
* [getAddressesByBtcbBridged](docs/sdks/lookingglass/README.md#getaddressesbybtcbbridged) - Get addresses by BTCb bridged balance
* [getValidatorsByDateRange](docs/sdks/lookingglass/README.md#getvalidatorsbydaterange) - Get addresses running validators during a given time frame
* [compositeQuery](docs/sdks/lookingglass/README.md#compositequery) - Composite query

</details>
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

- [`dataEvmBalancesGetNativeBalance`](docs/sdks/avacloudsdkbalances/README.md#getnativebalance) - Get native token balance
- [`dataEvmBalancesListCollectibleBalances`](docs/sdks/avacloudsdkbalances/README.md#listcollectiblebalances) - List collectible (ERC-721/ERC-1155) balances
- [`dataEvmBalancesListErc1155Balances`](docs/sdks/avacloudsdkbalances/README.md#listerc1155balances) - List ERC-1155 balances
- [`dataEvmBalancesListErc20Balances`](docs/sdks/avacloudsdkbalances/README.md#listerc20balances) - List ERC-20 balances
- [`dataEvmBalancesListErc721Balances`](docs/sdks/avacloudsdkbalances/README.md#listerc721balances) - List ERC-721 balances
- [`dataEvmBlocksGetBlock`](docs/sdks/avacloudsdkblocks/README.md#getblock) - Get block
- [`dataEvmBlocksGetLatestBlocks`](docs/sdks/avacloudsdkblocks/README.md#getlatestblocks) - List latest blocks
- [`dataEvmChainsGetAddressChains`](docs/sdks/avacloudsdkchains/README.md#getaddresschains) - Get chains for address
- [`dataEvmChainsGetChainInfo`](docs/sdks/avacloudsdkchains/README.md#getchaininfo) - Get chain information
- [`dataEvmChainsSupportedChains`](docs/sdks/avacloudsdkchains/README.md#supportedchains) - List chains
- [`dataEvmContractsGetContractMetadata`](docs/sdks/contracts/README.md#getcontractmetadata) - Get contract metadata
- [`dataEvmTransactionsGetDeploymentTransaction`](docs/sdks/avacloudsdktransactions/README.md#getdeploymenttransaction) - Get deployment transaction
- [`dataEvmTransactionsGetTransaction`](docs/sdks/avacloudsdktransactions/README.md#gettransaction) - Get transaction
- [`dataEvmTransactionsGetTransactionsForBlock`](docs/sdks/avacloudsdktransactions/README.md#gettransactionsforblock) - List transactions for a block
- [`dataEvmTransactionsListContractDeployments`](docs/sdks/avacloudsdktransactions/README.md#listcontractdeployments) - List deployed contracts
- [`dataEvmTransactionsListErc1155Transactions`](docs/sdks/avacloudsdktransactions/README.md#listerc1155transactions) - List ERC-1155 transfers
- [`dataEvmTransactionsListErc20Transactions`](docs/sdks/avacloudsdktransactions/README.md#listerc20transactions) - List ERC-20 transfers
- [`dataEvmTransactionsListErc721Transactions`](docs/sdks/avacloudsdktransactions/README.md#listerc721transactions) - List ERC-721 transfers
- [`dataEvmTransactionsListInternalTransactions`](docs/sdks/avacloudsdktransactions/README.md#listinternaltransactions) - List internal transactions
- [`dataEvmTransactionsListLatestTransactions`](docs/sdks/avacloudsdktransactions/README.md#listlatesttransactions) - List latest transactions
- [`dataEvmTransactionsListNativeTransactions`](docs/sdks/avacloudsdktransactions/README.md#listnativetransactions) - List native transactions
- [`dataEvmTransactionsListTransactions`](docs/sdks/avacloudsdktransactions/README.md#listtransactions) - List transactions
- [`dataEvmTransactionsListTransfers`](docs/sdks/avacloudsdktransactions/README.md#listtransfers) - List ERC transfers
- [`dataHealthCheckDataHealthCheck`](docs/sdks/avacloudsdkhealthcheck/README.md#datahealthcheck) - Get the health of the service
- [`dataNftsGetTokenDetails`](docs/sdks/nfts/README.md#gettokendetails) - Get token details
- [`dataNftsListTokens`](docs/sdks/nfts/README.md#listtokens) - List tokens
- [`dataNftsReindexNft`](docs/sdks/nfts/README.md#reindexnft) - Reindex NFT metadata
- [`dataOperationsGetOperationResult`](docs/sdks/operations/README.md#getoperationresult) - Get operation
- [`dataOperationsPostTransactionExportJob`](docs/sdks/operations/README.md#posttransactionexportjob) - Create transaction export operation
- [`dataPrimaryNetworkBalancesGetBalancesByAddresses`](docs/sdks/balances/README.md#getbalancesbyaddresses) - Get balances
- [`dataPrimaryNetworkBlocksGetBlockById`](docs/sdks/blocks/README.md#getblockbyid) - Get block
- [`dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks`](docs/sdks/blocks/README.md#listlatestprimarynetworkblocks) - List latest blocks
- [`dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId`](docs/sdks/blocks/README.md#listprimarynetworkblocksbynodeid) - List blocks proposed by node
- [`dataPrimaryNetworkGetAssetDetails`](docs/sdks/primarynetwork/README.md#getassetdetails) - Get asset details
- [`dataPrimaryNetworkGetChainIdsForAddresses`](docs/sdks/primarynetwork/README.md#getchainidsforaddresses) - Get chain interactions for addresses
- [`dataPrimaryNetworkGetNetworkDetails`](docs/sdks/primarynetwork/README.md#getnetworkdetails) - Get network details
- [`dataPrimaryNetworkGetSingleValidatorDetails`](docs/sdks/primarynetwork/README.md#getsinglevalidatordetails) - Get single validator details
- [`dataPrimaryNetworkGetSubnetById`](docs/sdks/primarynetwork/README.md#getsubnetbyid) - Get Subnet details by ID
- [`dataPrimaryNetworkListBlockchains`](docs/sdks/primarynetwork/README.md#listblockchains) - List blockchains
- [`dataPrimaryNetworkListDelegators`](docs/sdks/primarynetwork/README.md#listdelegators) - List delegators
- [`dataPrimaryNetworkListL1Validators`](docs/sdks/primarynetwork/README.md#listl1validators) - List L1 validators
- [`dataPrimaryNetworkListSubnets`](docs/sdks/primarynetwork/README.md#listsubnets) - List subnets
- [`dataPrimaryNetworkListValidators`](docs/sdks/primarynetwork/README.md#listvalidators) - List validators
- [`dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards`](docs/sdks/rewards/README.md#listhistoricalprimarynetworkrewards) - List historical rewards
- [`dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards`](docs/sdks/rewards/README.md#listpendingprimarynetworkrewards) - List pending rewards
- [`dataPrimaryNetworkTransactionsGetTxByHash`](docs/sdks/transactions/README.md#gettxbyhash) - Get transaction
- [`dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions`](docs/sdks/transactions/README.md#listactiveprimarynetworkstakingtransactions) - List staking transactions
- [`dataPrimaryNetworkTransactionsListAssetTransactions`](docs/sdks/transactions/README.md#listassettransactions) - List asset transactions
- [`dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions`](docs/sdks/transactions/README.md#listlatestprimarynetworktransactions) - List latest transactions
- [`dataPrimaryNetworkUtxosGetUtxosByAddresses`](docs/sdks/utxos/README.md#getutxosbyaddresses) - List UTXOs
- [`dataPrimaryNetworkVerticesGetVertexByHash`](docs/sdks/vertices/README.md#getvertexbyhash) - Get vertex
- [`dataPrimaryNetworkVerticesGetVertexByHeight`](docs/sdks/vertices/README.md#getvertexbyheight) - List vertices by height
- [`dataPrimaryNetworkVerticesListLatestXChainVertices`](docs/sdks/vertices/README.md#listlatestxchainvertices) - List vertices
- [`dataTeleporterGetTeleporterMessage`](docs/sdks/teleporter/README.md#getteleportermessage) - Get a teleporter message
- [`dataTeleporterListTeleporterMessages`](docs/sdks/teleporter/README.md#listteleportermessages) - List teleporter messages
- [`dataTeleporterListTeleporterMessagesByAddress`](docs/sdks/teleporter/README.md#listteleportermessagesbyaddress) - List teleporter messages by address
- [`dataUsageMetricsGetApiLogs`](docs/sdks/usagemetrics/README.md#getapilogs) - Get logs for requests made by client
- [`dataUsageMetricsGetApiUsageMetrics`](docs/sdks/usagemetrics/README.md#getapiusagemetrics) - Get usage metrics for the Data API
- [`dataWebhooksAddAddressesToWebhook`](docs/sdks/webhooks/README.md#addaddressestowebhook) - Add addresses to webhook
- [`dataWebhooksCreateWebhook`](docs/sdks/webhooks/README.md#createwebhook) - Create a webhook
- [`dataWebhooksDeactivateWebhook`](docs/sdks/webhooks/README.md#deactivatewebhook) - Deactivate a webhook
- [`dataWebhooksGenerateSharedSecret`](docs/sdks/webhooks/README.md#generatesharedsecret) - Generate a shared secret
- [`dataWebhooksGetAddressesFromWebhook`](docs/sdks/webhooks/README.md#getaddressesfromwebhook) - List adresses by webhook
- [`dataWebhooksGetSharedSecret`](docs/sdks/webhooks/README.md#getsharedsecret) - Get a shared secret
- [`dataWebhooksGetWebhook`](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook by ID
- [`dataWebhooksListWebhooks`](docs/sdks/webhooks/README.md#listwebhooks) - List webhooks
- [`dataWebhooksRemoveAddressesFromWebhook`](docs/sdks/webhooks/README.md#removeaddressesfromwebhook) - Remove addresses from webhook
- [`dataWebhooksUpdateWebhook`](docs/sdks/webhooks/README.md#updatewebhook) - Update a webhook
- [`metricsChainMetricsGetEvmChainMetrics`](docs/sdks/avacloudsdkmetrics/README.md#getevmchainmetrics) - Get metrics for EVM chains
- [`metricsChainMetricsGetEvmChainRollingWindowMetrics`](docs/sdks/avacloudsdkmetrics/README.md#getevmchainrollingwindowmetrics) - Get rolling window metrics for EVM chains
- [`metricsChainMetricsGetStakingMetrics`](docs/sdks/avacloudsdkmetrics/README.md#getstakingmetrics) - Get staking metrics for a given subnet
- [`metricsChainMetricsGetTeleporterMetricsByChain`](docs/sdks/avacloudsdkmetrics/README.md#getteleportermetricsbychain) - Get teleporter metrics for EVM chains
- [`metricsEvmChainsGetChain`](docs/sdks/chains/README.md#getchain) - Get chain information for supported blockchain
- [`metricsEvmChainsListChains`](docs/sdks/chains/README.md#listchains) - Get a list of supported blockchains
- [`metricsHealthCheckMetricsHealthCheck`](docs/sdks/healthcheck/README.md#metricshealthcheck) - Get the health of the service
- [`metricsLookingGlassCompositeQuery`](docs/sdks/lookingglass/README.md#compositequery) - Composite query
- [`metricsLookingGlassGetAddressesByBalanceOverTime`](docs/sdks/lookingglass/README.md#getaddressesbybalanceovertime) - Get addresses by balance over time
- [`metricsLookingGlassGetAddressesByBtcbBridged`](docs/sdks/lookingglass/README.md#getaddressesbybtcbbridged) - Get addresses by BTCb bridged balance
- [`metricsLookingGlassGetNftHoldersByContractAddress`](docs/sdks/lookingglass/README.md#getnftholdersbycontractaddress) - Get NFT holders by contract address
- [`metricsLookingGlassGetValidatorsByDateRange`](docs/sdks/lookingglass/README.md#getvalidatorsbydaterange) - Get addresses running validators during a given time frame

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `chainId` to `"43114"` at SDK initialization and then you do not have to pass the same value on calls to operations like `listChains`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.

| Name    | Type                          | Description                                              |
| ------- | ----------------------------- | -------------------------------------------------------- |
| chainId | string                        | A supported EVM chain id, chain alias, or blockchain id. |
| network | components.GlobalParamNetwork | A supported network type mainnet or testnet/fuji.        |

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

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `reindexNft` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.BadRequest          | 400         | application/json |
| errors.Unauthorized        | 401         | application/json |
| errors.Forbidden           | 403         | application/json |
| errors.NotFound            | 404         | application/json |
| errors.TooManyRequests     | 429         | application/json |
| errors.InternalServerError | 500         | application/json |
| errors.BadGateway          | 502         | application/json |
| errors.ServiceUnavailable  | 503         | application/json |
| errors.SDKError            | 4XX, 5XX    | \*/\*            |

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
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case (err instanceof Forbidden): {
        // Handle err.data$: ForbiddenData
        console.error(err);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof TooManyRequests): {
        // Handle err.data$: TooManyRequestsData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      case (err instanceof BadGateway): {
        // Handle err.data$: BadGatewayData
        console.error(err);
        return;
      }
      case (err instanceof ServiceUnavailable): {
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

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection


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

| Name     | Type   | Scheme  |
| -------- | ------ | ------- |
| `apiKey` | apiKey | API key |

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

Data API: The Data API provides web3 application developers with multi-chain data related to Avalanche's primary network, Avalanche subnets, and Ethereum. With Data API, you can easily build products that leverage real-time and historical transaction and transfer history, native and token balances, and various types of token metadata. The API is in Beta and may be subject to change.</br></br>If you have feedback or feature requests for the API, please submit them <a href="https://portal.productboard.com/dndv9ahlkdfye4opdm8ksafi/tabs/4-glacier-api">here</a>. Bug reports can be submitted <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJQrcp7QoNiqozMDKrVJGX5wpU827d3cVTgF8qa7t_J1Pb-g/viewform">here</a>, and any potential security issues can be reported <a href="https://immunefi.com/bounty/avalabs">here</a>.
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

For more information, visit the [AvaCloud Developers](https://developers.avacloud.io/webhooks-api/signature) documentation.

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
