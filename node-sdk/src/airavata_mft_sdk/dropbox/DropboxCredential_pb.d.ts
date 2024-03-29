// package: org.apache.airavata.mft.credential.stubs.dropbox
// file: dropbox/DropboxCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class DropboxSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecret.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecret): DropboxSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecret;
  static deserializeBinaryFromReader(message: DropboxSecret, reader: jspb.BinaryReader): DropboxSecret;
}

export namespace DropboxSecret {
  export type AsObject = {
    secretid: string,
    accesstoken: string,
  }
}

export class DropboxSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecretGetRequest): DropboxSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecretGetRequest;
  static deserializeBinaryFromReader(message: DropboxSecretGetRequest, reader: jspb.BinaryReader): DropboxSecretGetRequest;
}

export namespace DropboxSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class DropboxSecretCreateRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecretCreateRequest): DropboxSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecretCreateRequest;
  static deserializeBinaryFromReader(message: DropboxSecretCreateRequest, reader: jspb.BinaryReader): DropboxSecretCreateRequest;
}

export namespace DropboxSecretCreateRequest {
  export type AsObject = {
    accesstoken: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class DropboxSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecretUpdateRequest): DropboxSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecretUpdateRequest;
  static deserializeBinaryFromReader(message: DropboxSecretUpdateRequest, reader: jspb.BinaryReader): DropboxSecretUpdateRequest;
}

export namespace DropboxSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    accesstoken: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class DropboxSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecretUpdateResponse): DropboxSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecretUpdateResponse;
  static deserializeBinaryFromReader(message: DropboxSecretUpdateResponse, reader: jspb.BinaryReader): DropboxSecretUpdateResponse;
}

export namespace DropboxSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class DropboxSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecretDeleteRequest): DropboxSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecretDeleteRequest;
  static deserializeBinaryFromReader(message: DropboxSecretDeleteRequest, reader: jspb.BinaryReader): DropboxSecretDeleteRequest;
}

export namespace DropboxSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class DropboxSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSecretDeleteResponse): DropboxSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSecretDeleteResponse;
  static deserializeBinaryFromReader(message: DropboxSecretDeleteResponse, reader: jspb.BinaryReader): DropboxSecretDeleteResponse;
}

export namespace DropboxSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

