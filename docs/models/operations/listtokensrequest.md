# ListTokensRequest

## Fields

| Field         | Type       | Required | Description                                                                                                                | Example                                    |
| ------------- | ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `pageToken` | *string* | ➖       | A page token, received from a previous list call. Provide this to retrieve the subsequent page.                            |                                            |
| `pageSize`  | *number* | ➖       | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.                            | 10                                         |
| `chainId`   | *string* | ➖       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. |                                            |
| `address`   | *string* | ✔️     | Contract address on the relevant chain.                                                                                    | 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E |
