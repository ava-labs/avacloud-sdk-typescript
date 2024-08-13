# GetNativeBalanceRequest

## Fields

| Field           | Type                                                            | Required | Description                                                                                                                | Example                                    |
| --------------- | --------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `blockNumber` | *string*                                                      | ➖       | The block number, if not defined the block number will be the latest block.                                                | 6479329                                    |
| `chainId`     | *string*                                                      | ➖       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. |                                            |
| `address`     | *string*                                                      | ✔️     | A wallet address.                                                                                                          | 0x71C7656EC7ab88b098defB751B7401B5f6d8976F |
| `currency`    | [components.CurrencyCode](../../models/components/currencycode.md) | ➖       | The currency that return values should use. Defaults to USD.                                                               | usd                                        |
