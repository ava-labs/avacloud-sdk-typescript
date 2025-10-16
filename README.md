
<div align="center">
    <h1> AvaCloud SDK TypeScript </h1>
        <p>
            The AvaCloud SDK is a powerful and flexible toolset designed to simplify the integration with AvaCloud's suite of blockchain services. Currently, this SDK is focused on providing robust support for Data APIs.          
        </p>
        <a href="https://developers.avacloud.io/avacloud-sdk/getting-started">
            <img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=3b6ef9&style=for-the-badge" />
        </a>

</div>

<!-- Start Summary [summary] -->
## Summary

Data API: The Data API provides web3 application developers with multi-chain data related to Avalanche's primary network, Avalanche subnets, and Ethereum. With Data API, you can easily build products that leverage real-time and historical transaction and transfer history, native and token balances, and various types of token metadata. The API is in Beta and may be subject to change.</br></br>If you have feedback or feature requests for the API, please submit them <a href="https://portal.productboard.com/dndv9ahlkdfye4opdm8ksafi/tabs/4-glacier-api">here</a>. Bug reports can be submitted <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJQrcp7QoNiqozMDKrVJGX5wpU827d3cVTgF8qa7t_J1Pb-g/viewform">here</a>, and any potential security issues can be reported <a href="https://immunefi.com/bounty/avalabs">here</a>.
<!-- End Summary [summary] -->

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



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "AvaCloudSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "@avalabs/avacloud-sdk",
        "--",
        "mcp", "start",
        "--server-url", "...",
        "--api-key", "...",
        "--chain-id", "...",
        "--network", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "AvaCloudSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "@avalabs/avacloud-sdk",
        "--",
        "mcp", "start",
        "--server-url", "...",
        "--api-key", "...",
        "--chain-id", "...",
        "--network", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @avalabs/avacloud-sdk -- mcp start --help
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
  serverURL: "https://api.example.com",
});

