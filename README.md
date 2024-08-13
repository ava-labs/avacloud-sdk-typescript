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
    const result = await avalancheSDK.metrics.healthCheck.healthCheckV1();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [metrics.healthCheck](docs/sdks/healthcheck/README.md)

* [healthCheckV1](docs/sdks/healthcheck/README.md#healthcheckv1) - Get the health of the service
* [healthCheckV2](docs/sdks/healthcheck/README.md#healthcheckv2) - Get the health of the service


### [metrics.evm.chains](docs/sdks/avalanchesdkchains/README.md)

* [listChains](docs/sdks/avalanchesdkchains/README.md#listchains) - Get a list of supported blockchains
* [getChain](docs/sdks/avalanchesdkchains/README.md#getchain) - Get chain information for supported blockchain
* [getMappings](docs/sdks/avalanchesdkchains/README.md#getmappings) - Subnet ID to EVM Chain ID mappings
* [getMappingsBySubnetId](docs/sdks/avalanchesdkchains/README.md#getmappingsbysubnetid) - Subnet ID to EVM Chain ID mappings
* [getChainInformationByNetwork](docs/sdks/avalanchesdkchains/README.md#getchaininformationbynetwork) - Chain information by network
* [getChainInformationByNetworkAndSubnetId](docs/sdks/avalanchesdkchains/README.md#getchaininformationbynetworkandsubnetid) - Chain information by network and subnet ID
* [getSubnetInformationByNetwork](docs/sdks/avalanchesdkchains/README.md#getsubnetinformationbynetwork) - Subnet information by network
* [getSubnetInformationByNetworkAndSubnetId](docs/sdks/avalanchesdkchains/README.md#getsubnetinformationbynetworkandsubnetid) - Subnet information by network and subnet ID


### [metrics.chain.metrics](docs/sdks/avalanchesdkmetrics/README.md)

* [getEvmChainMetrics](docs/sdks/avalanchesdkmetrics/README.md#getevmchainmetrics) - Get metrics for EVM chains
* [getEvmChainRollingWindowMetrics](docs/sdks/avalanchesdkmetrics/README.md#getevmchainrollingwindowmetrics) - Get rolling window metrics for EVM chains
* [getStakingMetrics](docs/sdks/avalanchesdkmetrics/README.md#getstakingmetrics) - Get staking metrics for a given subnet

### [metrics.chain.throughput](docs/sdks/throughput/README.md)

* [getActiveSenders](docs/sdks/throughput/README.md#getactivesenders) - Active senders
* [getActiveAddresses](docs/sdks/throughput/README.md#getactiveaddresses) - Active addresses
* [getGasUsed](docs/sdks/throughput/README.md#getgasused) - Gas used
* [getTxCount](docs/sdks/throughput/README.md#gettxcount) - Transaction count
* [getAvgGps](docs/sdks/throughput/README.md#getavggps) - Average gas consumed per second
* [getMaxGps](docs/sdks/throughput/README.md#getmaxgps) - Maxumum gas consumed per second
* [getAvgTps](docs/sdks/throughput/README.md#getavgtps) - Average transactions per second
* [getMaxTps](docs/sdks/throughput/README.md#getmaxtps) - Maximum transactions per second
* [getAvgGasPrice](docs/sdks/throughput/README.md#getavggasprice) - Average gas price
* [getMaxGasPrice](docs/sdks/throughput/README.md#getmaxgasprice) - Maximum gas price
* [getRollingWindowGasUsed](docs/sdks/throughput/README.md#getrollingwindowgasused) - Rolling window of gas used
* [getRollingWindowTxCount](docs/sdks/throughput/README.md#getrollingwindowtxcount) - Rolling window of tx count
* [getRollingWindowAvgGps](docs/sdks/throughput/README.md#getrollingwindowavggps) - Rolling window of average gps consumed
* [getRollingWindowMaxGps](docs/sdks/throughput/README.md#getrollingwindowmaxgps) - Rolling window of max gps
* [getRollingWindowAvgTps](docs/sdks/throughput/README.md#getrollingwindowavgtps) - Rolling window of average tps
* [getRollingWindowMaxTps](docs/sdks/throughput/README.md#getrollingwindowmaxtps) - Rolling window of max tps
* [getRollingWindowAvgGasPrice](docs/sdks/throughput/README.md#getrollingwindowavggasprice) - Rolling window of average gas price
* [getRollingWindowMaxGasPrice](docs/sdks/throughput/README.md#getrollingwindowmaxgasprice) - Rolling window of max gas price

### [metrics.lookingGlass](docs/sdks/lookingglass/README.md)

* [getNftHoldersByContractAddress](docs/sdks/lookingglass/README.md#getnftholdersbycontractaddress) - Get NFT holders by contract address
* [getAddressesByBalanceOverTime](docs/sdks/lookingglass/README.md#getaddressesbybalanceovertime) - Get addresses by balance over time
* [getAddressesByBtcbBridged](docs/sdks/lookingglass/README.md#getaddressesbybtcbbridged) - Get addresses by BTCb bridged balance
* [getValidatorsByDateRange](docs/sdks/lookingglass/README.md#getvalidatorsbydaterange) - Get addresses running validators during a given time frame
* [compositeQueryV1](docs/sdks/lookingglass/README.md#compositequeryv1) - Composite query
* [compositeQueryV2](docs/sdks/lookingglass/README.md#compositequeryv2) - Composite query

### [metrics.cumulative](docs/sdks/cumulative/README.md)

* [getCumulativeAddresses](docs/sdks/cumulative/README.md#getcumulativeaddresses) - Cumulative number of addresses
* [getCumulativeContracts](docs/sdks/cumulative/README.md#getcumulativecontracts) - Cumulative number of contracts
* [getCumulativeTxCount](docs/sdks/cumulative/README.md#getcumulativetxcount) - Cumulative transaction count
* [getCumulativeDeployers](docs/sdks/cumulative/README.md#getcumulativedeployers) - Cumulative number of deployers

### [metrics.stakingInformation](docs/sdks/stakinginformation/README.md)

* [getValidatorCount](docs/sdks/stakinginformation/README.md#getvalidatorcount) - Get validation count by subnet id
* [getValidatorWeight](docs/sdks/stakinginformation/README.md#getvalidatorweight) - Get validation weight by subnet id
* [getDelegatorCount](docs/sdks/stakinginformation/README.md#getdelegatorcount) - Get delegation count by subnet id
* [getDelegatorWeight](docs/sdks/stakinginformation/README.md#getdelegatorweight) - Get delegation weight by subnet id


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

- [glacierEvmBalancesGetNativeBalance](docs/sdks/avalanchesdkbalances/README.md#getnativebalance)
- [glacierEvmBalancesListCollectibleBalances](docs/sdks/avalanchesdkbalances/README.md#listcollectiblebalances)
- [glacierEvmBalancesListErc1155Balances](docs/sdks/avalanchesdkbalances/README.md#listerc1155balances)
- [glacierEvmBalancesListErc20Balances](docs/sdks/avalanchesdkbalances/README.md#listerc20balances)
- [glacierEvmBalancesListErc721Balances](docs/sdks/avalanchesdkbalances/README.md#listerc721balances)
- [glacierEvmBlocksGetBlock](docs/sdks/avalanchesdkblocks/README.md#getblock)
- [glacierEvmBlocksGetLatestBlocks](docs/sdks/avalanchesdkblocks/README.md#getlatestblocks)
- [glacierEvmChainsGetChainInfo](docs/sdks/chains/README.md#getchaininfo)
- [glacierEvmChainsSupportedChains](docs/sdks/chains/README.md#supportedchains)
- [glacierEvmContractsGetContractMetadata](docs/sdks/contracts/README.md#getcontractmetadata)
- [glacierEvmTransactionsGetDeploymentTransaction](docs/sdks/avalanchesdktransactions/README.md#getdeploymenttransaction)
- [glacierEvmTransactionsGetTransaction](docs/sdks/avalanchesdktransactions/README.md#gettransaction)
- [glacierEvmTransactionsGetTransactionsForBlock](docs/sdks/avalanchesdktransactions/README.md#gettransactionsforblock)
- [glacierEvmTransactionsListContractDeployments](docs/sdks/avalanchesdktransactions/README.md#listcontractdeployments)
- [glacierEvmTransactionsListErc1155Transactions](docs/sdks/avalanchesdktransactions/README.md#listerc1155transactions)
- [glacierEvmTransactionsListErc20Transactions](docs/sdks/avalanchesdktransactions/README.md#listerc20transactions)
- [glacierEvmTransactionsListErc721Transactions](docs/sdks/avalanchesdktransactions/README.md#listerc721transactions)
- [glacierEvmTransactionsListInternalTransactions](docs/sdks/avalanchesdktransactions/README.md#listinternaltransactions)
- [glacierEvmTransactionsListLatestTransactions](docs/sdks/avalanchesdktransactions/README.md#listlatesttransactions)
- [glacierEvmTransactionsListNativeTransactions](docs/sdks/avalanchesdktransactions/README.md#listnativetransactions)
- [glacierEvmTransactionsListTransactions](docs/sdks/avalanchesdktransactions/README.md#listtransactions)
- [glacierEvmTransactionsListTransfers](docs/sdks/avalanchesdktransactions/README.md#listtransfers)
- [glacierNftsGetTokenDetails](docs/sdks/nfts/README.md#gettokendetails)
- [glacierNftsListTokens](docs/sdks/nfts/README.md#listtokens)
- [glacierNftsReindexNft](docs/sdks/nfts/README.md#reindexnft)
- [glacierOperationsGetOperationResult](docs/sdks/operations/README.md#getoperationresult)
- [glacierOperationsPostTransactionExportJob](docs/sdks/operations/README.md#posttransactionexportjob)
- [glacierPrimaryNetworkBalancesGetBalancesByAddresses](docs/sdks/balances/README.md#getbalancesbyaddresses)
- [glacierPrimaryNetworkBlocksGetBlockById](docs/sdks/blocks/README.md#getblockbyid)
- [glacierPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks](docs/sdks/blocks/README.md#listlatestprimarynetworkblocks)
- [glacierPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId](docs/sdks/blocks/README.md#listprimarynetworkblocksbynodeid)
- [glacierPrimaryNetworkGetAssetDetails](docs/sdks/primarynetwork/README.md#getassetdetails)
- [glacierPrimaryNetworkGetChainIdsForAddresses](docs/sdks/primarynetwork/README.md#getchainidsforaddresses)
- [glacierPrimaryNetworkGetNetworkDetails](docs/sdks/primarynetwork/README.md#getnetworkdetails)
- [glacierPrimaryNetworkGetSingleValidatorDetails](docs/sdks/primarynetwork/README.md#getsinglevalidatordetails)
- [glacierPrimaryNetworkListBlockchains](docs/sdks/primarynetwork/README.md#listblockchains)
- [glacierPrimaryNetworkListDelegators](docs/sdks/primarynetwork/README.md#listdelegators)
- [glacierPrimaryNetworkListSubnets](docs/sdks/primarynetwork/README.md#listsubnets)
- [glacierPrimaryNetworkListValidators](docs/sdks/primarynetwork/README.md#listvalidators)
- [glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards](docs/sdks/rewards/README.md#listhistoricalprimarynetworkrewards)
- [glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards](docs/sdks/rewards/README.md#listpendingprimarynetworkrewards)
- [glacierPrimaryNetworkTransactionsGetTxByHash](docs/sdks/transactions/README.md#gettxbyhash)
- [glacierPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions](docs/sdks/transactions/README.md#listactiveprimarynetworkstakingtransactions)
- [glacierPrimaryNetworkTransactionsListAssetTransactions](docs/sdks/transactions/README.md#listassettransactions)
- [glacierPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions](docs/sdks/transactions/README.md#listlatestprimarynetworktransactions)
- [glacierPrimaryNetworkUtxosGetUtxosByAddresses](docs/sdks/utxos/README.md#getutxosbyaddresses)
- [glacierPrimaryNetworkVerticesGetVertexByHash](docs/sdks/vertices/README.md#getvertexbyhash)
- [glacierPrimaryNetworkVerticesGetVertexByHeight](docs/sdks/vertices/README.md#getvertexbyheight)
- [glacierPrimaryNetworkVerticesListLatestXChainVertices](docs/sdks/vertices/README.md#listlatestxchainvertices)
- [glacierTeleporterGetTeleporterMessage](docs/sdks/teleporter/README.md#getteleportermessage)
- [glacierTeleporterListTeleporterMessages](docs/sdks/teleporter/README.md#listteleportermessages)
- [glacierWebhooksAddAddressesToWebhook](docs/sdks/webhooks/README.md#addaddressestowebhook)
- [glacierWebhooksCreateWebhook](docs/sdks/webhooks/README.md#createwebhook)
- [glacierWebhooksDeactivateWebhook](docs/sdks/webhooks/README.md#deactivatewebhook)
- [glacierWebhooksGenerateSharedSecret](docs/sdks/webhooks/README.md#generatesharedsecret)
- [glacierWebhooksGetAddressesFromWebhook](docs/sdks/webhooks/README.md#getaddressesfromwebhook)
- [glacierWebhooksGetSharedSecret](docs/sdks/webhooks/README.md#getsharedsecret)
- [glacierWebhooksGetWebhook](docs/sdks/webhooks/README.md#getwebhook)
- [glacierWebhooksListWebhooks](docs/sdks/webhooks/README.md#listwebhooks)
- [glacierWebhooksRemoveAddressesFromWebhook](docs/sdks/webhooks/README.md#removeaddressesfromwebhook)
- [glacierWebhooksUpdateWebhook](docs/sdks/webhooks/README.md#updatewebhook)
- [metricsChainMetricsGetEvmChainMetrics](docs/sdks/avalanchesdkmetrics/README.md#getevmchainmetrics)
- [metricsChainMetricsGetEvmChainRollingWindowMetrics](docs/sdks/avalanchesdkmetrics/README.md#getevmchainrollingwindowmetrics)
- [metricsChainMetricsGetStakingMetrics](docs/sdks/avalanchesdkmetrics/README.md#getstakingmetrics)
- [metricsChainThroughputGetActiveAddresses](docs/sdks/throughput/README.md#getactiveaddresses)
- [metricsChainThroughputGetActiveSenders](docs/sdks/throughput/README.md#getactivesenders)
- [metricsChainThroughputGetAvgGasPrice](docs/sdks/throughput/README.md#getavggasprice)
- [metricsChainThroughputGetAvgGps](docs/sdks/throughput/README.md#getavggps)
- [metricsChainThroughputGetAvgTps](docs/sdks/throughput/README.md#getavgtps)
- [metricsChainThroughputGetGasUsed](docs/sdks/throughput/README.md#getgasused)
- [metricsChainThroughputGetMaxGasPrice](docs/sdks/throughput/README.md#getmaxgasprice)
- [metricsChainThroughputGetMaxGps](docs/sdks/throughput/README.md#getmaxgps)
- [metricsChainThroughputGetMaxTps](docs/sdks/throughput/README.md#getmaxtps)
- [metricsChainThroughputGetRollingWindowAvgGasPrice](docs/sdks/throughput/README.md#getrollingwindowavggasprice)
- [metricsChainThroughputGetRollingWindowAvgGps](docs/sdks/throughput/README.md#getrollingwindowavggps)
- [metricsChainThroughputGetRollingWindowAvgTps](docs/sdks/throughput/README.md#getrollingwindowavgtps)
- [metricsChainThroughputGetRollingWindowGasUsed](docs/sdks/throughput/README.md#getrollingwindowgasused)
- [metricsChainThroughputGetRollingWindowMaxGasPrice](docs/sdks/throughput/README.md#getrollingwindowmaxgasprice)
- [metricsChainThroughputGetRollingWindowMaxGps](docs/sdks/throughput/README.md#getrollingwindowmaxgps)
- [metricsChainThroughputGetRollingWindowMaxTps](docs/sdks/throughput/README.md#getrollingwindowmaxtps)
- [metricsChainThroughputGetRollingWindowTxCount](docs/sdks/throughput/README.md#getrollingwindowtxcount)
- [metricsChainThroughputGetTxCount](docs/sdks/throughput/README.md#gettxcount)
- [metricsCumulativeGetCumulativeAddresses](docs/sdks/cumulative/README.md#getcumulativeaddresses)
- [metricsCumulativeGetCumulativeContracts](docs/sdks/cumulative/README.md#getcumulativecontracts)
- [metricsCumulativeGetCumulativeDeployers](docs/sdks/cumulative/README.md#getcumulativedeployers)
- [metricsCumulativeGetCumulativeTxCount](docs/sdks/cumulative/README.md#getcumulativetxcount)
- [metricsEvmChainsGetChainInformationByNetworkAndSubnetId](docs/sdks/avalanchesdkchains/README.md#getchaininformationbynetworkandsubnetid)
- [metricsEvmChainsGetChainInformationByNetwork](docs/sdks/avalanchesdkchains/README.md#getchaininformationbynetwork)
- [metricsEvmChainsGetChain](docs/sdks/avalanchesdkchains/README.md#getchain)
- [metricsEvmChainsGetMappingsBySubnetId](docs/sdks/avalanchesdkchains/README.md#getmappingsbysubnetid)
- [metricsEvmChainsGetMappings](docs/sdks/avalanchesdkchains/README.md#getmappings)
- [metricsEvmChainsGetSubnetInformationByNetworkAndSubnetId](docs/sdks/avalanchesdkchains/README.md#getsubnetinformationbynetworkandsubnetid)
- [metricsEvmChainsGetSubnetInformationByNetwork](docs/sdks/avalanchesdkchains/README.md#getsubnetinformationbynetwork)
- [metricsEvmChainsListChains](docs/sdks/avalanchesdkchains/README.md#listchains)
- [metricsHealthCheckHealthCheckV1](docs/sdks/healthcheck/README.md#healthcheckv1)
- [metricsHealthCheckHealthCheckV2](docs/sdks/healthcheck/README.md#healthcheckv2)
- [metricsLookingGlassCompositeQueryV1](docs/sdks/lookingglass/README.md#compositequeryv1)
- [metricsLookingGlassCompositeQueryV2](docs/sdks/lookingglass/README.md#compositequeryv2)
- [metricsLookingGlassGetAddressesByBalanceOverTime](docs/sdks/lookingglass/README.md#getaddressesbybalanceovertime)
- [metricsLookingGlassGetAddressesByBtcbBridged](docs/sdks/lookingglass/README.md#getaddressesbybtcbbridged)
- [metricsLookingGlassGetNftHoldersByContractAddress](docs/sdks/lookingglass/README.md#getnftholdersbycontractaddress)
- [metricsLookingGlassGetValidatorsByDateRange](docs/sdks/lookingglass/README.md#getvalidatorsbydaterange)
- [metricsStakingInformationGetDelegatorCount](docs/sdks/stakinginformation/README.md#getdelegatorcount)
- [metricsStakingInformationGetDelegatorWeight](docs/sdks/stakinginformation/README.md#getdelegatorweight)
- [metricsStakingInformationGetValidatorCount](docs/sdks/stakinginformation/README.md#getvalidatorcount)
- [metricsStakingInformationGetValidatorWeight](docs/sdks/stakinginformation/README.md#getvalidatorweight)


</details>
<!-- End Standalone functions [standalone-funcs] -->

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
    const result = await avalancheSDK.metrics.evm.chains.listChains({
        network: "mainnet",
    });

    for await (const page of result) {
        // handle page
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
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.metrics.healthCheck.healthCheckV1({
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
    const result = await avalancheSDK.metrics.healthCheck.healthCheckV1();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.HealthCheckV1ResponseBody | 503                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";
import { SDKValidationError } from "@avalabs/avalanche-sdk/models/errors";

const avalancheSDK = new AvalancheSDK();

async function run() {
    let result;
    try {
        result = await avalancheSDK.metrics.healthCheck.healthCheckV1();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.HealthCheckV1ResponseBody: {
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

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK({
    serverURL: "",
});

async function run() {
    const result = await avalancheSDK.metrics.healthCheck.healthCheckV1();

    // Handle the result
    console.log(result);
}

run();

```
### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.metrics.healthCheck.healthCheckV1({
        serverURL: "http://localhost:3001",
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

<!-- Start Debugging [debug] -->
## Debugging

To log HTTP requests and responses, you can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const sdk = new AvalancheSDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `chainId` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `listChains`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| chainId | string |  | The chainId parameter. |
| network | string |  | The network parameter. |


### Example

```typescript
import { AvalancheSDK } from "@avalabs/avalanche-sdk";

const avalancheSDK = new AvalancheSDK();

async function run() {
    const result = await avalancheSDK.metrics.evm.chains.listChains({
        network: "mainnet",
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=<no value>&utm_campaign=typescript)
