/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { AvaCloudSDKCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$dataEvmBalancesGetNativeBalance } from "./tools/dataEvmBalancesGetNativeBalance.js";
import { tool$dataEvmBalancesListCollectibleBalances } from "./tools/dataEvmBalancesListCollectibleBalances.js";
import { tool$dataEvmBalancesListErc1155Balances } from "./tools/dataEvmBalancesListErc1155Balances.js";
import { tool$dataEvmBalancesListErc20Balances } from "./tools/dataEvmBalancesListErc20Balances.js";
import { tool$dataEvmBalancesListErc721Balances } from "./tools/dataEvmBalancesListErc721Balances.js";
import { tool$dataEvmBlocksGetBlock } from "./tools/dataEvmBlocksGetBlock.js";
import { tool$dataEvmBlocksGetLatestBlocks } from "./tools/dataEvmBlocksGetLatestBlocks.js";
import { tool$dataEvmBlocksListLatestBlocksAllChains } from "./tools/dataEvmBlocksListLatestBlocksAllChains.js";
import { tool$dataEvmChainsGetAddressChains } from "./tools/dataEvmChainsGetAddressChains.js";
import { tool$dataEvmChainsGetChainInfo } from "./tools/dataEvmChainsGetChainInfo.js";
import { tool$dataEvmChainsListAddressChains } from "./tools/dataEvmChainsListAddressChains.js";
import { tool$dataEvmChainsListAllLatestBlocks } from "./tools/dataEvmChainsListAllLatestBlocks.js";
import { tool$dataEvmChainsListAllLatestTransactions } from "./tools/dataEvmChainsListAllLatestTransactions.js";
import { tool$dataEvmChainsSupportedChains } from "./tools/dataEvmChainsSupportedChains.js";
import { tool$dataEvmContractsGetContractMetadata } from "./tools/dataEvmContractsGetContractMetadata.js";
import { tool$dataEvmTransactionsGetDeploymentTransaction } from "./tools/dataEvmTransactionsGetDeploymentTransaction.js";
import { tool$dataEvmTransactionsGetTransaction } from "./tools/dataEvmTransactionsGetTransaction.js";
import { tool$dataEvmTransactionsGetTransactionsForBlock } from "./tools/dataEvmTransactionsGetTransactionsForBlock.js";
import { tool$dataEvmTransactionsListContractDeployments } from "./tools/dataEvmTransactionsListContractDeployments.js";
import { tool$dataEvmTransactionsListErc1155Transactions } from "./tools/dataEvmTransactionsListErc1155Transactions.js";
import { tool$dataEvmTransactionsListErc20Transactions } from "./tools/dataEvmTransactionsListErc20Transactions.js";
import { tool$dataEvmTransactionsListErc721Transactions } from "./tools/dataEvmTransactionsListErc721Transactions.js";
import { tool$dataEvmTransactionsListInternalTransactions } from "./tools/dataEvmTransactionsListInternalTransactions.js";
import { tool$dataEvmTransactionsListLatestTransactions } from "./tools/dataEvmTransactionsListLatestTransactions.js";
import { tool$dataEvmTransactionsListLatestTransactionsAllChains } from "./tools/dataEvmTransactionsListLatestTransactionsAllChains.js";
import { tool$dataEvmTransactionsListNativeTransactions } from "./tools/dataEvmTransactionsListNativeTransactions.js";
import { tool$dataEvmTransactionsListTransactions } from "./tools/dataEvmTransactionsListTransactions.js";
import { tool$dataEvmTransactionsListTransfers } from "./tools/dataEvmTransactionsListTransfers.js";
import { tool$dataHealthCheckDataHealthCheck } from "./tools/dataHealthCheckDataHealthCheck.js";
import { tool$dataIcmGetIcmMessage } from "./tools/dataIcmGetIcmMessage.js";
import { tool$dataIcmListIcmMessages } from "./tools/dataIcmListIcmMessages.js";
import { tool$dataIcmListIcmMessagesByAddress } from "./tools/dataIcmListIcmMessagesByAddress.js";
import { tool$dataNftsGetTokenDetails } from "./tools/dataNftsGetTokenDetails.js";
import { tool$dataNftsListTokens } from "./tools/dataNftsListTokens.js";
import { tool$dataNftsReindexNft } from "./tools/dataNftsReindexNft.js";
import { tool$dataOperationsGetOperationResult } from "./tools/dataOperationsGetOperationResult.js";
import { tool$dataOperationsPostTransactionExportJob } from "./tools/dataOperationsPostTransactionExportJob.js";
import { tool$dataPrimaryNetworkBalancesGetBalancesByAddresses } from "./tools/dataPrimaryNetworkBalancesGetBalancesByAddresses.js";
import { tool$dataPrimaryNetworkBlocksGetBlockById } from "./tools/dataPrimaryNetworkBlocksGetBlockById.js";
import { tool$dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks } from "./tools/dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks.js";
import { tool$dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId } from "./tools/dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId.js";
import { tool$dataPrimaryNetworkGetAssetDetails } from "./tools/dataPrimaryNetworkGetAssetDetails.js";
import { tool$dataPrimaryNetworkGetChainIdsForAddresses } from "./tools/dataPrimaryNetworkGetChainIdsForAddresses.js";
import { tool$dataPrimaryNetworkGetNetworkDetails } from "./tools/dataPrimaryNetworkGetNetworkDetails.js";
import { tool$dataPrimaryNetworkGetSingleValidatorDetails } from "./tools/dataPrimaryNetworkGetSingleValidatorDetails.js";
import { tool$dataPrimaryNetworkGetSubnetById } from "./tools/dataPrimaryNetworkGetSubnetById.js";
import { tool$dataPrimaryNetworkListBlockchains } from "./tools/dataPrimaryNetworkListBlockchains.js";
import { tool$dataPrimaryNetworkListDelegators } from "./tools/dataPrimaryNetworkListDelegators.js";
import { tool$dataPrimaryNetworkListL1Validators } from "./tools/dataPrimaryNetworkListL1Validators.js";
import { tool$dataPrimaryNetworkListSubnets } from "./tools/dataPrimaryNetworkListSubnets.js";
import { tool$dataPrimaryNetworkListValidators } from "./tools/dataPrimaryNetworkListValidators.js";
import { tool$dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards } from "./tools/dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards.js";
import { tool$dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards } from "./tools/dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards.js";
import { tool$dataPrimaryNetworkTransactionsGetTxByHash } from "./tools/dataPrimaryNetworkTransactionsGetTxByHash.js";
import { tool$dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions } from "./tools/dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions.js";
import { tool$dataPrimaryNetworkTransactionsListAssetTransactions } from "./tools/dataPrimaryNetworkTransactionsListAssetTransactions.js";
import { tool$dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions } from "./tools/dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions.js";
import { tool$dataPrimaryNetworkUtxosGetUtxosByAddresses } from "./tools/dataPrimaryNetworkUtxosGetUtxosByAddresses.js";
import { tool$dataPrimaryNetworkVerticesGetVertexByHash } from "./tools/dataPrimaryNetworkVerticesGetVertexByHash.js";
import { tool$dataPrimaryNetworkVerticesGetVertexByHeight } from "./tools/dataPrimaryNetworkVerticesGetVertexByHeight.js";
import { tool$dataPrimaryNetworkVerticesListLatestXChainVertices } from "./tools/dataPrimaryNetworkVerticesListLatestXChainVertices.js";
import { tool$dataSignatureAggregatorAggregateSignatures } from "./tools/dataSignatureAggregatorAggregateSignatures.js";
import { tool$dataTeleporterGetTeleporterMessage } from "./tools/dataTeleporterGetTeleporterMessage.js";
import { tool$dataTeleporterListTeleporterMessages } from "./tools/dataTeleporterListTeleporterMessages.js";
import { tool$dataTeleporterListTeleporterMessagesByAddress } from "./tools/dataTeleporterListTeleporterMessagesByAddress.js";
import { tool$dataUsageMetricsGetApiLogs } from "./tools/dataUsageMetricsGetApiLogs.js";
import { tool$dataUsageMetricsGetApiUsageMetrics } from "./tools/dataUsageMetricsGetApiUsageMetrics.js";
import { tool$dataUsageMetricsGetRpcUsageMetrics } from "./tools/dataUsageMetricsGetRpcUsageMetrics.js";
import { tool$dataWebhooksAddAddressesToWebhook } from "./tools/dataWebhooksAddAddressesToWebhook.js";
import { tool$dataWebhooksCreateWebhook } from "./tools/dataWebhooksCreateWebhook.js";
import { tool$dataWebhooksDeactivateWebhook } from "./tools/dataWebhooksDeactivateWebhook.js";
import { tool$dataWebhooksGenerateSharedSecret } from "./tools/dataWebhooksGenerateSharedSecret.js";
import { tool$dataWebhooksGetAddressesFromWebhook } from "./tools/dataWebhooksGetAddressesFromWebhook.js";
import { tool$dataWebhooksGetSharedSecret } from "./tools/dataWebhooksGetSharedSecret.js";
import { tool$dataWebhooksGetWebhook } from "./tools/dataWebhooksGetWebhook.js";
import { tool$dataWebhooksListWebhooks } from "./tools/dataWebhooksListWebhooks.js";
import { tool$dataWebhooksRemoveAddressesFromWebhook } from "./tools/dataWebhooksRemoveAddressesFromWebhook.js";
import { tool$dataWebhooksUpdateWebhook } from "./tools/dataWebhooksUpdateWebhook.js";
import { tool$metricsChainMetricsGetEvmChainMetrics } from "./tools/metricsChainMetricsGetEvmChainMetrics.js";
import { tool$metricsChainMetricsGetEvmChainRollingWindowMetrics } from "./tools/metricsChainMetricsGetEvmChainRollingWindowMetrics.js";
import { tool$metricsChainMetricsGetStakingMetrics } from "./tools/metricsChainMetricsGetStakingMetrics.js";
import { tool$metricsChainMetricsGetTeleporterMetricsByChain } from "./tools/metricsChainMetricsGetTeleporterMetricsByChain.js";
import { tool$metricsEvmChainsGetChain } from "./tools/metricsEvmChainsGetChain.js";
import { tool$metricsEvmChainsListChains } from "./tools/metricsEvmChainsListChains.js";
import { tool$metricsHealthCheckMetricsHealthCheck } from "./tools/metricsHealthCheckMetricsHealthCheck.js";
import { tool$metricsLookingGlassCompositeQuery } from "./tools/metricsLookingGlassCompositeQuery.js";
import { tool$metricsLookingGlassGetAddressesByBalanceOverTime } from "./tools/metricsLookingGlassGetAddressesByBalanceOverTime.js";
import { tool$metricsLookingGlassGetAddressesByBtcbBridged } from "./tools/metricsLookingGlassGetAddressesByBtcbBridged.js";
import { tool$metricsLookingGlassGetNftHoldersByContractAddress } from "./tools/metricsLookingGlassGetNftHoldersByContractAddress.js";
import { tool$metricsLookingGlassGetValidatorsByDateRange } from "./tools/metricsLookingGlassGetValidatorsByDateRange.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  scopes?: MCPScope[] | undefined;
  serverURL: string;
  apiKey?: SDKOptions["apiKey"] | undefined;
  chainId?: SDKOptions["chainId"] | undefined;
  network?: SDKOptions["network"] | undefined;
}) {
  const server = new McpServer({
    name: "AvaCloudSDK",
    version: "0.10.0",
  });

  const client = new AvaCloudSDKCore({
    apiKey: deps.apiKey,
    chainId: deps.chainId,
    network: deps.network,
    serverURL: deps.serverURL,
  });
  const scopes = new Set(deps.scopes ?? mcpScopes);
  const tool = createRegisterTool(deps.logger, server, client, scopes);

  tool(tool$metricsHealthCheckMetricsHealthCheck);
  tool(tool$metricsLookingGlassGetNftHoldersByContractAddress);
  tool(tool$metricsLookingGlassGetAddressesByBalanceOverTime);
  tool(tool$metricsLookingGlassGetAddressesByBtcbBridged);
  tool(tool$metricsLookingGlassGetValidatorsByDateRange);
  tool(tool$metricsLookingGlassCompositeQuery);
  tool(tool$dataHealthCheckDataHealthCheck);
  tool(tool$dataNftsReindexNft);
  tool(tool$dataNftsListTokens);
  tool(tool$dataNftsGetTokenDetails);
  tool(tool$dataOperationsGetOperationResult);
  tool(tool$dataOperationsPostTransactionExportJob);
  tool(tool$dataPrimaryNetworkGetAssetDetails);
  tool(tool$dataPrimaryNetworkGetChainIdsForAddresses);
  tool(tool$dataPrimaryNetworkGetNetworkDetails);
  tool(tool$dataPrimaryNetworkListBlockchains);
  tool(tool$dataPrimaryNetworkListSubnets);
  tool(tool$dataPrimaryNetworkGetSubnetById);
  tool(tool$dataPrimaryNetworkListValidators);
  tool(tool$dataPrimaryNetworkGetSingleValidatorDetails);
  tool(tool$dataPrimaryNetworkListDelegators);
  tool(tool$dataPrimaryNetworkListL1Validators);
  tool(tool$dataTeleporterGetTeleporterMessage);
  tool(tool$dataTeleporterListTeleporterMessages);
  tool(tool$dataTeleporterListTeleporterMessagesByAddress);
  tool(tool$dataIcmGetIcmMessage);
  tool(tool$dataIcmListIcmMessages);
  tool(tool$dataIcmListIcmMessagesByAddress);
  tool(tool$dataUsageMetricsGetApiUsageMetrics);
  tool(tool$dataUsageMetricsGetApiLogs);
  tool(tool$dataUsageMetricsGetRpcUsageMetrics);
  tool(tool$dataWebhooksListWebhooks);
  tool(tool$dataWebhooksCreateWebhook);
  tool(tool$dataWebhooksGetWebhook);
  tool(tool$dataWebhooksDeactivateWebhook);
  tool(tool$dataWebhooksUpdateWebhook);
  tool(tool$dataWebhooksGenerateSharedSecret);
  tool(tool$dataWebhooksGetSharedSecret);
  tool(tool$dataWebhooksGetAddressesFromWebhook);
  tool(tool$dataWebhooksRemoveAddressesFromWebhook);
  tool(tool$dataWebhooksAddAddressesToWebhook);
  tool(tool$dataSignatureAggregatorAggregateSignatures);
  tool(tool$metricsEvmChainsListChains);
  tool(tool$metricsEvmChainsGetChain);
  tool(tool$metricsChainMetricsGetEvmChainMetrics);
  tool(tool$metricsChainMetricsGetTeleporterMetricsByChain);
  tool(tool$metricsChainMetricsGetEvmChainRollingWindowMetrics);
  tool(tool$metricsChainMetricsGetStakingMetrics);
  tool(tool$dataEvmChainsListAddressChains);
  tool(tool$dataEvmChainsSupportedChains);
  tool(tool$dataEvmChainsGetChainInfo);
  tool(tool$dataEvmChainsGetAddressChains);
  tool(tool$dataEvmChainsListAllLatestTransactions);
  tool(tool$dataEvmChainsListAllLatestBlocks);
  tool(tool$dataEvmTransactionsListLatestTransactionsAllChains);
  tool(tool$dataEvmTransactionsGetDeploymentTransaction);
  tool(tool$dataEvmTransactionsListContractDeployments);
  tool(tool$dataEvmTransactionsListTransfers);
  tool(tool$dataEvmTransactionsListTransactions);
  tool(tool$dataEvmTransactionsListNativeTransactions);
  tool(tool$dataEvmTransactionsListErc20Transactions);
  tool(tool$dataEvmTransactionsListErc721Transactions);
  tool(tool$dataEvmTransactionsListErc1155Transactions);
  tool(tool$dataEvmTransactionsListInternalTransactions);
  tool(tool$dataEvmTransactionsGetTransaction);
  tool(tool$dataEvmTransactionsGetTransactionsForBlock);
  tool(tool$dataEvmTransactionsListLatestTransactions);
  tool(tool$dataEvmBlocksListLatestBlocksAllChains);
  tool(tool$dataEvmBlocksGetLatestBlocks);
  tool(tool$dataEvmBlocksGetBlock);
  tool(tool$dataEvmBalancesGetNativeBalance);
  tool(tool$dataEvmBalancesListErc20Balances);
  tool(tool$dataEvmBalancesListErc721Balances);
  tool(tool$dataEvmBalancesListErc1155Balances);
  tool(tool$dataEvmBalancesListCollectibleBalances);
  tool(tool$dataEvmContractsGetContractMetadata);
  tool(tool$dataPrimaryNetworkTransactionsGetTxByHash);
  tool(tool$dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions);
  tool(
    tool$dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions,
  );
  tool(tool$dataPrimaryNetworkTransactionsListAssetTransactions);
  tool(tool$dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards);
  tool(tool$dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards);
  tool(tool$dataPrimaryNetworkUtxosGetUtxosByAddresses);
  tool(tool$dataPrimaryNetworkBalancesGetBalancesByAddresses);
  tool(tool$dataPrimaryNetworkBlocksGetBlockById);
  tool(tool$dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId);
  tool(tool$dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks);
  tool(tool$dataPrimaryNetworkVerticesListLatestXChainVertices);
  tool(tool$dataPrimaryNetworkVerticesGetVertexByHash);
  tool(tool$dataPrimaryNetworkVerticesGetVertexByHeight);

  return server;
}
