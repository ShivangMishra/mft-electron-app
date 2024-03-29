// package: org.apache.airavata.mft.credential.stubs.s3
// file: s3/S3Credential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class S3Secret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getAccesskey(): string;
  setAccesskey(value: string): void;

  getSecretkey(): string;
  setSecretkey(value: string): void;

  getSessiontoken(): string;
  setSessiontoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3Secret.AsObject;
  static toObject(includeInstance: boolean, msg: S3Secret): S3Secret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3Secret;
  static deserializeBinaryFromReader(message: S3Secret, reader: jspb.BinaryReader): S3Secret;
}

export namespace S3Secret {
  export type AsObject = {
    secretid: string,
    accesskey: string,
    secretkey: string,
    sessiontoken: string,
  }
}

export class S3SecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3SecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3SecretGetRequest): S3SecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3SecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3SecretGetRequest;
  static deserializeBinaryFromReader(message: S3SecretGetRequest, reader: jspb.BinaryReader): S3SecretGetRequest;
}

export namespace S3SecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class S3SecretCreateRequest extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): void;

  getSecretkey(): string;
  setSecretkey(value: string): void;

  getSessiontoken(): string;
  setSessiontoken(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3SecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3SecretCreateRequest): S3SecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3SecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3SecretCreateRequest;
  static deserializeBinaryFromReader(message: S3SecretCreateRequest, reader: jspb.BinaryReader): S3SecretCreateRequest;
}

export namespace S3SecretCreateRequest {
  export type AsObject = {
    accesskey: string,
    secretkey: string,
    sessiontoken: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class S3SecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getAccesskey(): string;
  setAccesskey(value: string): void;

  getSecretkey(): string;
  setSecretkey(value: string): void;

  getSessiontoken(): string;
  setSessiontoken(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3SecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3SecretUpdateRequest): S3SecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3SecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3SecretUpdateRequest;
  static deserializeBinaryFromReader(message: S3SecretUpdateRequest, reader: jspb.BinaryReader): S3SecretUpdateRequest;
}

export namespace S3SecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    accesskey: string,
    secretkey: string,
    sessiontoken: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class S3SecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3SecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: S3SecretUpdateResponse): S3SecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3SecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3SecretUpdateResponse;
  static deserializeBinaryFromReader(message: S3SecretUpdateResponse, reader: jspb.BinaryReader): S3SecretUpdateResponse;
}

export namespace S3SecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class S3SecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3SecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3SecretDeleteRequest): S3SecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3SecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3SecretDeleteRequest;
  static deserializeBinaryFromReader(message: S3SecretDeleteRequest, reader: jspb.BinaryReader): S3SecretDeleteRequest;
}

export namespace S3SecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class S3SecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3SecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: S3SecretDeleteResponse): S3SecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3SecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3SecretDeleteResponse;
  static deserializeBinaryFromReader(message: S3SecretDeleteResponse, reader: jspb.BinaryReader): S3SecretDeleteResponse;
}

export namespace S3SecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

