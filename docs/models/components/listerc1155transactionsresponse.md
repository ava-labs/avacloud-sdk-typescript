# ListErc1155TransactionsResponse

## Example Usage

```typescript
import { ListErc1155TransactionsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListErc1155TransactionsResponse = {
  transactions: [
    {
      blockNumber: "339",
      blockTimestamp: 1648672486,
      blockHash:
        "0x17533aeb5193378b9ff441d61728e7a2ebaf10f61fd5310759451627dfca2e7c",
      txHash:
        "0x3e9303f81be00b4af28515dab7b914bf3dbff209ea10e7071fa24d4af0a112d4",
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
      logIndex: 4240.32,
      value: "10000000000000000000",
      erc1155Token: {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        ercType: "ERC-1155",
        tokenId: "<id>",
        tokenUri: "https://thin-almighty.org/",
        metadata: {
          indexStatus: "INVALID_TOKEN_URI_SCHEME",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `transactions`                                                                                                                         | [components.Erc1155Transfer](../../models/components/erc1155transfer.md)[]                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |