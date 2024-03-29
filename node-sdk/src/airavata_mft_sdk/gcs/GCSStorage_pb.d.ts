// package: org.apache.airavata.mft.resource.stubs.gcs.storage
// file: gcs/GCSStorage.proto

import * as jspb from 'google-protobuf';

export class GCSStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getBucketname(): string;
  setBucketname(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorage.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorage): GCSStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorage;
  static deserializeBinaryFromReader(message: GCSStorage, reader: jspb.BinaryReader): GCSStorage;
}

export namespace GCSStorage {
  export type AsObject = {
    storageid: string,
    bucketname: string,
    name: string,
  }
}

export class GCSStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageListRequest): GCSStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageListRequest;
  static deserializeBinaryFromReader(message: GCSStorageListRequest, reader: jspb.BinaryReader): GCSStorageListRequest;
}

export namespace GCSStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class GCSStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<GCSStorage>;
  setStoragesList(value: Array<GCSStorage>): void;
  addStorages(value?: GCSStorage, index?: number): GCSStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageListResponse): GCSStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageListResponse;
  static deserializeBinaryFromReader(message: GCSStorageListResponse, reader: jspb.BinaryReader): GCSStorageListResponse;
}

export namespace GCSStorageListResponse {
  export type AsObject = {
    storagesList: Array<GCSStorage.AsObject>,
  }
}

export class GCSStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageGetRequest): GCSStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageGetRequest;
  static deserializeBinaryFromReader(message: GCSStorageGetRequest, reader: jspb.BinaryReader): GCSStorageGetRequest;
}

export namespace GCSStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class GCSStorageCreateRequest extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageCreateRequest): GCSStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageCreateRequest;
  static deserializeBinaryFromReader(message: GCSStorageCreateRequest, reader: jspb.BinaryReader): GCSStorageCreateRequest;
}

export namespace GCSStorageCreateRequest {
  export type AsObject = {
    bucketname: string,
    storageid: string,
    name: string,
  }
}

export class GCSStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getBucketname(): string;
  setBucketname(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageUpdateRequest): GCSStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageUpdateRequest;
  static deserializeBinaryFromReader(message: GCSStorageUpdateRequest, reader: jspb.BinaryReader): GCSStorageUpdateRequest;
}

export namespace GCSStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    bucketname: string,
    name: string,
  }
}

export class GCSStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageUpdateResponse): GCSStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageUpdateResponse;
  static deserializeBinaryFromReader(message: GCSStorageUpdateResponse, reader: jspb.BinaryReader): GCSStorageUpdateResponse;
}

export namespace GCSStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class GCSStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageDeleteRequest): GCSStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageDeleteRequest;
  static deserializeBinaryFromReader(message: GCSStorageDeleteRequest, reader: jspb.BinaryReader): GCSStorageDeleteRequest;
}

export namespace GCSStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class GCSStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSStorageDeleteResponse): GCSStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GCSStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSStorageDeleteResponse;
  static deserializeBinaryFromReader(message: GCSStorageDeleteResponse, reader: jspb.BinaryReader): GCSStorageDeleteResponse;
}

export namespace GCSStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

