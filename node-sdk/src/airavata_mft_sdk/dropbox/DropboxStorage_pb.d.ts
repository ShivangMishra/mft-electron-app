// package: org.apache.airavata.mft.resource.stubs.dropbox.storage
// file: dropbox/DropboxStorage.proto

import * as jspb from 'google-protobuf';

export class DropboxStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorage.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorage): DropboxStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorage;
  static deserializeBinaryFromReader(message: DropboxStorage, reader: jspb.BinaryReader): DropboxStorage;
}

export namespace DropboxStorage {
  export type AsObject = {
    storageid: string,
    name: string,
  }
}

export class DropboxStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageListRequest): DropboxStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageListRequest;
  static deserializeBinaryFromReader(message: DropboxStorageListRequest, reader: jspb.BinaryReader): DropboxStorageListRequest;
}

export namespace DropboxStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class DropboxStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<DropboxStorage>;
  setStoragesList(value: Array<DropboxStorage>): void;
  addStorages(value?: DropboxStorage, index?: number): DropboxStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageListResponse): DropboxStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageListResponse;
  static deserializeBinaryFromReader(message: DropboxStorageListResponse, reader: jspb.BinaryReader): DropboxStorageListResponse;
}

export namespace DropboxStorageListResponse {
  export type AsObject = {
    storagesList: Array<DropboxStorage.AsObject>,
  }
}

export class DropboxStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageGetRequest): DropboxStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageGetRequest;
  static deserializeBinaryFromReader(message: DropboxStorageGetRequest, reader: jspb.BinaryReader): DropboxStorageGetRequest;
}

export namespace DropboxStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class DropboxStorageCreateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageCreateRequest): DropboxStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageCreateRequest;
  static deserializeBinaryFromReader(message: DropboxStorageCreateRequest, reader: jspb.BinaryReader): DropboxStorageCreateRequest;
}

export namespace DropboxStorageCreateRequest {
  export type AsObject = {
    storageid: string,
    name: string,
  }
}

export class DropboxStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageUpdateRequest): DropboxStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageUpdateRequest;
  static deserializeBinaryFromReader(message: DropboxStorageUpdateRequest, reader: jspb.BinaryReader): DropboxStorageUpdateRequest;
}

export namespace DropboxStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    name: string,
  }
}

export class DropboxStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageUpdateResponse): DropboxStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageUpdateResponse;
  static deserializeBinaryFromReader(message: DropboxStorageUpdateResponse, reader: jspb.BinaryReader): DropboxStorageUpdateResponse;
}

export namespace DropboxStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class DropboxStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageDeleteRequest): DropboxStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageDeleteRequest;
  static deserializeBinaryFromReader(message: DropboxStorageDeleteRequest, reader: jspb.BinaryReader): DropboxStorageDeleteRequest;
}

export namespace DropboxStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class DropboxStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxStorageDeleteResponse): DropboxStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropboxStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxStorageDeleteResponse;
  static deserializeBinaryFromReader(message: DropboxStorageDeleteResponse, reader: jspb.BinaryReader): DropboxStorageDeleteResponse;
}

export namespace DropboxStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

