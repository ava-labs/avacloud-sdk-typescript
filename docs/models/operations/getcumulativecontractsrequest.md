# GetCumulativeContractsRequest


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `from`                                             | *string*                                           | :heavy_minus_sign:                                 | From date in UNIX Timestamp.                       | 1654819200                                         |
| `to`                                               | *string*                                           | :heavy_minus_sign:                                 | To date in UNIX Timestamp.                         | 1655424000                                         |
| `chain`                                            | *string*                                           | :heavy_check_mark:                                 | numeric chainID, 'testnet', 'mainnet', or 'total'. | 43114                                              |