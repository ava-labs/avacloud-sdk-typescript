# Transaction

## Example Usage

```typescript
import { Transaction } from "@avalabs/avacloud-sdk/models/components";

let value: Transaction = {
  blockHash:
    "0x2a47bebed93db4a21cc8339980f004cc67f17d0dff4a368001e450e7be2edaa0",
  blockNumber: "45396106",
  from: "0x737F6b0b8A04e8462d0fC7076451298F0dA9a972",
  gas: "80000",
  gasPrice: "52000000000",
  maxFeePerGas: "52000000000",
  maxPriorityFeePerGas: "2000000000",
  txHash: "0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8",
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
  ],
  erc721Transfers: [
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
  erc1155Transfers: [
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
  ],
  accessList: [
    {
      accessAddresses: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      storageKeys: [
        "<value>",
      ],
    },
  ],
  networkToken: {
    tokenName: "TetherToken",
    tokenSymbol: "USDt",
    tokenDecimals: 6,
    valueWithDecimals: "3331.009129",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `blockHash`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Block hash of the transaction                                                                                                              | 0x2a47bebed93db4a21cc8339980f004cc67f17d0dff4a368001e450e7be2edaa0                                                                         |
| `blockNumber`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Block number of the transaction                                                                                                            | 45396106                                                                                                                                   |
| `from`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Sender address                                                                                                                             | 0x737F6b0b8A04e8462d0fC7076451298F0dA9a972                                                                                                 |
| `gas`                                                                                                                                      | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Gas limit for the transaction                                                                                                              | 80000                                                                                                                                      |
| `gasPrice`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Gas price used                                                                                                                             | 52000000000                                                                                                                                |
| `maxFeePerGas`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Maximum fee per gas                                                                                                                        | 52000000000                                                                                                                                |
| `maxPriorityFeePerGas`                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Maximum priority fee per gas                                                                                                               | 2000000000                                                                                                                                 |
| `txHash`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Transaction hash                                                                                                                           | 0xfd91150d236ec5c3b1ee325781affad5b0b4d7eb0187c84c220ab115eaa563e8                                                                         |
| `txStatus`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Transaction status                                                                                                                         | 1                                                                                                                                          |
| `input`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Input data                                                                                                                                 | 0xa9059cbb00000000000000000000000040e832c3df9562dfae5a86a4849f27f687a9b46b00000000000000000000000000000000000000000000000000000000c68b2a69 |
| `nonce`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Nonce value                                                                                                                                | 0                                                                                                                                          |
| `to`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Recipient address                                                                                                                          | 0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7                                                                                                 |
| `transactionIndex`                                                                                                                         | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Transaction index                                                                                                                          | 1                                                                                                                                          |
| `value`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Value transferred in the transaction                                                                                                       | 0                                                                                                                                          |
| `type`                                                                                                                                     | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Transaction type                                                                                                                           | 2                                                                                                                                          |
| `chainId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Chain ID of the network                                                                                                                    | 43114                                                                                                                                      |
| `receiptCumulativeGasUsed`                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Cumulative gas used                                                                                                                        | 668508                                                                                                                                     |
| `receiptGasUsed`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Gas used                                                                                                                                   | 44038                                                                                                                                      |
| `receiptEffectiveGasPrice`                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Effective gas price                                                                                                                        | 27000000000                                                                                                                                |
| `receiptRoot`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Receipt root                                                                                                                               | 0xe5b018c29a77c8a92c4ea2f2d7e58820283041a52e14a0620d90d13b881e1ee3                                                                         |
| `blockTimestamp`                                                                                                                           | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Block timestamp                                                                                                                            | 1715621840                                                                                                                                 |
| `contractAddress`                                                                                                                          | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Contract address (optional)                                                                                                                | 0x0000000000000000000000000000000000000000                                                                                                 |
| `erc20Transfers`                                                                                                                           | [components.ERCTransfer](../../models/components/erctransfer.md)[]                                                                         | :heavy_check_mark:                                                                                                                         | ERC20 transfers                                                                                                                            |                                                                                                                                            |
| `erc721Transfers`                                                                                                                          | [components.ERCTransfer](../../models/components/erctransfer.md)[]                                                                         | :heavy_check_mark:                                                                                                                         | ERC721 transfers                                                                                                                           |                                                                                                                                            |
| `erc1155Transfers`                                                                                                                         | [components.ERCTransfer](../../models/components/erctransfer.md)[]                                                                         | :heavy_check_mark:                                                                                                                         | ERC1155 transfers                                                                                                                          |                                                                                                                                            |
| `internalTransactions`                                                                                                                     | [components.InternalTransaction](../../models/components/internaltransaction.md)[]                                                         | :heavy_minus_sign:                                                                                                                         | Internal transactions (optional)                                                                                                           |                                                                                                                                            |
| `accessList`                                                                                                                               | [components.AccessListData](../../models/components/accesslistdata.md)[]                                                                   | :heavy_minus_sign:                                                                                                                         | Access list (optional)                                                                                                                     |                                                                                                                                            |
| `networkToken`                                                                                                                             | [components.NetworkTokenInfo](../../models/components/networktokeninfo.md)                                                                 | :heavy_minus_sign:                                                                                                                         | Network token info (optional)                                                                                                              |                                                                                                                                            |