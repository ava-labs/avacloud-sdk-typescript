# SignatureAggregator
(*data.signatureAggregator*)

## Overview

### Available Operations

* [aggregate](#aggregate) - Aggregate Signatures
* [get](#get) - Get Aggregated Signatures

## aggregate

Aggregates Signatures for a Warp message from Subnet validators.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.signatureAggregator.aggregate({
    signatureAggregatorRequest: {
      message: "000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000003cc0000000000059f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7000003a200000000000100000014253b2784c75e510dd0ff1da844684a1ac0aa5fcf00000380000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001150000000000000000000000008578ae7723751446b196bd5124e1bf57b40eb7bc7fc93d85c6d62c5b2ac0b519c87010ea5294012d1e407030d6acd0021cac10d50000000000000000000000009660ed66aef60dfba5467afe865f612edbfb5c710000000000000000000000000000000000000000000000000000000000014c080000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000011a00000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011a20000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011b50000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011e80000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011e90000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000400000000000000000000000001c07f66981b45056e5024eb6d51f9f30aa0d28fd00000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000",
      justification: "0001abcdabcfff",
      signingSubnetId: "7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5",
      quorumPercentage: 50,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataSignatureAggregatorAggregate } from "@avalabs/avacloud-sdk/funcs/dataSignatureAggregatorAggregate.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  network: "mainnet",
});

async function run() {
  const res = await dataSignatureAggregatorAggregate(avaCloudSDK, {
    signatureAggregatorRequest: {
      message: "000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000003cc0000000000059f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7000003a200000000000100000014253b2784c75e510dd0ff1da844684a1ac0aa5fcf00000380000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001150000000000000000000000008578ae7723751446b196bd5124e1bf57b40eb7bc7fc93d85c6d62c5b2ac0b519c87010ea5294012d1e407030d6acd0021cac10d50000000000000000000000009660ed66aef60dfba5467afe865f612edbfb5c710000000000000000000000000000000000000000000000000000000000014c080000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000011a00000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011a20000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011b50000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011e80000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000011e90000000000000000000000007ec2afb0a06a73666adc24983ebdbf2b6f1d708200000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000400000000000000000000000001c07f66981b45056e5024eb6d51f9f30aa0d28fd00000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000",
      justification: "0001abcdabcfff",
      signingSubnetId: "7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5",
      quorumPercentage: 50,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dataSignatureAggregatorAggregate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AggregateSignaturesRequest](../../models/operations/aggregatesignaturesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.SignatureAggregationResponse](../../models/components/signatureaggregationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get Aggregated Signatures for a P-Chain L1 related Warp Message.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.signatureAggregator.get({
    txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataSignatureAggregatorGet } from "@avalabs/avacloud-sdk/funcs/dataSignatureAggregatorGet.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  network: "mainnet",
});

async function run() {
  const res = await dataSignatureAggregatorGet(avaCloudSDK, {
    txHash: "3P91K6nuDFvDodcRuJTsgdf9SvYe5pMiKk38HppsoeAiEztCP",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dataSignatureAggregatorGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAggregatedSignaturesRequest](../../models/operations/getaggregatedsignaturesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.SignatureAggregationResponse](../../models/components/signatureaggregationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.TooManyRequests     | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.BadGateway          | 502                        | application/json           |
| errors.ServiceUnavailable  | 503                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |