// package: org.apache.airavata.mft.credential.stubs.odata
// file: odata/ODataCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class ODataSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecret.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecret): ODataSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecret;
  static deserializeBinaryFromReader(message: ODataSecret, reader: jspb.BinaryReader): ODataSecret;
}

export namespace ODataSecret {
  export type AsObject = {
    secretid: string,
    username: string,
    password: string,
  }
}

export class ODataSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecretGetRequest): ODataSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecretGetRequest;
  static deserializeBinaryFromReader(message: ODataSecretGetRequest, reader: jspb.BinaryReader): ODataSecretGetRequest;
}

export namespace ODataSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class ODataSecretCreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecretCreateRequest): ODataSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecretCreateRequest;
  static deserializeBinaryFromReader(message: ODataSecretCreateRequest, reader: jspb.BinaryReader): ODataSecretCreateRequest;
}

export namespace ODataSecretCreateRequest {
  export type AsObject = {
    username: string,
    password: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class ODataSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecretUpdateRequest): ODataSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecretUpdateRequest;
  static deserializeBinaryFromReader(message: ODataSecretUpdateRequest, reader: jspb.BinaryReader): ODataSecretUpdateRequest;
}

export namespace ODataSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    username: string,
    password: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class ODataSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecretUpdateResponse): ODataSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecretUpdateResponse;
  static deserializeBinaryFromReader(message: ODataSecretUpdateResponse, reader: jspb.BinaryReader): ODataSecretUpdateResponse;
}

export namespace ODataSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class ODataSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecretDeleteRequest): ODataSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecretDeleteRequest;
  static deserializeBinaryFromReader(message: ODataSecretDeleteRequest, reader: jspb.BinaryReader): ODataSecretDeleteRequest;
}

export namespace ODataSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class ODataSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ODataSecretDeleteResponse): ODataSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataSecretDeleteResponse;
  static deserializeBinaryFromReader(message: ODataSecretDeleteResponse, reader: jspb.BinaryReader): ODataSecretDeleteResponse;
}

export namespace ODataSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

