// package: org.apache.airavata.mft.credential.stubs.gcs
// file: gcs/GCSCredential.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from '../CredCommon_pb';

export class GCSSecret extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getClientemail(): string;
  setClientemail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecret.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecret): GCSSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecret;
  static deserializeBinaryFromReader(message: GCSSecret, reader: jspb.BinaryReader): GCSSecret;
}

export namespace GCSSecret {
  export type AsObject = {
    secretid: string,
    projectid: string,
    privatekey: string,
    clientemail: string,
  }
}

export class GCSSecretGetRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecretGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecretGetRequest): GCSSecretGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecretGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecretGetRequest;
  static deserializeBinaryFromReader(message: GCSSecretGetRequest, reader: jspb.BinaryReader): GCSSecretGetRequest;
}

export namespace GCSSecretGetRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class GCSSecretCreateRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getClientemail(): string;
  setClientemail(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecretCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecretCreateRequest): GCSSecretCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecretCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecretCreateRequest;
  static deserializeBinaryFromReader(message: GCSSecretCreateRequest, reader: jspb.BinaryReader): GCSSecretCreateRequest;
}

export namespace GCSSecretCreateRequest {
  export type AsObject = {
    projectid: string,
    privatekey: string,
    clientemail: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class GCSSecretUpdateRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getClientemail(): string;
  setClientemail(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecretUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecretUpdateRequest): GCSSecretUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecretUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecretUpdateRequest;
  static deserializeBinaryFromReader(message: GCSSecretUpdateRequest, reader: jspb.BinaryReader): GCSSecretUpdateRequest;
}

export namespace GCSSecretUpdateRequest {
  export type AsObject = {
    secretid: string,
    projectid: string,
    privatekey: string,
    clientemail: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class GCSSecretUpdateResponse extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecretUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecretUpdateResponse): GCSSecretUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecretUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecretUpdateResponse;
  static deserializeBinaryFromReader(message: GCSSecretUpdateResponse, reader: jspb.BinaryReader): GCSSecretUpdateResponse;
}

export namespace GCSSecretUpdateResponse {
  export type AsObject = {
    secretid: string,
  }
}

export class GCSSecretDeleteRequest extends jspb.Message {
  getSecretid(): string;
  setSecretid(value: string): void;

  hasAuthztoken(): boolean;
  clearAuthztoken(): void;
  getAuthztoken(): CredCommon_pb.AuthToken | undefined;
  setAuthztoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecretDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecretDeleteRequest): GCSSecretDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecretDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecretDeleteRequest;
  static deserializeBinaryFromReader(message: GCSSecretDeleteRequest, reader: jspb.BinaryReader): GCSSecretDeleteRequest;
}

export namespace GCSSecretDeleteRequest {
  export type AsObject = {
    secretid: string,
    authztoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class GCSSecretDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSSecretDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSSecretDeleteResponse): GCSSecretDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSSecretDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSSecretDeleteResponse;
  static deserializeBinaryFromReader(message: GCSSecretDeleteResponse, reader: jspb.BinaryReader): GCSSecretDeleteResponse;
}

export namespace GCSSecretDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

