"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSignature = isValidSignature;
const crypto_1 = __importDefault(require("crypto"));
const json_canonicalize_1 = require("json-canonicalize");
function isValidSignature(signingSecret, signature, payload) {
    const canonicalizedPayload = (0, json_canonicalize_1.canonicalize)(payload);
    const hmac = crypto_1.default.createHmac('sha256', Buffer.from(signingSecret, 'hex'));
    const digest = hmac.update(canonicalizedPayload).digest('base64');
    console.log("signature: ", signature);
    console.log("digest", digest);
    return signature === digest;
}
//# sourceMappingURL=isvalidsignature.js.map