# ListErc1155TransactionsRequest

## Fields

| Field          | Type       | Required | Description                                                                                                                                         | Example                                    |
| -------------- | ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `startBlock` | *number* | ➖       | The block range start number, inclusive. If endBlock is not defined when startBlock is defined, the end of the range will be the most recent block. | 6479329                                    |
| `endBlock`   | *number* | ➖       | The block range end number, exclusive. If startBlock is not defined when endBlock is defined, the start of the range will be the genesis block.     | 6479330                                    |
| `pageToken`  | *string* | ➖       | A page token, received from a previous list call. Provide this to retrieve the subsequent page.                                                     |                                            |
| `pageSize`   | *number* | ➖       | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.                                                     | 10                                         |
| `chainId`    | *string* | ➖       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.                          |                                            |
| `address`    | *string* | ✔️     | A wallet address.                                                                                                                                   | 0x71C7656EC7ab88b098defB751B7401B5f6d8976F |
