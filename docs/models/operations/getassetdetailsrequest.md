# GetAssetDetailsRequest


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `blockchainId`                                             | [components.XChainId](../../models/components/xchainid.md) | :heavy_check_mark:                                         | A primary network blockchain id or alias.                  | x-chain                                                    |
| `network`                                                  | [components.Network](../../models/components/network.md)   | :heavy_check_mark:                                         | Either mainnet or a testnet.                               | mainnet                                                    |
| `assetId`                                                  | *string*                                                   | :heavy_check_mark:                                         | Asset ID for any asset on X-Chain                          | th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof          |