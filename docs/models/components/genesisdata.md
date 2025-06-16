# GenesisData

The genesis data of the blockchain.  Present for CreateChainTx. EVM based chains will return the genesis data as an object. Non-EVM based chains will return the genesis data as an encoded string. The encoding depends on the VM

## Example Usage

```typescript
import { GenesisData } from "@avalabs/avacloud-sdk/models/components";

let value: GenesisData = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |