// package: org.apache.airavata.mft.resource.stubs.swift.storage
// file: swift/SwiftStorage.proto

import * as jspb from 'google-protobuf';

export class SwiftStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getContainer(): string;
  setContainer(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorage.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorage): SwiftStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorage;
  static deserializeBinaryFromReader(message: SwiftStorage, reader: jspb.BinaryReader): SwiftStorage;
}

export namespace SwiftStorage {
  export type AsObject = {
    storageid: string,
    container: string,
    name: string,
    region: string,
  }
}

export class SwiftStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageListRequest): SwiftStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageListRequest;
  static deserializeBinaryFromReader(message: SwiftStorageListRequest, reader: jspb.BinaryReader): SwiftStorageListRequest;
}

export namespace SwiftStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class SwiftStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<SwiftStorage>;
  setStoragesList(value: Array<SwiftStorage>): void;
  addStorages(value?: SwiftStorage, index?: number): SwiftStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageListResponse): SwiftStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageListResponse;
  static deserializeBinaryFromReader(message: SwiftStorageListResponse, reader: jspb.BinaryReader): SwiftStorageListResponse;
}

export namespace SwiftStorageListResponse {
  export type AsObject = {
    storagesList: Array<SwiftStorage.AsObject>,
  }
}

export class SwiftStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageGetRequest): SwiftStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageGetRequest;
  static deserializeBinaryFromReader(message: SwiftStorageGetRequest, reader: jspb.BinaryReader): SwiftStorageGetRequest;
}

export namespace SwiftStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class SwiftStorageCreateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getContainer(): string;
  setContainer(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageCreateRequest): SwiftStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageCreateRequest;
  static deserializeBinaryFromReader(message: SwiftStorageCreateRequest, reader: jspb.BinaryReader): SwiftStorageCreateRequest;
}

export namespace SwiftStorageCreateRequest {
  export type AsObject = {
    storageid: string,
    container: string,
    name: string,
    region: string,
  }
}

export class SwiftStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getContainer(): string;
  setContainer(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageUpdateRequest): SwiftStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageUpdateRequest;
  static deserializeBinaryFromReader(message: SwiftStorageUpdateRequest, reader: jspb.BinaryReader): SwiftStorageUpdateRequest;
}

export namespace SwiftStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    container: string,
    name: string,
    region: string,
  }
}

export class SwiftStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageUpdateResponse): SwiftStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageUpdateResponse;
  static deserializeBinaryFromReader(message: SwiftStorageUpdateResponse, reader: jspb.BinaryReader): SwiftStorageUpdateResponse;
}

export namespace SwiftStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class SwiftStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageDeleteRequest): SwiftStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageDeleteRequest;
  static deserializeBinaryFromReader(message: SwiftStorageDeleteRequest, reader: jspb.BinaryReader): SwiftStorageDeleteRequest;
}

export namespace SwiftStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class SwiftStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwiftStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwiftStorageDeleteResponse): SwiftStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwiftStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwiftStorageDeleteResponse;
  static deserializeBinaryFromReader(message: SwiftStorageDeleteResponse, reader: jspb.BinaryReader): SwiftStorageDeleteResponse;
}

export namespace SwiftStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

