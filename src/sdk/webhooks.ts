/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataWebhooksAddAddressesToWebhook } from "../funcs/dataWebhooksAddAddressesToWebhook.js";
import { dataWebhooksCreateWebhook } from "../funcs/dataWebhooksCreateWebhook.js";
import { dataWebhooksDeactivateWebhook } from "../funcs/dataWebhooksDeactivateWebhook.js";
import { dataWebhooksGenerateSharedSecret } from "../funcs/dataWebhooksGenerateSharedSecret.js";
import { dataWebhooksGetAddressesFromWebhook } from "../funcs/dataWebhooksGetAddressesFromWebhook.js";
import { dataWebhooksGetSharedSecret } from "../funcs/dataWebhooksGetSharedSecret.js";
import { dataWebhooksGetWebhook } from "../funcs/dataWebhooksGetWebhook.js";
import { dataWebhooksListWebhooks } from "../funcs/dataWebhooksListWebhooks.js";
import { dataWebhooksRemoveAddressesFromWebhook } from "../funcs/dataWebhooksRemoveAddressesFromWebhook.js";
import { dataWebhooksUpdateWebhook } from "../funcs/dataWebhooksUpdateWebhook.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Webhooks extends ClientSDK {
  /**
   * List webhooks
   *
   * @remarks
   * Lists webhooks for the user.
   */
  async listWebhooks(
    request: operations.ListWebhooksRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListWebhooksResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataWebhooksListWebhooks(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a webhook
   *
   * @remarks
   * Create a new webhook.
   */
  async createWebhook(
    request: components.CreateWebhookRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(dataWebhooksCreateWebhook(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a webhook by ID
   *
   * @remarks
   * Retrieves a webhook by ID.
   */
  async getWebhook(
    request: operations.GetWebhookRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(dataWebhooksGetWebhook(
      this,
      request,
      options,
    ));
  }

  /**
   * Deactivate a webhook
   *
   * @remarks
   * Deactivates a webhook by ID.
   */
  async deactivateWebhook(
    request: operations.DeactivateWebhookRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(dataWebhooksDeactivateWebhook(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Updates an existing webhook.
   */
  async updateWebhook(
    request: operations.UpdateWebhookRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(dataWebhooksUpdateWebhook(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate a shared secret
   *
   * @remarks
   * Generates a new shared secret.
   */
  async generateSharedSecret(
    options?: RequestOptions,
  ): Promise<components.SharedSecretsResponse> {
    return unwrapAsync(dataWebhooksGenerateSharedSecret(
      this,
      options,
    ));
  }

  /**
   * Get a shared secret
   *
   * @remarks
   * Get a previously generated shared secret.
   */
  async getSharedSecret(
    options?: RequestOptions,
  ): Promise<components.SharedSecretsResponse> {
    return unwrapAsync(dataWebhooksGetSharedSecret(
      this,
      options,
    ));
  }

  /**
   * List adresses by webhook
   *
   * @remarks
   * List adresses by webhook.
   */
  async getAddressesFromWebhook(
    request: operations.GetAddressesFromWebhookRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetAddressesFromWebhookResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataWebhooksGetAddressesFromWebhook(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove addresses from webhook
   *
   * @remarks
   * Remove addresses from webhook.
   */
  async removeAddressesFromWebhook(
    request: operations.RemoveAddressesFromWebhookRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(dataWebhooksRemoveAddressesFromWebhook(
      this,
      request,
      options,
    ));
  }

  /**
   * Add addresses to webhook
   *
   * @remarks
   * Add addresses to webhook.
   */
  async addAddressesToWebhook(
    request: operations.AddAddressesToWebhookRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(dataWebhooksAddAddressesToWebhook(
      this,
      request,
      options,
    ));
  }
}