async function run() {
  await avaCloudSDK.sendAddressActivityWebhook({
    webhookId: "401da7d9-d6d7-46c8-b431-72ff1e1543f4",
    eventType: "address_activity",
    messageId: "bc9732db-2430-4296-afc3-c51267beb14a",
    event: {
      transaction: {
        blockHash:
          "0x2a47bebed93db4a21cc8339980f004cc67f17d0dff4a368001e450e7be2edaa0",
        blockNumber: "45396106",
        from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
        gas: "80000",
        gasPrice: "52000000000",
        maxFeePerGas: "52000000000",
        maxPriorityFeePerGas: "2000000000",
        txHash:
          "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
        txStatus: "1",
        input:
          "0xa9059cbb00000000000000000000000040e832c3df9562dfae5a86a4849f27f687a9b46b00000000000000000000000000000000000000000000000000000000c68b2a69",
        nonce: "0",
        to: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
        transactionIndex: 1,
        value: "0",
        type: 2,
        chainId: "43114",
        receiptCumulativeGasUsed: "668508",
        receiptGasUsed: "44038",
        receiptEffectiveGasPrice: "27000000000",
        receiptRoot:
          "0xe5b018c29a77c8a92c4ea2f2d7e58820283041a52e14a0620d90d13b881e1ee3",
        blockTimestamp: 1715621840,
        contractAddress: "0x0000000000000000000000000000000000000000",
        erc20Transfers: [
          {
            transactionHash:
              "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
            type: "ERC20",
            from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
            to: "0x40E832C3Df9562DfaE5A86A4849F27F687A9B46B",
            value: "3331009129",
            tokenId: "2",
            blockTimestamp: 1640995200,
            logIndex: 5,
            erc20Token: {
              address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
              name: "TetherToken",
              symbol: "USDt",
              decimals: 6,
              valueWithDecimals: "3331.009129",
            },
            erc721Token: {
              address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
              name: "TetherToken",
              symbol: "USDt",
              decimals: 6,
              valueWithDecimals: "3331.009129",
            },
            erc1155Token: {
              address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
              name: "TetherToken",
              symbol: "USDt",
              decimals: 6,
              valueWithDecimals: "3331.009129",
            },
          },
          {
            transactionHash:
              "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
            type: "ERC20",
            from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
            to: "0x40E832C3Df9562DfaE5A86A4849F27F687A9B46B",
            value: "3331009129",
            tokenId: "2",
            blockTimestamp: 1640995200,
            logIndex: 5,
            erc20Token: {
              address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
              name: "TetherToken",
              symbol: "USDt",
              decimals: 6,
              valueWithDecimals: "3331.009129",
            },
            erc721Token: {
              address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
              name: "TetherToken",
              symbol: "USDt",
              decimals: 6,
              valueWithDecimals: "3331.009129",
            },
            erc1155Token: {
              address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
              name: "TetherToken",
              symbol: "USDt",
              decimals: 6,
              valueWithDecimals: "3331.009129",
            },
          },
        ],
        erc721Transfers: [],
        erc1155Transfers: [],
        internalTransactions: [
          {
            from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
            to: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            internalTxType: "call",
            value: "50000000000000000",
            gasUsed: "44038",
            gasLimit: "50000",
            transactionHash:
              "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
          },
          {
            from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
            to: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            internalTxType: "call",
            value: "50000000000000000",
            gasUsed: "44038",
            gasLimit: "50000",
            transactionHash:
              "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
          },
          {
            from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
            to: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            internalTxType: "call",
            value: "50000000000000000",
            gasUsed: "44038",
            gasLimit: "50000",
            transactionHash:
              "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
          },
        ],
        accessList: [
          {
            accessAddresses: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            storageKeys: [
              "<value 1>",
              "<value 2>",
            ],
          },
          {
            accessAddresses: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            storageKeys: [
              "<value 1>",
              "<value 2>",
            ],
          },
          {
            accessAddresses: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            storageKeys: [
              "<value 1>",
              "<value 2>",
            ],
          },
        ],
        networkToken: {
          tokenName: "TetherToken",
          tokenSymbol: "USDt",
          tokenDecimals: 6,
          valueWithDecimals: "3331.009129",
        },
      },
      logs: [
        {
          address: "0x54C800d2331E10467143911aabCa092d68bF4166",
          topic0:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          topic1:
            "0x0000000000000000000000000000333883f313ad709f583d0a3d2e18a44ef29b",
          topic2:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          topic3:
            "0x0000000000000000000000000000000000000000000000000000000000001350",
          data: "0x",
          transactionIndex: 2,
          logIndex: 10,
          removed: false,
        },
        {
          address: "0x54C800d2331E10467143911aabCa092d68bF4166",
          topic0:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          topic1:
            "0x0000000000000000000000000000333883f313ad709f583d0a3d2e18a44ef29b",
          topic2:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          topic3:
            "0x0000000000000000000000000000000000000000000000000000000000001350",
          data: "0x",
          transactionIndex: 2,
          logIndex: 10,
          removed: false,
        },
        {
          address: "0x54C800d2331E10467143911aabCa092d68bF4166",
          topic0:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          topic1:
            "0x0000000000000000000000000000333883f313ad709f583d0a3d2e18a44ef29b",
          topic2:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          topic3:
            "0x0000000000000000000000000000000000000000000000000000000000001350",
          data: "0x",
          transactionIndex: 2,
          logIndex: 10,
          removed: false,
        },
      ],
    },
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [avaxSupply](docs/sdks/avaxsupply/README.md)

* [getAvaxSupply](docs/sdks/avaxsupply/README.md#getavaxsupply) - Get AVAX supply information

### [data](docs/sdks/data/README.md)

* [healthCheck](docs/sdks/data/README.md#healthcheck) - Get the health of the service

#### [data.evm.address.balances](docs/sdks/avacloudsdkbalances/README.md)

* [getNative](docs/sdks/avacloudsdkbalances/README.md#getnative) - Get native token balance
* [listErc20](docs/sdks/avacloudsdkbalances/README.md#listerc20) - List ERC-20 balances
* [listErc721](docs/sdks/avacloudsdkbalances/README.md#listerc721) - List ERC-721 balances
* [listErc1155](docs/sdks/avacloudsdkbalances/README.md#listerc1155) - List ERC-1155 balances
* [listCollectibles](docs/sdks/avacloudsdkbalances/README.md#listcollectibles) - List collectible (ERC-721/ERC-1155) balances

#### [data.evm.address.chains](docs/sdks/avacloudsdkdatachains/README.md)

* [list](docs/sdks/avacloudsdkdatachains/README.md#list) - List all chains associated with a given address

#### [data.evm.address.contracts](docs/sdks/avacloudsdkcontracts/README.md)

* [listDeployments](docs/sdks/avacloudsdkcontracts/README.md#listdeployments) - List deployed contracts

#### [data.evm.address.transactions](docs/sdks/avacloudsdkdatatransactions/README.md)

* [list](docs/sdks/avacloudsdkdatatransactions/README.md#list) - List transactions
* [listNative](docs/sdks/avacloudsdkdatatransactions/README.md#listnative) - List native transactions
* [listErc20](docs/sdks/avacloudsdkdatatransactions/README.md#listerc20) - List ERC-20 transfers
* [listErc721](docs/sdks/avacloudsdkdatatransactions/README.md#listerc721) - List ERC-721 transfers
* [listErc1155](docs/sdks/avacloudsdkdatatransactions/README.md#listerc1155) - List ERC-1155 transfers
* [listInternal](docs/sdks/avacloudsdkdatatransactions/README.md#listinternal) - List internal transactions

#### [data.evm.blocks](docs/sdks/blocks/README.md)

* [listLatestAllChains](docs/sdks/blocks/README.md#listlatestallchains) - List latest blocks across all supported EVM chains
* [listLatest](docs/sdks/blocks/README.md#listlatest) - List latest blocks
* [get](docs/sdks/blocks/README.md#get) - Get block
* [listTransactions](docs/sdks/blocks/README.md#listtransactions) - List transactions for a block

#### [data.evm.chains](docs/sdks/avacloudsdkchains/README.md)

* [list](docs/sdks/avacloudsdkchains/README.md#list) - List chains
* [get](docs/sdks/avacloudsdkchains/README.md#get) - Get chain information
* [~~getAddressChains~~](docs/sdks/avacloudsdkchains/README.md#getaddresschains) - **[Deprecated]** Gets a list of all chains where the address was either a sender or receiver in a transaction or ERC transfer. The list is currently updated every 15 minutes.

⚠️ **This operation will be removed in a future release.  Please use /v1/address/:address/chains endpoint instead** . :warning: **Deprecated**
* [~~listAllLatestTransactions~~](docs/sdks/avacloudsdkchains/README.md#listalllatesttransactions) - **[Deprecated]** Lists the latest transactions for all supported EVM chains. Filterable by status.

⚠️ **This operation will be removed in a future release.  Please use /v1/transactions endpoint instead** . :warning: **Deprecated**
* [~~listAllLatestBlocks~~](docs/sdks/avacloudsdkchains/README.md#listalllatestblocks) - **[Deprecated]** Lists the latest blocks for all supported EVM chains. Filterable by network.

⚠️ **This operation will be removed in a future release.  Please use /v1/blocks endpoint instead** . :warning: **Deprecated**

#### [data.evm.contracts](docs/sdks/contracts/README.md)

* [getDeploymentTransaction](docs/sdks/contracts/README.md#getdeploymenttransaction) - Get deployment transaction
* [getMetadata](docs/sdks/contracts/README.md#getmetadata) - Get contract metadata
* [listTransfers](docs/sdks/contracts/README.md#listtransfers) - List ERC transfers

#### [data.evm.transactions](docs/sdks/transactions/README.md)

* [listLatestAllChains](docs/sdks/transactions/README.md#listlatestallchains) - List the latest transactions across all supported EVM chains
* [get](docs/sdks/transactions/README.md#get) - Get transaction
* [listLatest](docs/sdks/transactions/README.md#listlatest) - List latest transactions

#### [data.icm](docs/sdks/icm/README.md)

* [get](docs/sdks/icm/README.md#get) - Get an ICM message
* [list](docs/sdks/icm/README.md#list) - List ICM messages
* [listByAddress](docs/sdks/icm/README.md#listbyaddress) - List ICM messages by address

#### [data.nfts](docs/sdks/nfts/README.md)

* [reindex](docs/sdks/nfts/README.md#reindex) - Reindex NFT metadata
* [list](docs/sdks/nfts/README.md#list) - List tokens
* [get](docs/sdks/nfts/README.md#get) - Get token details

#### [data.operations](docs/sdks/operations/README.md)

* [getResult](docs/sdks/operations/README.md#getresult) - Get operation
* [exportTransactions](docs/sdks/operations/README.md#exporttransactions) - Create transaction export operation

#### [data.primaryNetwork](docs/sdks/primarynetwork/README.md)

* [getAssetDetails](docs/sdks/primarynetwork/README.md#getassetdetails) - Get asset details
* [getChainIdsForAddresses](docs/sdks/primarynetwork/README.md#getchainidsforaddresses) - Get chain interactions for addresses
* [getNetworkDetails](docs/sdks/primarynetwork/README.md#getnetworkdetails) - Get network details
* [listBlockchains](docs/sdks/primarynetwork/README.md#listblockchains) - List blockchains
* [getBlockchainById](docs/sdks/primarynetwork/README.md#getblockchainbyid) - Get blockchain details by ID
* [listSubnets](docs/sdks/primarynetwork/README.md#listsubnets) - List subnets
* [getSubnetById](docs/sdks/primarynetwork/README.md#getsubnetbyid) - Get Subnet details by ID
* [listValidators](docs/sdks/primarynetwork/README.md#listvalidators) - List validators
* [getValidatorDetails](docs/sdks/primarynetwork/README.md#getvalidatordetails) - Get single validator details
* [listDelegators](docs/sdks/primarynetwork/README.md#listdelegators) - List delegators
* [listL1Validators](docs/sdks/primarynetwork/README.md#listl1validators) - List L1 validators

#### [data.primaryNetwork.balances](docs/sdks/balances/README.md)

* [listByAddresses](docs/sdks/balances/README.md#listbyaddresses) - Get balances

#### [data.primaryNetwork.blocks](docs/sdks/avacloudsdkblocks/README.md)

* [get](docs/sdks/avacloudsdkblocks/README.md#get) - Get block
* [listByNodeId](docs/sdks/avacloudsdkblocks/README.md#listbynodeid) - List blocks proposed by node
* [listLatest](docs/sdks/avacloudsdkblocks/README.md#listlatest) - List latest blocks

#### [data.primaryNetwork.rewards](docs/sdks/rewards/README.md)

* [listPendingRewards](docs/sdks/rewards/README.md#listpendingrewards) - List pending rewards
* [listHistoricalRewards](docs/sdks/rewards/README.md#listhistoricalrewards) - List historical rewards

#### [data.primaryNetwork.transactions](docs/sdks/avacloudsdktransactions/README.md)

* [get](docs/sdks/avacloudsdktransactions/README.md#get) - Get transaction
* [listLatest](docs/sdks/avacloudsdktransactions/README.md#listlatest) - List latest transactions
* [listActiveStakingTransactions](docs/sdks/avacloudsdktransactions/README.md#listactivestakingtransactions) - List staking transactions
* [listAssetTransactions](docs/sdks/avacloudsdktransactions/README.md#listassettransactions) - List asset transactions

#### [data.primaryNetwork.utxos](docs/sdks/utxos/README.md)

* [listByAddresses](docs/sdks/utxos/README.md#listbyaddresses) - List UTXOs

#### [data.primaryNetwork.vertices](docs/sdks/vertices/README.md)

* [listLatest](docs/sdks/vertices/README.md#listlatest) - List vertices
* [getByHash](docs/sdks/vertices/README.md#getbyhash) - Get vertex
* [listByHeight](docs/sdks/vertices/README.md#listbyheight) - List vertices by height

#### [data.signatureAggregator](docs/sdks/signatureaggregator/README.md)

* [aggregate](docs/sdks/signatureaggregator/README.md#aggregate) - Aggregate Signatures
* [get](docs/sdks/signatureaggregator/README.md#get) - Get Aggregated Signatures

#### [~~data.teleporter~~](docs/sdks/teleporter/README.md)

* [~~getTeleporterMessage~~](docs/sdks/teleporter/README.md#getteleportermessage) - **[Deprecated]** Gets a teleporter message by message ID.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages/:messageId endpoint instead** . :warning: **Deprecated**
* [~~listTeleporterMessages~~](docs/sdks/teleporter/README.md#listteleportermessages) - **[Deprecated]** Lists teleporter messages. Ordered by timestamp in  descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages endpoint instead** . :warning: **Deprecated**
* [~~listTeleporterMessagesByAddress~~](docs/sdks/teleporter/README.md#listteleportermessagesbyaddress) - **[Deprecated]** Lists teleporter messages by address. Ordered by  timestamp in descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/addresses/:address/messages endpoint instead** . :warning: **Deprecated**

#### [data.usageMetrics](docs/sdks/usagemetrics/README.md)

* [getUsage](docs/sdks/usagemetrics/README.md#getusage) - Get usage metrics for the Data API
* [getLogs](docs/sdks/usagemetrics/README.md#getlogs) - Get logs for requests made by client
* [getSubnetRpcUsage](docs/sdks/usagemetrics/README.md#getsubnetrpcusage) - Get usage metrics for the Subnet RPC
* [~~getRpcUsageMetrics~~](docs/sdks/usagemetrics/README.md#getrpcusagemetrics) - **[Deprecated]**  Gets metrics for public Subnet RPC usage over a specified time interval aggregated at the specified time-duration granularity.

⚠️ **This operation will be removed in a future release.  Please use /v1/subnetRpcUsageMetrics endpoint instead**. :warning: **Deprecated**

### [lookingGlass](docs/sdks/lookingglass/README.md)

* [compositeQuery](docs/sdks/lookingglass/README.md#compositequery) - Composite query

### [metrics](docs/sdks/metrics/README.md)

* [healthCheck](docs/sdks/metrics/README.md#healthcheck) - Get the health of the service

#### [metrics.chains](docs/sdks/chains/README.md)

* [list](docs/sdks/chains/README.md#list) - Get a list of supported blockchains
* [get](docs/sdks/chains/README.md#get) - Get chain information for supported blockchain
* [getMetrics](docs/sdks/chains/README.md#getmetrics) - Get metrics for EVM chains
* [getRollingWindowMetrics](docs/sdks/chains/README.md#getrollingwindowmetrics) - Get rolling window metrics for EVM chains
* [~~getTeleporterMetrics~~](docs/sdks/chains/README.md#getteleportermetrics) - Gets teleporter metrics for an EVM chain. :warning: **Deprecated**
* [getICMMetrics](docs/sdks/chains/README.md#geticmmetrics) - Get Interchain Message (ICM) metrics
* [getICMRollingWindowMetrics](docs/sdks/chains/README.md#geticmrollingwindowmetrics) - Get Interchain Message (ICM) rolling window metrics
* [listNftHolders](docs/sdks/chains/README.md#listnftholders) - Get NFT holders by contract address
* [listTokenHoldersAboveThreshold](docs/sdks/chains/README.md#listtokenholdersabovethreshold) - Get addresses by balance over time
* [listBTCbBridgersAboveThreshold](docs/sdks/chains/README.md#listbtcbbridgersabovethreshold) - Get addresses by BTCb bridged balance

#### [metrics.l1Validators](docs/sdks/l1validators/README.md)

* [listMetrics](docs/sdks/l1validators/README.md#listmetrics) - Get given metric for all validators
* [getMetricsByValidationId](docs/sdks/l1validators/README.md#getmetricsbyvalidationid) - Get metric values with given validationId and timestamp range
* [getMetricsByNodeId](docs/sdks/l1validators/README.md#getmetricsbynodeid) - Get metric values with given nodeId and timestamp range
* [getMetricsBySubnetId](docs/sdks/l1validators/README.md#getmetricsbysubnetid) - Get metric values with given subnetId and timestamp range

#### [metrics.networks](docs/sdks/networks/README.md)

* [getStakingMetrics](docs/sdks/networks/README.md#getstakingmetrics) - Get staking metrics for a given subnet

#### [metrics.subnets](docs/sdks/subnets/README.md)

* [getValidators](docs/sdks/subnets/README.md#getvalidators) - Get addresses running validators during a given time frame

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create a webhook
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook by ID
* [deactivate](docs/sdks/webhooks/README.md#deactivate) - Deactivate a webhook
* [update](docs/sdks/webhooks/README.md#update) - Update a webhook
* [generateOrRotateSharedSecret](docs/sdks/webhooks/README.md#generateorrotatesharedsecret) - Generate or rotate a shared secret
* [getSharedSecret](docs/sdks/webhooks/README.md#getsharedsecret) - Get a shared secret

#### [webhooks.addresses](docs/sdks/addresses/README.md)

* [list](docs/sdks/addresses/README.md#list) - List adresses by EVM activity webhooks
* [remove](docs/sdks/addresses/README.md#remove) - Remove addresses from EVM activity  webhook
* [add](docs/sdks/addresses/README.md#add) - Add addresses to EVM activity webhook

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

- [`avaxSupplyGetAVAXSupply`](docs/sdks/avaxsupply/README.md#getavaxsupply) - Get AVAX supply information
- [`dataEvmAddressBalancesGetNative`](docs/sdks/avacloudsdkbalances/README.md#getnative) - Get native token balance
- [`dataEvmAddressBalancesListCollectibles`](docs/sdks/avacloudsdkbalances/README.md#listcollectibles) - List collectible (ERC-721/ERC-1155) balances
- [`dataEvmAddressBalancesListErc1155`](docs/sdks/avacloudsdkbalances/README.md#listerc1155) - List ERC-1155 balances
- [`dataEvmAddressBalancesListErc20`](docs/sdks/avacloudsdkbalances/README.md#listerc20) - List ERC-20 balances
- [`dataEvmAddressBalancesListErc721`](docs/sdks/avacloudsdkbalances/README.md#listerc721) - List ERC-721 balances
- [`dataEvmAddressChainsList`](docs/sdks/avacloudsdkdatachains/README.md#list) - List all chains associated with a given address
- [`dataEvmAddressContractsListDeployments`](docs/sdks/avacloudsdkcontracts/README.md#listdeployments) - List deployed contracts
- [`dataEvmAddressTransactionsList`](docs/sdks/avacloudsdkdatatransactions/README.md#list) - List transactions
- [`dataEvmAddressTransactionsListErc1155`](docs/sdks/avacloudsdkdatatransactions/README.md#listerc1155) - List ERC-1155 transfers
- [`dataEvmAddressTransactionsListErc20`](docs/sdks/avacloudsdkdatatransactions/README.md#listerc20) - List ERC-20 transfers
- [`dataEvmAddressTransactionsListErc721`](docs/sdks/avacloudsdkdatatransactions/README.md#listerc721) - List ERC-721 transfers
- [`dataEvmAddressTransactionsListInternal`](docs/sdks/avacloudsdkdatatransactions/README.md#listinternal) - List internal transactions
- [`dataEvmAddressTransactionsListNative`](docs/sdks/avacloudsdkdatatransactions/README.md#listnative) - List native transactions
- [`dataEvmBlocksGet`](docs/sdks/blocks/README.md#get) - Get block
- [`dataEvmBlocksListLatest`](docs/sdks/blocks/README.md#listlatest) - List latest blocks
- [`dataEvmBlocksListLatestAllChains`](docs/sdks/blocks/README.md#listlatestallchains) - List latest blocks across all supported EVM chains
- [`dataEvmBlocksListTransactions`](docs/sdks/blocks/README.md#listtransactions) - List transactions for a block
- [`dataEvmChainsGet`](docs/sdks/avacloudsdkchains/README.md#get) - Get chain information
- [`dataEvmChainsList`](docs/sdks/avacloudsdkchains/README.md#list) - List chains
- [`dataEvmContractsGetDeploymentTransaction`](docs/sdks/contracts/README.md#getdeploymenttransaction) - Get deployment transaction
- [`dataEvmContractsGetMetadata`](docs/sdks/contracts/README.md#getmetadata) - Get contract metadata
- [`dataEvmContractsListTransfers`](docs/sdks/contracts/README.md#listtransfers) - List ERC transfers
- [`dataEvmTransactionsGet`](docs/sdks/transactions/README.md#get) - Get transaction
- [`dataEvmTransactionsListLatest`](docs/sdks/transactions/README.md#listlatest) - List latest transactions
- [`dataEvmTransactionsListLatestAllChains`](docs/sdks/transactions/README.md#listlatestallchains) - List the latest transactions across all supported EVM chains
- [`dataHealthCheck`](docs/sdks/data/README.md#healthcheck) - Get the health of the service
- [`dataIcmGet`](docs/sdks/icm/README.md#get) - Get an ICM message
- [`dataIcmList`](docs/sdks/icm/README.md#list) - List ICM messages
- [`dataIcmListByAddress`](docs/sdks/icm/README.md#listbyaddress) - List ICM messages by address
- [`dataNftsGet`](docs/sdks/nfts/README.md#get) - Get token details
- [`dataNftsList`](docs/sdks/nfts/README.md#list) - List tokens
- [`dataNftsReindex`](docs/sdks/nfts/README.md#reindex) - Reindex NFT metadata
- [`dataOperationsExportTransactions`](docs/sdks/operations/README.md#exporttransactions) - Create transaction export operation
- [`dataOperationsGetResult`](docs/sdks/operations/README.md#getresult) - Get operation
- [`dataPrimaryNetworkBalancesListByAddresses`](docs/sdks/balances/README.md#listbyaddresses) - Get balances
- [`dataPrimaryNetworkBlocksGet`](docs/sdks/avacloudsdkblocks/README.md#get) - Get block
- [`dataPrimaryNetworkBlocksListByNodeId`](docs/sdks/avacloudsdkblocks/README.md#listbynodeid) - List blocks proposed by node
- [`dataPrimaryNetworkBlocksListLatest`](docs/sdks/avacloudsdkblocks/README.md#listlatest) - List latest blocks
- [`dataPrimaryNetworkGetAssetDetails`](docs/sdks/primarynetwork/README.md#getassetdetails) - Get asset details
- [`dataPrimaryNetworkGetBlockchainById`](docs/sdks/primarynetwork/README.md#getblockchainbyid) - Get blockchain details by ID
- [`dataPrimaryNetworkGetChainIdsForAddresses`](docs/sdks/primarynetwork/README.md#getchainidsforaddresses) - Get chain interactions for addresses
- [`dataPrimaryNetworkGetNetworkDetails`](docs/sdks/primarynetwork/README.md#getnetworkdetails) - Get network details
- [`dataPrimaryNetworkGetSubnetById`](docs/sdks/primarynetwork/README.md#getsubnetbyid) - Get Subnet details by ID
- [`dataPrimaryNetworkGetValidatorDetails`](docs/sdks/primarynetwork/README.md#getvalidatordetails) - Get single validator details
- [`dataPrimaryNetworkListBlockchains`](docs/sdks/primarynetwork/README.md#listblockchains) - List blockchains
- [`dataPrimaryNetworkListDelegators`](docs/sdks/primarynetwork/README.md#listdelegators) - List delegators
- [`dataPrimaryNetworkListL1Validators`](docs/sdks/primarynetwork/README.md#listl1validators) - List L1 validators
- [`dataPrimaryNetworkListSubnets`](docs/sdks/primarynetwork/README.md#listsubnets) - List subnets
- [`dataPrimaryNetworkListValidators`](docs/sdks/primarynetwork/README.md#listvalidators) - List validators
- [`dataPrimaryNetworkRewardsListHistoricalRewards`](docs/sdks/rewards/README.md#listhistoricalrewards) - List historical rewards
- [`dataPrimaryNetworkRewardsListPendingRewards`](docs/sdks/rewards/README.md#listpendingrewards) - List pending rewards
- [`dataPrimaryNetworkTransactionsGet`](docs/sdks/avacloudsdktransactions/README.md#get) - Get transaction
- [`dataPrimaryNetworkTransactionsListActiveStakingTransactions`](docs/sdks/avacloudsdktransactions/README.md#listactivestakingtransactions) - List staking transactions
- [`dataPrimaryNetworkTransactionsListAssetTransactions`](docs/sdks/avacloudsdktransactions/README.md#listassettransactions) - List asset transactions
- [`dataPrimaryNetworkTransactionsListLatest`](docs/sdks/avacloudsdktransactions/README.md#listlatest) - List latest transactions
- [`dataPrimaryNetworkUtxosListByAddresses`](docs/sdks/utxos/README.md#listbyaddresses) - List UTXOs
- [`dataPrimaryNetworkVerticesGetByHash`](docs/sdks/vertices/README.md#getbyhash) - Get vertex
- [`dataPrimaryNetworkVerticesListByHeight`](docs/sdks/vertices/README.md#listbyheight) - List vertices by height
- [`dataPrimaryNetworkVerticesListLatest`](docs/sdks/vertices/README.md#listlatest) - List vertices
- [`dataSignatureAggregatorAggregate`](docs/sdks/signatureaggregator/README.md#aggregate) - Aggregate Signatures
- [`dataSignatureAggregatorGet`](docs/sdks/signatureaggregator/README.md#get) - Get Aggregated Signatures
- [`dataUsageMetricsGetLogs`](docs/sdks/usagemetrics/README.md#getlogs) - Get logs for requests made by client
- [`dataUsageMetricsGetSubnetRpcUsage`](docs/sdks/usagemetrics/README.md#getsubnetrpcusage) - Get usage metrics for the Subnet RPC
- [`dataUsageMetricsGetUsage`](docs/sdks/usagemetrics/README.md#getusage) - Get usage metrics for the Data API
- [`lookingGlassCompositeQuery`](docs/sdks/lookingglass/README.md#compositequery) - Composite query
- [`metricsChainsGet`](docs/sdks/chains/README.md#get) - Get chain information for supported blockchain
- [`metricsChainsGetICMMetrics`](docs/sdks/chains/README.md#geticmmetrics) - Get Interchain Message (ICM) metrics
- [`metricsChainsGetICMRollingWindowMetrics`](docs/sdks/chains/README.md#geticmrollingwindowmetrics) - Get Interchain Message (ICM) rolling window metrics
- [`metricsChainsGetMetrics`](docs/sdks/chains/README.md#getmetrics) - Get metrics for EVM chains
- [`metricsChainsGetRollingWindowMetrics`](docs/sdks/chains/README.md#getrollingwindowmetrics) - Get rolling window metrics for EVM chains
- [`metricsChainsList`](docs/sdks/chains/README.md#list) - Get a list of supported blockchains
- [`metricsChainsListBTCbBridgersAboveThreshold`](docs/sdks/chains/README.md#listbtcbbridgersabovethreshold) - Get addresses by BTCb bridged balance
- [`metricsChainsListNftHolders`](docs/sdks/chains/README.md#listnftholders) - Get NFT holders by contract address
- [`metricsChainsListTokenHoldersAboveThreshold`](docs/sdks/chains/README.md#listtokenholdersabovethreshold) - Get addresses by balance over time
- [`metricsHealthCheck`](docs/sdks/metrics/README.md#healthcheck) - Get the health of the service
- [`metricsL1ValidatorsGetMetricsByNodeId`](docs/sdks/l1validators/README.md#getmetricsbynodeid) - Get metric values with given nodeId and timestamp range
- [`metricsL1ValidatorsGetMetricsBySubnetId`](docs/sdks/l1validators/README.md#getmetricsbysubnetid) - Get metric values with given subnetId and timestamp range
- [`metricsL1ValidatorsGetMetricsByValidationId`](docs/sdks/l1validators/README.md#getmetricsbyvalidationid) - Get metric values with given validationId and timestamp range
- [`metricsL1ValidatorsListMetrics`](docs/sdks/l1validators/README.md#listmetrics) - Get given metric for all validators
- [`metricsNetworksGetStakingMetrics`](docs/sdks/networks/README.md#getstakingmetrics) - Get staking metrics for a given subnet
- [`metricsSubnetsGetValidators`](docs/sdks/subnets/README.md#getvalidators) - Get addresses running validators during a given time frame
- [`webhooksAddressesAdd`](docs/sdks/addresses/README.md#add) - Add addresses to EVM activity webhook
- [`webhooksAddressesList`](docs/sdks/addresses/README.md#list) - List adresses by EVM activity webhooks
- [`webhooksAddressesRemove`](docs/sdks/addresses/README.md#remove) - Remove addresses from EVM activity  webhook
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`webhooksDeactivate`](docs/sdks/webhooks/README.md#deactivate) - Deactivate a webhook
- [`webhooksGenerateOrRotateSharedSecret`](docs/sdks/webhooks/README.md#generateorrotatesharedsecret) - Generate or rotate a shared secret
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook by ID
- [`webhooksGetSharedSecret`](docs/sdks/webhooks/README.md#getsharedsecret) - Get a shared secret
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update a webhook
- ~~[`dataEvmChainsGetAddressChains`](docs/sdks/avacloudsdkchains/README.md#getaddresschains)~~ - **[Deprecated]** Gets a list of all chains where the address was either a sender or receiver in a transaction or ERC transfer. The list is currently updated every 15 minutes.

⚠️ **This operation will be removed in a future release.  Please use /v1/address/:address/chains endpoint instead** . :warning: **Deprecated**
- ~~[`dataEvmChainsListAllLatestBlocks`](docs/sdks/avacloudsdkchains/README.md#listalllatestblocks)~~ - **[Deprecated]** Lists the latest blocks for all supported EVM chains. Filterable by network.

⚠️ **This operation will be removed in a future release.  Please use /v1/blocks endpoint instead** . :warning: **Deprecated**
- ~~[`dataEvmChainsListAllLatestTransactions`](docs/sdks/avacloudsdkchains/README.md#listalllatesttransactions)~~ - **[Deprecated]** Lists the latest transactions for all supported EVM chains. Filterable by status.

⚠️ **This operation will be removed in a future release.  Please use /v1/transactions endpoint instead** . :warning: **Deprecated**
- ~~[`dataTeleporterGetTeleporterMessage`](docs/sdks/teleporter/README.md#getteleportermessage)~~ - **[Deprecated]** Gets a teleporter message by message ID.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages/:messageId endpoint instead** . :warning: **Deprecated**
- ~~[`dataTeleporterListTeleporterMessages`](docs/sdks/teleporter/README.md#listteleportermessages)~~ - **[Deprecated]** Lists teleporter messages. Ordered by timestamp in  descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages endpoint instead** . :warning: **Deprecated**
- ~~[`dataTeleporterListTeleporterMessagesByAddress`](docs/sdks/teleporter/README.md#listteleportermessagesbyaddress)~~ - **[Deprecated]** Lists teleporter messages by address. Ordered by  timestamp in descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/addresses/:address/messages endpoint instead** . :warning: **Deprecated**
- ~~[`dataUsageMetricsGetRpcUsageMetrics`](docs/sdks/usagemetrics/README.md#getrpcusagemetrics)~~ - **[Deprecated]**  Gets metrics for public Subnet RPC usage over a specified time interval aggregated at the specified time-duration granularity.

⚠️ **This operation will be removed in a future release.  Please use /v1/subnetRpcUsageMetrics endpoint instead**. :warning: **Deprecated**
- ~~[`metricsChainsGetTeleporterMetrics`](docs/sdks/chains/README.md#getteleportermetrics)~~ - Gets teleporter metrics for an EVM chain. :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `chainId` to `"43114"` at SDK initialization and then you do not have to pass the same value on calls to operations like `list`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


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
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.metrics.chains.list({
    network: "mainnet",
  });

  for await (const page of result) {
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
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.chains.list({
    network: "mainnet",
  });

  for await (const page of result) {
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
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await avaCloudSDK.metrics.healthCheck({
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

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
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
  const result = await avaCloudSDK.metrics.healthCheck();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AvaCloudSDKError`](./src/models/errors/avacloudsdkerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";
import * as errors from "@avalabs/avacloud-sdk/models/errors";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
});

async function run() {
  try {
    await avaCloudSDK.data.nfts.reindex({
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      tokenId: "145",
    });
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.AvaCloudSDKError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequest) {
        console.log(error.data$.message); // errors.Message
        console.log(error.data$.statusCode); // number
        console.log(error.data$.error); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`AvaCloudSDKError`](./src/models/errors/avacloudsdkerror.ts): The base class for HTTP error responses.
  * [`BadRequest`](./src/models/errors/badrequest.ts): Bad requests generally mean the client has passed invalid      or malformed parameters. Error messages in the response could help in      evaluating the error. Status code `400`.
  * [`Unauthorized`](./src/models/errors/unauthorized.ts): When a client attempts to access resources that require      authorization credentials but the client lacks proper authentication      in the request, the server responds with 401. Status code `401`.
  * [`Forbidden`](./src/models/errors/forbidden.ts): When a client attempts to access resources with valid     credentials but doesn't have the privilege to perform that action,      the server responds with 403. Status code `403`.
  * [`NotFound`](./src/models/errors/notfound.ts): The error is mostly returned when the client requests     with either mistyped URL, or the passed resource is moved or deleted,      or the resource doesn't exist. Status code `404`.
  * [`TooManyRequests`](./src/models/errors/toomanyrequests.ts): This error is returned when the client has sent too many,     and has hit the rate limit. Status code `429`.
  * [`InternalServerError`](./src/models/errors/internalservererror.ts): The error is a generic server side error that is      returned for any uncaught and unexpected issues on the server side.      This should be very rare, and you may reach out to us if the problem      persists for a longer duration. Status code `500`.
  * [`BadGateway`](./src/models/errors/badgateway.ts): This is an internal error indicating invalid response        received by the client-facing proxy or gateway from the upstream server. Status code `502`.
  * [`ServiceUnavailable`](./src/models/errors/serviceunavailable.ts): The error is returned for certain routes on a particular     Subnet. This indicates an internal problem with our Subnet node, and may      not necessarily mean the Subnet is down or affected. Status code `503`.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`AvaCloudSDKError`](./src/models/errors/avacloudsdkerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

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
  serverURL: "https://api.example.com",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await avaCloudSDK.metrics.healthCheck();

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

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
  * [Verify Webhook Signature](#verify-webhook-signature)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

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
