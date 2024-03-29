// package: org.apache.airavata.mft.credential.stubs.http
// file: http/HttpCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class BasicAuth extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicAuth.AsObject;
  static toObject(includeInstance: boolean, msg: BasicAuth): BasicAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicAuth;
  static deserializeBinaryFromReader(message: BasicAuth, reader: jspb.BinaryReader): BasicAuth;
}

export namespace BasicAuth {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class TokenAuth extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenAuth.AsObject;
  static toObject(includeInstance: boolean, msg: TokenAuth): TokenAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenAuth;
  static deserializeBinaryFromReader(message: TokenAuth, reader: jspb.BinaryReader): TokenAuth;
}

export namespace TokenAuth {
  export type AsObject = {
    accesstoken: string,
  }
}

export class HTTPSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasBasic(): boolean;
  clearBasic(): void;
  getBasic(): BasicAuth | undefined;
  setBasic(value?: BasicAuth): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): TokenAuth | undefined;
  setToken(value?: TokenAuth): void;

  getAuthCase(): HTTPSecret.AuthCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecret.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecret): HTTPSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecret;
  static deserializeBinaryFromReader(message: HTTPSecret, reader: jspb.BinaryReader): HTTPSecret;
}

export namespace HTTPSecret {
  export type AsObject = {
    secretid: string,
    basic?: BasicAuth.AsObject,
    token?: TokenAuth.AsObject,
  }

  export enum AuthCase {
    AUTH_NOT_SET = 0,
    BASIC = 2,
    TOKEN = 3,
  }
}

export class HTTPSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecretGetRequest): HTTPSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecretGetRequest;
  static deserializeBinaryFromReader(message: HTTPSecretGetRequest, reader: jspb.BinaryReader): HTTPSecretGetRequest;
}

export namespace HTTPSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class HTTPSecretCreateRequest extends jspb.Message {
  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): HTTPSecret | undefined;
  setSecret(value?: HTTPSecret): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecretCreateRequest): HTTPSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecretCreateRequest;
  static deserializeBinaryFromReader(message: HTTPSecretCreateRequest, reader: jspb.BinaryReader): HTTPSecretCreateRequest;
}

export namespace HTTPSecretCreateRequest {
  export type AsObject = {
    secret?: HTTPSecret.AsObject,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class HTTPSecretUpdateRequest extends jspb.Message {
  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): HTTPSecret | undefined;
  setSecret(value?: HTTPSecret): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecretUpdateRequest): HTTPSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecretUpdateRequest;
  static deserializeBinaryFromReader(message: HTTPSecretUpdateRequest, reader: jspb.BinaryReader): HTTPSecretUpdateRequest;
}

export namespace HTTPSecretUpdateRequest {
  export type AsObject = {
    secret?: HTTPSecret.AsObject,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class HTTPSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecretUpdateResponse): HTTPSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecretUpdateResponse;
  static deserializeBinaryFromReader(message: HTTPSecretUpdateResponse, reader: jspb.BinaryReader): HTTPSecretUpdateResponse;
}

export namespace HTTPSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class HTTPSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecretDeleteRequest): HTTPSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecretDeleteRequest;
  static deserializeBinaryFromReader(message: HTTPSecretDeleteRequest, reader: jspb.BinaryReader): HTTPSecretDeleteRequest;
}

export namespace HTTPSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class HTTPSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSecretDeleteResponse): HTTPSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSecretDeleteResponse;
  static deserializeBinaryFromReader(message: HTTPSecretDeleteResponse, reader: jspb.BinaryReader): HTTPSecretDeleteResponse;
}

export namespace HTTPSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

