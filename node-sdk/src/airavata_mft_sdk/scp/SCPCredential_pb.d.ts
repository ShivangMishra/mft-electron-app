// package: org.apache.airavata.mft.credential.stubs.scp
// file: scp/SCPCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class SCPSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getPublickey(): string;
  setPublickey(value: string): void;

  getPassphrase(): string;
  setPassphrase(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecret.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecret): SCPSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecret;
  static deserializeBinaryFromReader(message: SCPSecret, reader: jspb.BinaryReader): SCPSecret;
}

export namespace SCPSecret {
  export type AsObject = {
    secretid: string,
    privatekey: string,
    publickey: string,
    passphrase: string,
    user: string,
  }
}

export class SCPSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecretGetRequest): SCPSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecretGetRequest;
  static deserializeBinaryFromReader(message: SCPSecretGetRequest, reader: jspb.BinaryReader): SCPSecretGetRequest;
}

export namespace SCPSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class SCPSecretCreateRequest extends jspb.Message {
  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getPublickey(): string;
  setPublickey(value: string): void;

  getPassphrase(): string;
  setPassphrase(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecretCreateRequest): SCPSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecretCreateRequest;
  static deserializeBinaryFromReader(message: SCPSecretCreateRequest, reader: jspb.BinaryReader): SCPSecretCreateRequest;
}

export namespace SCPSecretCreateRequest {
  export type AsObject = {
    privatekey: string,
    publickey: string,
    passphrase: string,
    user: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class SCPSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getPublickey(): string;
  setPublickey(value: string): void;

  getPassphrase(): string;
  setPassphrase(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecretUpdateRequest): SCPSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecretUpdateRequest;
  static deserializeBinaryFromReader(message: SCPSecretUpdateRequest, reader: jspb.BinaryReader): SCPSecretUpdateRequest;
}

export namespace SCPSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    privatekey: string,
    publickey: string,
    passphrase: string,
    user: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class SCPSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecretUpdateResponse): SCPSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecretUpdateResponse;
  static deserializeBinaryFromReader(message: SCPSecretUpdateResponse, reader: jspb.BinaryReader): SCPSecretUpdateResponse;
}

export namespace SCPSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class SCPSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecretDeleteRequest): SCPSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecretDeleteRequest;
  static deserializeBinaryFromReader(message: SCPSecretDeleteRequest, reader: jspb.BinaryReader): SCPSecretDeleteRequest;
}

export namespace SCPSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class SCPSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SCPSecretDeleteResponse): SCPSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPSecretDeleteResponse;
  static deserializeBinaryFromReader(message: SCPSecretDeleteResponse, reader: jspb.BinaryReader): SCPSecretDeleteResponse;
}

export namespace SCPSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

