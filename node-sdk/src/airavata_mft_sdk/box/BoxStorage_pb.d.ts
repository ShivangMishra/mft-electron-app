// package: org.apache.airavata.mft.resource.stubs.box.storage
// file: box/BoxStorage.proto

import * as jspb from 'google-protobuf';

export class BoxStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorage.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorage): BoxStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorage;
  static deserializeBinaryFromReader(message: BoxStorage, reader: jspb.BinaryReader): BoxStorage;
}

export namespace BoxStorage {
  export type AsObject = {
    storageid: string,
    name: string,
  }
}

export class BoxStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageListRequest): BoxStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageListRequest;
  static deserializeBinaryFromReader(message: BoxStorageListRequest, reader: jspb.BinaryReader): BoxStorageListRequest;
}

export namespace BoxStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class BoxStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<BoxStorage>;
  setStoragesList(value: Array<BoxStorage>): void;
  addStorages(value?: BoxStorage, index?: number): BoxStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageListResponse): BoxStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageListResponse;
  static deserializeBinaryFromReader(message: BoxStorageListResponse, reader: jspb.BinaryReader): BoxStorageListResponse;
}

export namespace BoxStorageListResponse {
  export type AsObject = {
    storagesList: Array<BoxStorage.AsObject>,
  }
}

export class BoxStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageGetRequest): BoxStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageGetRequest;
  static deserializeBinaryFromReader(message: BoxStorageGetRequest, reader: jspb.BinaryReader): BoxStorageGetRequest;
}

export namespace BoxStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class BoxStorageCreateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageCreateRequest): BoxStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageCreateRequest;
  static deserializeBinaryFromReader(message: BoxStorageCreateRequest, reader: jspb.BinaryReader): BoxStorageCreateRequest;
}

export namespace BoxStorageCreateRequest {
  export type AsObject = {
    storageid: string,
    name: string,
  }
}

export class BoxStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageUpdateRequest): BoxStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageUpdateRequest;
  static deserializeBinaryFromReader(message: BoxStorageUpdateRequest, reader: jspb.BinaryReader): BoxStorageUpdateRequest;
}

export namespace BoxStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    name: string,
  }
}

export class BoxStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageUpdateResponse): BoxStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageUpdateResponse;
  static deserializeBinaryFromReader(message: BoxStorageUpdateResponse, reader: jspb.BinaryReader): BoxStorageUpdateResponse;
}

export namespace BoxStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class BoxStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageDeleteRequest): BoxStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageDeleteRequest;
  static deserializeBinaryFromReader(message: BoxStorageDeleteRequest, reader: jspb.BinaryReader): BoxStorageDeleteRequest;
}

export namespace BoxStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class BoxStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoxStorageDeleteResponse): BoxStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoxStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxStorageDeleteResponse;
  static deserializeBinaryFromReader(message: BoxStorageDeleteResponse, reader: jspb.BinaryReader): BoxStorageDeleteResponse;
}

export namespace BoxStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

