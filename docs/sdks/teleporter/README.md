# Teleporter
(*data.teleporter*)

## Overview

### Available Operations

* [~~getTeleporterMessage~~](#getteleportermessage) - **[Deprecated]** Gets a teleporter message by message ID.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages/:messageId endpoint instead** . :warning: **Deprecated**
* [~~listTeleporterMessages~~](#listteleportermessages) - **[Deprecated]** Lists teleporter messages. Ordered by timestamp in  descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages endpoint instead** . :warning: **Deprecated**
* [~~listTeleporterMessagesByAddress~~](#listteleportermessagesbyaddress) - **[Deprecated]** Lists teleporter messages by address. Ordered by  timestamp in descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/addresses/:address/messages endpoint instead** . :warning: **Deprecated**

## ~~getTeleporterMessage~~

**[Deprecated]** Gets a teleporter message by message ID.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages/:messageId endpoint instead** .

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.teleporter.getTeleporterMessage({
    messageId: "acf1c8b06f9aec48e9fcbefbbe576ae8a7ca3b327fcae111396e7cc99956674d",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataTeleporterGetTeleporterMessage } from "@avalabs/avacloud-sdk/funcs/dataTeleporterGetTeleporterMessage.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataTeleporterGetTeleporterMessage(avaCloudSDK, {
    messageId: "acf1c8b06f9aec48e9fcbefbbe576ae8a7ca3b327fcae111396e7cc99956674d",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTeleporterMessageRequest](../../models/operations/getteleportermessagerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetTeleporterMessageResponseBody](../../models/operations/getteleportermessageresponsebody.md)\>**

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

## ~~listTeleporterMessages~~

**[Deprecated]** Lists teleporter messages. Ordered by timestamp in  descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/messages endpoint instead** .

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.teleporter.listTeleporterMessages({
    sourceBlockchainId: "2D8RG4UpSXbPbvPCAWppNJyqTG2i2CAXSkTgmTBBvs7GKNZjsY",
    destinationBlockchainId: "yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp",
    to: "0x664A4Be5Af2cFc824F9C0914CbAc4703396Da2DC",
    from: "0x321eDA69247566D662178feE695C7026c604Cd94",
    network: "mainnet",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataTeleporterListTeleporterMessages } from "@avalabs/avacloud-sdk/funcs/dataTeleporterListTeleporterMessages.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataTeleporterListTeleporterMessages(avaCloudSDK, {
    sourceBlockchainId: "2D8RG4UpSXbPbvPCAWppNJyqTG2i2CAXSkTgmTBBvs7GKNZjsY",
    destinationBlockchainId: "yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp",
    to: "0x664A4Be5Af2cFc824F9C0914CbAc4703396Da2DC",
    from: "0x321eDA69247566D662178feE695C7026c604Cd94",
    network: "mainnet",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTeleporterMessagesRequest](../../models/operations/listteleportermessagesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListTeleporterMessagesResponse](../../models/operations/listteleportermessagesresponse.md)\>**

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

## ~~listTeleporterMessagesByAddress~~

**[Deprecated]** Lists teleporter messages by address. Ordered by  timestamp in descending order.

⚠️ **This operation will be removed in a future release.  Please use /v1/icm/addresses/:address/messages endpoint instead** .

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const result = await avaCloudSDK.data.teleporter.listTeleporterMessagesByAddress({
    address: "0x8578AE7723751446B196bD5124e1bF57B40EB7Bc",
    network: "mainnet",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AvaCloudSDKCore } from "@avalabs/avacloud-sdk/core.js";
import { dataTeleporterListTeleporterMessagesByAddress } from "@avalabs/avacloud-sdk/funcs/dataTeleporterListTeleporterMessagesByAddress.js";

// Use `AvaCloudSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const avaCloudSDK = new AvaCloudSDKCore({
  serverURL: "https://api.example.com",
  chainId: "43114",
  network: "mainnet",
});

async function run() {
  const res = await dataTeleporterListTeleporterMessagesByAddress(avaCloudSDK, {
    address: "0x8578AE7723751446B196bD5124e1bF57B40EB7Bc",
    network: "mainnet",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTeleporterMessagesByAddressRequest](../../models/operations/listteleportermessagesbyaddressrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.ListTeleporterMessagesResponse](../../models/components/listteleportermessagesresponse.md)\>**

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