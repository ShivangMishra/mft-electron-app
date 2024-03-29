// package: org.apache.airavata.mft.resource.stubs.http.storage
// file: http/HTTPStorage.proto

import * as jspb from 'google-protobuf';

export class HTTPStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getBaseurl(): string;
  setBaseurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorage.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorage): HTTPStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorage;
  static deserializeBinaryFromReader(message: HTTPStorage, reader: jspb.BinaryReader): HTTPStorage;
}

export namespace HTTPStorage {
  export type AsObject = {
    storageid: string,
    name: string,
    baseurl: string,
  }
}

export class HTTPStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageListRequest): HTTPStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageListRequest;
  static deserializeBinaryFromReader(message: HTTPStorageListRequest, reader: jspb.BinaryReader): HTTPStorageListRequest;
}

export namespace HTTPStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class HTTPStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<HTTPStorage>;
  setStoragesList(value: Array<HTTPStorage>): void;
  addStorages(value?: HTTPStorage, index?: number): HTTPStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageListResponse): HTTPStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageListResponse;
  static deserializeBinaryFromReader(message: HTTPStorageListResponse, reader: jspb.BinaryReader): HTTPStorageListResponse;
}

export namespace HTTPStorageListResponse {
  export type AsObject = {
    storagesList: Array<HTTPStorage.AsObject>,
  }
}

export class HTTPStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageGetRequest): HTTPStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageGetRequest;
  static deserializeBinaryFromReader(message: HTTPStorageGetRequest, reader: jspb.BinaryReader): HTTPStorageGetRequest;
}

export namespace HTTPStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class HTTPStorageCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBaseurl(): string;
  setBaseurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageCreateRequest): HTTPStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageCreateRequest;
  static deserializeBinaryFromReader(message: HTTPStorageCreateRequest, reader: jspb.BinaryReader): HTTPStorageCreateRequest;
}

export namespace HTTPStorageCreateRequest {
  export type AsObject = {
    name: string,
    baseurl: string,
  }
}

export class HTTPStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getBaseurl(): string;
  setBaseurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageUpdateRequest): HTTPStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageUpdateRequest;
  static deserializeBinaryFromReader(message: HTTPStorageUpdateRequest, reader: jspb.BinaryReader): HTTPStorageUpdateRequest;
}

export namespace HTTPStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    name: string,
    baseurl: string,
  }
}

export class HTTPStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageUpdateResponse): HTTPStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageUpdateResponse;
  static deserializeBinaryFromReader(message: HTTPStorageUpdateResponse, reader: jspb.BinaryReader): HTTPStorageUpdateResponse;
}

export namespace HTTPStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class HTTPStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageDeleteRequest): HTTPStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageDeleteRequest;
  static deserializeBinaryFromReader(message: HTTPStorageDeleteRequest, reader: jspb.BinaryReader): HTTPStorageDeleteRequest;
}

export namespace HTTPStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class HTTPStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPStorageDeleteResponse): HTTPStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPStorageDeleteResponse;
  static deserializeBinaryFromReader(message: HTTPStorageDeleteResponse, reader: jspb.BinaryReader): HTTPStorageDeleteResponse;
}

export namespace HTTPStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

