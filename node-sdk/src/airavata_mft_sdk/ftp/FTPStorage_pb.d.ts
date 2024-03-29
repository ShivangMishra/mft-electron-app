// package: org.apache.airavata.mft.resource.stubs.ftp.storage
// file: ftp/FTPStorage.proto

import * as jspb from 'google-protobuf';

export class FTPStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorage.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorage): FTPStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorage;
  static deserializeBinaryFromReader(message: FTPStorage, reader: jspb.BinaryReader): FTPStorage;
}

export namespace FTPStorage {
  export type AsObject = {
    storageid: string,
    host: string,
    port: number,
    name: string,
  }
}

export class FTPStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageListRequest): FTPStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageListRequest;
  static deserializeBinaryFromReader(message: FTPStorageListRequest, reader: jspb.BinaryReader): FTPStorageListRequest;
}

export namespace FTPStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class FTPStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<FTPStorage>;
  setStoragesList(value: Array<FTPStorage>): void;
  addStorages(value?: FTPStorage, index?: number): FTPStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageListResponse): FTPStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageListResponse;
  static deserializeBinaryFromReader(message: FTPStorageListResponse, reader: jspb.BinaryReader): FTPStorageListResponse;
}

export namespace FTPStorageListResponse {
  export type AsObject = {
    storagesList: Array<FTPStorage.AsObject>,
  }
}

export class FTPStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageGetRequest): FTPStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageGetRequest;
  static deserializeBinaryFromReader(message: FTPStorageGetRequest, reader: jspb.BinaryReader): FTPStorageGetRequest;
}

export namespace FTPStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class FTPStorageCreateRequest extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageCreateRequest): FTPStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageCreateRequest;
  static deserializeBinaryFromReader(message: FTPStorageCreateRequest, reader: jspb.BinaryReader): FTPStorageCreateRequest;
}

export namespace FTPStorageCreateRequest {
  export type AsObject = {
    host: string,
    port: number,
    storageid: string,
    name: string,
  }
}

export class FTPStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageUpdateRequest): FTPStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageUpdateRequest;
  static deserializeBinaryFromReader(message: FTPStorageUpdateRequest, reader: jspb.BinaryReader): FTPStorageUpdateRequest;
}

export namespace FTPStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    host: string,
    port: number,
    name: string,
  }
}

export class FTPStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageUpdateResponse): FTPStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageUpdateResponse;
  static deserializeBinaryFromReader(message: FTPStorageUpdateResponse, reader: jspb.BinaryReader): FTPStorageUpdateResponse;
}

export namespace FTPStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class FTPStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageDeleteRequest): FTPStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageDeleteRequest;
  static deserializeBinaryFromReader(message: FTPStorageDeleteRequest, reader: jspb.BinaryReader): FTPStorageDeleteRequest;
}

export namespace FTPStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class FTPStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FTPStorageDeleteResponse): FTPStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTPStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPStorageDeleteResponse;
  static deserializeBinaryFromReader(message: FTPStorageDeleteResponse, reader: jspb.BinaryReader): FTPStorageDeleteResponse;
}

export namespace FTPStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

