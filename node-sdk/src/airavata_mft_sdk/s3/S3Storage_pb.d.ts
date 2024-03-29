// package: org.apache.airavata.mft.resource.stubs.s3.storage
// file: s3/S3Storage.proto

import * as jspb from 'google-protobuf';

export class S3Storage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getBucketname(): string;
  setBucketname(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getUsetls(): boolean;
  setUsetls(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getEnablepathstyleaccess(): boolean;
  setEnablepathstyleaccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3Storage.AsObject;
  static toObject(includeInstance: boolean, msg: S3Storage): S3Storage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3Storage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3Storage;
  static deserializeBinaryFromReader(message: S3Storage, reader: jspb.BinaryReader): S3Storage;
}

export namespace S3Storage {
  export type AsObject = {
    storageid: string,
    bucketname: string,
    region: string,
    endpoint: string,
    usetls: boolean,
    name: string,
    enablepathstyleaccess: boolean,
  }
}

export class S3StorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageListRequest): S3StorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageListRequest;
  static deserializeBinaryFromReader(message: S3StorageListRequest, reader: jspb.BinaryReader): S3StorageListRequest;
}

export namespace S3StorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class S3StorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<S3Storage>;
  setStoragesList(value: Array<S3Storage>): void;
  addStorages(value?: S3Storage, index?: number): S3Storage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageListResponse): S3StorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageListResponse;
  static deserializeBinaryFromReader(message: S3StorageListResponse, reader: jspb.BinaryReader): S3StorageListResponse;
}

export namespace S3StorageListResponse {
  export type AsObject = {
    storagesList: Array<S3Storage.AsObject>,
  }
}

export class S3StorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageGetRequest): S3StorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageGetRequest;
  static deserializeBinaryFromReader(message: S3StorageGetRequest, reader: jspb.BinaryReader): S3StorageGetRequest;
}

export namespace S3StorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class S3StorageCreateRequest extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getUsetls(): boolean;
  setUsetls(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getEnablepathstyleaccess(): boolean;
  setEnablepathstyleaccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageCreateRequest): S3StorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageCreateRequest;
  static deserializeBinaryFromReader(message: S3StorageCreateRequest, reader: jspb.BinaryReader): S3StorageCreateRequest;
}

export namespace S3StorageCreateRequest {
  export type AsObject = {
    bucketname: string,
    region: string,
    storageid: string,
    endpoint: string,
    usetls: boolean,
    name: string,
    enablepathstyleaccess: boolean,
  }
}

export class S3StorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getBucketname(): string;
  setBucketname(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getUsetls(): boolean;
  setUsetls(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getEnablepathstyleaccess(): boolean;
  setEnablepathstyleaccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageUpdateRequest): S3StorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageUpdateRequest;
  static deserializeBinaryFromReader(message: S3StorageUpdateRequest, reader: jspb.BinaryReader): S3StorageUpdateRequest;
}

export namespace S3StorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    bucketname: string,
    region: string,
    endpoint: string,
    usetls: boolean,
    name: string,
    enablepathstyleaccess: boolean,
  }
}

export class S3StorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageUpdateResponse): S3StorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageUpdateResponse;
  static deserializeBinaryFromReader(message: S3StorageUpdateResponse, reader: jspb.BinaryReader): S3StorageUpdateResponse;
}

export namespace S3StorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class S3StorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageDeleteRequest): S3StorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageDeleteRequest;
  static deserializeBinaryFromReader(message: S3StorageDeleteRequest, reader: jspb.BinaryReader): S3StorageDeleteRequest;
}

export namespace S3StorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class S3StorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageDeleteResponse): S3StorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3StorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageDeleteResponse;
  static deserializeBinaryFromReader(message: S3StorageDeleteResponse, reader: jspb.BinaryReader): S3StorageDeleteResponse;
}

export namespace S3StorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

