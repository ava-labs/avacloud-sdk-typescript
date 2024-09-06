import {
  BeforeRequestContext,
  BeforeRequestHook,
} from "./types";
import { version } from "../../package.json";


export class AddHeaderBeforeRequestHook
  implements BeforeRequestHook
{ 
  beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
    // modify the request object before it is sent, such as adding headers or query parameters, or throw an error to stop the request from being sent
    request.headers.set('X-App-Component', `avacloud-sdk/${version}`);
    return request;
  }
}
