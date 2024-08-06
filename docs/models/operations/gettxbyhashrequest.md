# GetTxByHashRequest


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `blockchainId`                                                     | [components.BlockchainId](../../models/components/blockchainid.md) | :heavy_check_mark:                                                 | A primary network blockchain id or alias.                          | p-chain                                                            |
| `network`                                                          | [components.Network](../../models/components/network.md)           | :heavy_check_mark:                                                 | Either mainnet or a testnet.                                       | mainnet                                                            |
| `txHash`                                                           | *string*                                                           | :heavy_check_mark:                                                 | A primary network (P or X chain) transaction hash.                 | 3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP                  |