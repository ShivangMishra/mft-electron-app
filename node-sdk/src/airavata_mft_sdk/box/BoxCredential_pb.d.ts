// package: org.apache.airavata.mft.credential.stubs.box
// file: box/BoxCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class BoxSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecret.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecret): BoxSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecret;
  static deserializeBinaryFromReader(message: BoxSecret, reader: jspb.BinaryReader): BoxSecret;
}

export namespace BoxSecret {
  export type AsObject = {
    secretid: string,
    accesstoken: string,
  }
}

export class BoxSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecretGetRequest): BoxSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecretGetRequest;
  static deserializeBinaryFromReader(message: BoxSecretGetRequest, reader: jspb.BinaryReader): BoxSecretGetRequest;
}

export namespace BoxSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class BoxSecretCreateRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecretCreateRequest): BoxSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecretCreateRequest;
  static deserializeBinaryFromReader(message: BoxSecretCreateRequest, reader: jspb.BinaryReader): BoxSecretCreateRequest;
}

export namespace BoxSecretCreateRequest {
  export type AsObject = {
    accesstoken: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class BoxSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecretUpdateRequest): BoxSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecretUpdateRequest;
  static deserializeBinaryFromReader(message: BoxSecretUpdateRequest, reader: jspb.BinaryReader): BoxSecretUpdateRequest;
}

export namespace BoxSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    accesstoken: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class BoxSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecretUpdateResponse): BoxSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecretUpdateResponse;
  static deserializeBinaryFromReader(message: BoxSecretUpdateResponse, reader: jspb.BinaryReader): BoxSecretUpdateResponse;
}

export namespace BoxSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class BoxSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecretDeleteRequest): BoxSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecretDeleteRequest;
  static deserializeBinaryFromReader(message: BoxSecretDeleteRequest, reader: jspb.BinaryReader): BoxSecretDeleteRequest;
}

export namespace BoxSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class BoxSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSecretDeleteResponse): BoxSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSecretDeleteResponse;
  static deserializeBinaryFromReader(message: BoxSecretDeleteResponse, reader: jspb.BinaryReader): BoxSecretDeleteResponse;
}

export namespace BoxSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

