# DeliveredSourceNotIndexedIcmMessage

## Example Usage

```typescript
import { DeliveredSourceNotIndexedIcmMessage } from "@avalabs/avacloud-sdk/models/components";

let value: DeliveredSourceNotIndexedIcmMessage = {
  messageId: "<id>",
  icmContractAddress: "<value>",
  sourceBlockchainId: "<id>",
  destinationBlockchainId: "<id>",
  sourceEvmChainId: "<id>",
  destinationEvmChainId: "<id>",
  messageNonce: "<value>",
  from: "<value>",
  to: "<value>",
  messageExecuted: false,
  receipts: [
    {
      receivedMessageNonce: "<value>",
      relayerRewardAddress: "<value>",
    },
  ],
  receiptDelivered: false,
  rewardDetails: {
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
    value: "<value>",
  },
  destinationTransaction: {
    txHash: "<value>",
    timestamp: 5269.07,
    gasSpent: "<value>",
    rewardRedeemer: "<value>",
    delivererAddress: "<value>",
  },
  status: "delivered_source_not_indexed",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `messageId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `icmContractAddress`                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `sourceBlockchainId`                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `destinationBlockchainId`                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `sourceEvmChainId`                                                                                                           | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `destinationEvmChainId`                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `messageNonce`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `from`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `to`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `data`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `messageExecuted`                                                                                                            | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `receipts`                                                                                                                   | [components.IcmReceipt](../../models/components/icmreceipt.md)[]                                                             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `receiptDelivered`                                                                                                           | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `rewardDetails`                                                                                                              | [components.IcmRewardDetails](../../models/components/icmrewarddetails.md)                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `destinationTransaction`                                                                                                     | [components.IcmDestinationTransaction](../../models/components/icmdestinationtransaction.md)                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `status`                                                                                                                     | [components.DeliveredSourceNotIndexedIcmMessageStatus](../../models/components/deliveredsourcenotindexedicmmessagestatus.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |