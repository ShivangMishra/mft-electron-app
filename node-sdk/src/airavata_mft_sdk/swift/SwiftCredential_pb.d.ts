// package: org.apache.airavata.mft.credential.stubs.swift
// file: swift/SwiftCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class SwiftV2AuthSecret extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftV2AuthSecret.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftV2AuthSecret): SwiftV2AuthSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftV2AuthSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftV2AuthSecret;
  static deserializeBinaryFromReader(message: SwiftV2AuthSecret, reader: jspb.BinaryReader): SwiftV2AuthSecret;
}

export namespace SwiftV2AuthSecret {
  export type AsObject = {
    tenant: string,
    username: string,
    password: string,
  }
}

export class SwiftV3AuthSecret extends jspb.Message {
  getUserdomainname(): string;
  setUserdomainname(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getTenantname(): string;
  setTenantname(value: string): void;

  getProjectdomainname(): string;
  setProjectdomainname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftV3AuthSecret.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftV3AuthSecret): SwiftV3AuthSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftV3AuthSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftV3AuthSecret;
  static deserializeBinaryFromReader(message: SwiftV3AuthSecret, reader: jspb.BinaryReader): SwiftV3AuthSecret;
}

export namespace SwiftV3AuthSecret {
  export type AsObject = {
    userdomainname: string,
    username: string,
    password: string,
    tenantname: string,
    projectdomainname: string,
  }
}

export class SwiftSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasV2authsecret(): boolean;
  clearV2authsecret(): void;
  getV2authsecret(): SwiftV2AuthSecret | undefined;
  setV2authsecret(value?: SwiftV2AuthSecret): void;

  hasV3authsecret(): boolean;
  clearV3authsecret(): void;
  getV3authsecret(): SwiftV3AuthSecret | undefined;
  setV3authsecret(value?: SwiftV3AuthSecret): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getSecretCase(): SwiftSecret.SecretCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecret.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecret): SwiftSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecret;
  static deserializeBinaryFromReader(message: SwiftSecret, reader: jspb.BinaryReader): SwiftSecret;
}

export namespace SwiftSecret {
  export type AsObject = {
    secretid: string,
    v2authsecret?: SwiftV2AuthSecret.AsObject,
    v3authsecret?: SwiftV3AuthSecret.AsObject,
    endpoint: string,
  }

  export enum SecretCase {
    SECRET_NOT_SET = 0,
    V2AUTHSECRET = 2,
    V3AUTHSECRET = 3,
  }
}

export class SwiftSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecretGetRequest): SwiftSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecretGetRequest;
  static deserializeBinaryFromReader(message: SwiftSecretGetRequest, reader: jspb.BinaryReader): SwiftSecretGetRequest;
}

export namespace SwiftSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class SwiftSecretCreateRequest extends jspb.Message {
  hasV2authsecret(): boolean;
  clearV2authsecret(): void;
  getV2authsecret(): SwiftV2AuthSecret | undefined;
  setV2authsecret(value?: SwiftV2AuthSecret): void;

  hasV3authsecret(): boolean;
  clearV3authsecret(): void;
  getV3authsecret(): SwiftV3AuthSecret | undefined;
  setV3authsecret(value?: SwiftV3AuthSecret): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  getSecretCase(): SwiftSecretCreateRequest.SecretCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecretCreateRequest): SwiftSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecretCreateRequest;
  static deserializeBinaryFromReader(message: SwiftSecretCreateRequest, reader: jspb.BinaryReader): SwiftSecretCreateRequest;
}

export namespace SwiftSecretCreateRequest {
  export type AsObject = {
    v2authsecret?: SwiftV2AuthSecret.AsObject,
    v3authsecret?: SwiftV3AuthSecret.AsObject,
    endpoint: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }

  export enum SecretCase {
    SECRET_NOT_SET = 0,
    V2AUTHSECRET = 1,
    V3AUTHSECRET = 2,
  }
}

export class SwiftSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasV2authsecret(): boolean;
  clearV2authsecret(): void;
  getV2authsecret(): SwiftV2AuthSecret | undefined;
  setV2authsecret(value?: SwiftV2AuthSecret): void;

  hasV3authsecret(): boolean;
  clearV3authsecret(): void;
  getV3authsecret(): SwiftV3AuthSecret | undefined;
  setV3authsecret(value?: SwiftV3AuthSecret): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  getSecretCase(): SwiftSecretUpdateRequest.SecretCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecretUpdateRequest): SwiftSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecretUpdateRequest;
  static deserializeBinaryFromReader(message: SwiftSecretUpdateRequest, reader: jspb.BinaryReader): SwiftSecretUpdateRequest;
}

export namespace SwiftSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    v2authsecret?: SwiftV2AuthSecret.AsObject,
    v3authsecret?: SwiftV3AuthSecret.AsObject,
    endpoint: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }

  export enum SecretCase {
    SECRET_NOT_SET = 0,
    V2AUTHSECRET = 2,
    V3AUTHSECRET = 3,
  }
}

export class SwiftSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecretUpdateResponse): SwiftSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecretUpdateResponse;
  static deserializeBinaryFromReader(message: SwiftSecretUpdateResponse, reader: jspb.BinaryReader): SwiftSecretUpdateResponse;
}

export namespace SwiftSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class SwiftSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecretDeleteRequest): SwiftSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecretDeleteRequest;
  static deserializeBinaryFromReader(message: SwiftSecretDeleteRequest, reader: jspb.BinaryReader): SwiftSecretDeleteRequest;
}

export namespace SwiftSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class SwiftSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftSecretDeleteResponse): SwiftSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftSecretDeleteResponse;
  static deserializeBinaryFromReader(message: SwiftSecretDeleteResponse, reader: jspb.BinaryReader): SwiftSecretDeleteResponse;
}

export namespace SwiftSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

