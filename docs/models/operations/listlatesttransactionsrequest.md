# ListLatestTransactionsRequest

## Fields

| Field         | Type                                                                      | Required | Description                                                                                                                | Example |
| ------------- | ------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| `pageToken` | *string*                                                                | ➖       | A page token, received from a previous list call. Provide this to retrieve the subsequent page.                            |         |
| `pageSize`  | *number*                                                                | ➖       | The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.                            | 10      |
| `chainId`   | *string*                                                                | ➖       | A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids. |         |
| `status`    | [components.TransactionStatus](../../models/components/transactionstatus.md) | ➖       | A status filter for listed transactions.                                                                                   |         |
