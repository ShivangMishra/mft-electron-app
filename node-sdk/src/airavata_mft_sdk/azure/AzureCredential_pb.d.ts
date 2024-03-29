// package: org.apache.airavata.mft.credential.stubs.azure
// file: azure/AzureCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class AzureSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getConnectionstring(): string;
  setConnectionstring(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecret.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecret): AzureSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecret;
  static deserializeBinaryFromReader(message: AzureSecret, reader: jspb.BinaryReader): AzureSecret;
}

export namespace AzureSecret {
  export type AsObject = {
    secretid: string,
    connectionstring: string,
  }
}

export class AzureSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecretGetRequest): AzureSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecretGetRequest;
  static deserializeBinaryFromReader(message: AzureSecretGetRequest, reader: jspb.BinaryReader): AzureSecretGetRequest;
}

export namespace AzureSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class AzureSecretCreateRequest extends jspb.Message {
  getConnectionstring(): string;
  setConnectionstring(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecretCreateRequest): AzureSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecretCreateRequest;
  static deserializeBinaryFromReader(message: AzureSecretCreateRequest, reader: jspb.BinaryReader): AzureSecretCreateRequest;
}

export namespace AzureSecretCreateRequest {
  export type AsObject = {
    connectionstring: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class AzureSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getConnectionstring(): string;
  setConnectionstring(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecretUpdateRequest): AzureSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecretUpdateRequest;
  static deserializeBinaryFromReader(message: AzureSecretUpdateRequest, reader: jspb.BinaryReader): AzureSecretUpdateRequest;
}

export namespace AzureSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    connectionstring: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class AzureSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecretUpdateResponse): AzureSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecretUpdateResponse;
  static deserializeBinaryFromReader(message: AzureSecretUpdateResponse, reader: jspb.BinaryReader): AzureSecretUpdateResponse;
}

export namespace AzureSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class AzureSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecretDeleteRequest): AzureSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecretDeleteRequest;
  static deserializeBinaryFromReader(message: AzureSecretDeleteRequest, reader: jspb.BinaryReader): AzureSecretDeleteRequest;
}

export namespace AzureSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class AzureSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSecretDeleteResponse): AzureSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSecretDeleteResponse;
  static deserializeBinaryFromReader(message: AzureSecretDeleteResponse, reader: jspb.BinaryReader): AzureSecretDeleteResponse;
}

export namespace AzureSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

