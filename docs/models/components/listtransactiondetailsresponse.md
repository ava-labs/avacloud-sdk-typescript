# ListTransactionDetailsResponse

## Example Usage

```typescript
import { ListTransactionDetailsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListTransactionDetailsResponse = {
  transactions: [
    {
      nativeTransaction: {
        blockNumber: "339",
        blockTimestamp: 1648672486,
        blockHash:
          "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
        blockIndex: 0,
        txHash:
          "0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4",
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
          callType: "CONTRACT_CALL",
          methodHash: "0xa9059cbb",
          methodName: "transfer(address,uint256)",
        },
        value: "10000000000000000000",
      },
      erc20Transfers: [
        {
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
          logIndex: 3210.43,
          value: "10000000000000000000",
          erc20Token: {
            address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
            name: "Wrapped AVAX",
            symbol: "WAVAX",
            decimals: 18,
            logoUri:
              "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
            ercType: "ERC-20",
            price: {
              currencyCode: "usd",
              value: 42.42,
            },
          },
        },
      ],
      erc721Transfers: [
        {
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
          logIndex: 299.50,
          erc721Token: {
            address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
            name: "Wrapped AVAX",
            symbol: "WAVAX",
            ercType: "ERC-721",
            tokenId: "<id>",
            tokenUri: "https://cheap-noon.net",
            metadata: {
              indexStatus: "METADATA_CONTENT_TOO_LARGE",
            },
            ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
          },
        },
      ],
      erc1155Transfers: [
        {
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
          logIndex: 9591.42,
          value: "10000000000000000000",
          erc1155Token: {
            address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
            ercType: "ERC-1155",
            tokenId: "<id>",
            tokenUri: "https://trim-allegation.name/",
            metadata: {
              indexStatus: "UNREACHABLE_TOKEN_URI",
            },
          },
        },
      ],
      internalTransactions: [
        {
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
          internalTxType: "CREATE2",
          value: "10000000000000000000",
          isReverted: false,
          gasUsed: "<value>",
          gasLimit: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `transactions`                                                                                                                         | [components.TransactionDetails](../../models/components/transactiondetails.md)[]                                                       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |