// package: org.apache.airavata.mft.credential.stubs.ftp
// file: ftp/FTPCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class FTPSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecret.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecret): FTPSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecret;
  static deserializeBinaryFromReader(message: FTPSecret, reader: jspb.BinaryReader): FTPSecret;
}

export namespace FTPSecret {
  export type AsObject = {
    secretid: string,
    userid: string,
    password: string,
  }
}

export class FTPSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecretGetRequest): FTPSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecretGetRequest;
  static deserializeBinaryFromReader(message: FTPSecretGetRequest, reader: jspb.BinaryReader): FTPSecretGetRequest;
}

export namespace FTPSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class FTPSecretCreateRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecretCreateRequest): FTPSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecretCreateRequest;
  static deserializeBinaryFromReader(message: FTPSecretCreateRequest, reader: jspb.BinaryReader): FTPSecretCreateRequest;
}

export namespace FTPSecretCreateRequest {
  export type AsObject = {
    userid: string,
    password: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class FTPSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecretUpdateRequest): FTPSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecretUpdateRequest;
  static deserializeBinaryFromReader(message: FTPSecretUpdateRequest, reader: jspb.BinaryReader): FTPSecretUpdateRequest;
}

export namespace FTPSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    userid: string,
    password: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class FTPSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecretUpdateResponse): FTPSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecretUpdateResponse;
  static deserializeBinaryFromReader(message: FTPSecretUpdateResponse, reader: jspb.BinaryReader): FTPSecretUpdateResponse;
}

export namespace FTPSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class FTPSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecretDeleteRequest): FTPSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecretDeleteRequest;
  static deserializeBinaryFromReader(message: FTPSecretDeleteRequest, reader: jspb.BinaryReader): FTPSecretDeleteRequest;
}

export namespace FTPSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class FTPSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSecretDeleteResponse): FTPSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSecretDeleteResponse;
  static deserializeBinaryFromReader(message: FTPSecretDeleteResponse, reader: jspb.BinaryReader): FTPSecretDeleteResponse;
}

export namespace FTPSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

