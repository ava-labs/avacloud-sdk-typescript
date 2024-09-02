# GlacierListChainsResponse

## Example Usage

```typescript
import { GlacierListChainsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: GlacierListChainsResponse = {
    chains: [
        {
            chainId: "<value>",
            status: "OK",
            chainName: "<value>",
            description: "Networked well-modulated contingency",
            vmName: "ETHEREUM",
            rpcUrl: "<value>",
            isTestnet: false,
            networkToken: {
                name: "Wrapped AVAX",
                symbol: "WAVAX",
                decimals: 18,
                logoUri:
                    "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
            },
        },
    ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `chains`                                                       | [components.ChainInfo](../../models/components/chaininfo.md)[] | :heavy_check_mark:                                             | N/A                                                            |