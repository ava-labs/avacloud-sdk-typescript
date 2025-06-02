# WebhookAddressActivityResponse

## Example Usage

```typescript
import { WebhookAddressActivityResponse } from "@avalabs/avacloud-sdk/models/components";

let value: WebhookAddressActivityResponse = {
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
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `webhookId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Webhook ID                                                                                                               | 401da7d9-d6d7-46c8-b431-72ff1e1543f4                                                                                     |
| `eventType`                                                                                                              | [components.WebhookAddressActivityResponseEventType](../../models/components/webhookaddressactivityresponseeventtype.md) | :heavy_check_mark:                                                                                                       | Event type                                                                                                               | address_activity                                                                                                         |
| `messageId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Message ID                                                                                                               | bc9732db-2430-4296-afc3-c51267beb14a                                                                                     |
| `event`                                                                                                                  | [components.TransactionEvent](../../models/components/transactionevent.md)                                               | :heavy_check_mark:                                                                                                       | Event details                                                                                                            |                                                                                                                          |