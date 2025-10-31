# FullNativeTransactionDetails

## Example Usage

```typescript
import { FullNativeTransactionDetails } from "@avalabs/avacloud-sdk/models/components";

let value: FullNativeTransactionDetails = {
  blockNumber: "339",
  blockTimestamp: 1648672486,
  blockHash:
    "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
  chainId: "43114",
  blockIndex: 0,
  txHash: "0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4",
  txStatus: "1",
  txType: 1,
  gasLimit: "51373",
  gasUsed: "51373",
  gasPrice: "470000000000",
  nonce: "1",
  from: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  to: {
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    decimals: 18,
    logoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  method: {
    callType: "CONTRACT_CREATION",
    methodHash: "0xa9059cbb",
    methodName: "transfer(address,uint256)",
  },
  value: "10000000000000000000",
  input: "<value>",
  baseFeePerGas: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `blockNumber`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The block number on the chain.                                           | 339                                                                      |
| `blockTimestamp`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | The block finality timestamp.                                            | 1648672486                                                               |
| `blockHash`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The block hash identifier.                                               | 0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c       |
| `chainId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The EVM chain ID on which the transaction occured.                       | 43114                                                                    |
| `blockIndex`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | The index at which the transaction occured in the block (0-indexed).     | 0                                                                        |
| `txHash`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The transaction hash identifier.                                         | 0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4       |
| `txStatus`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The transaction status, which is either 0 (failed) or 1 (successful).    | 1                                                                        |
| `txType`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | The transaction type.                                                    | 1                                                                        |
| `gasLimit`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The gas limit set for the transaction.                                   | 51373                                                                    |
| `gasUsed`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The amount of gas used.                                                  | 51373                                                                    |
| `gasPrice`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The gas price denominated by the number of decimals of the native token. | 470000000000                                                             |
| `nonce`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The nonce used by the sender of the transaction.                         | 1                                                                        |
| `from`                                                                   | [components.RichAddress](../../models/components/richaddress.md)         | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `to`                                                                     | [components.RichAddress](../../models/components/richaddress.md)         | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `method`                                                                 | [components.Method](../../models/components/method.md)                   | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `value`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | 10000000000000000000                                                     |
| `input`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The data sent for the transaction.                                       |                                                                          |
| `baseFeePerGas`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `maxFeePerGas`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `maxPriorityFeePerGas`                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |