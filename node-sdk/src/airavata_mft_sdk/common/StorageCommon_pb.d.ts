// package: org.apache.airavata.mft.resource.stubs.storage.common
// file: common/StorageCommon.proto

import * as jspb from 'google-protobuf';

export class StorageTypeResolveRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageTypeResolveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageTypeResolveRequest): StorageTypeResolveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageTypeResolveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageTypeResolveRequest;
  static deserializeBinaryFromReader(message: StorageTypeResolveRequest, reader: jspb.BinaryReader): StorageTypeResolveRequest;
}

export namespace StorageTypeResolveRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class StorageTypeResolveResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getStoragename(): string;
  setStoragename(value: string): void;

  getStoragetype(): StorageType;
  setStoragetype(value: StorageType): void;

  getError(): Error;
  setError(value: Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageTypeResolveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageTypeResolveResponse): StorageTypeResolveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageTypeResolveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageTypeResolveResponse;
  static deserializeBinaryFromReader(message: StorageTypeResolveResponse, reader: jspb.BinaryReader): StorageTypeResolveResponse;
}

export namespace StorageTypeResolveResponse {
  export type AsObject = {
    storageid: string,
    storagename: string,
    storagetype: StorageType,
    error: Error,
  }
}

export class SecretForStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getSecretid(): string;
  setSecretid(value: string): void;

  getStoragetype(): StorageType;
  setStoragetype(value: StorageType): void;

  getError(): Error;
  setError(value: Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretForStorage.AsObject;
  static toObject(includeInstance: boolean, msg: SecretForStorage): SecretForStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretForStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretForStorage;
  static deserializeBinaryFromReader(message: SecretForStorage, reader: jspb.BinaryReader): SecretForStorage;
}

export namespace SecretForStorage {
  export type AsObject = {
    storageid: string,
    secretid: string,
    storagetype: StorageType,
    error: Error,
  }
}

export class SecretForStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretForStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SecretForStorageGetRequest): SecretForStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretForStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretForStorageGetRequest;
  static deserializeBinaryFromReader(message: SecretForStorageGetRequest, reader: jspb.BinaryReader): SecretForStorageGetRequest;
}

export namespace SecretForStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class SecretForStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretForStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SecretForStorageDeleteRequest): SecretForStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretForStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretForStorageDeleteRequest;
  static deserializeBinaryFromReader(message: SecretForStorageDeleteRequest, reader: jspb.BinaryReader): SecretForStorageDeleteRequest;
}

export namespace SecretForStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class SecretForStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretForStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SecretForStorageDeleteResponse): SecretForStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretForStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretForStorageDeleteResponse;
  static deserializeBinaryFromReader(message: SecretForStorageDeleteResponse, reader: jspb.BinaryReader): SecretForStorageDeleteResponse;
}

export namespace SecretForStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class StorageListEntry extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getStoragename(): string;
  setStoragename(value: string): void;

  getStoragetype(): StorageType;
  setStoragetype(value: StorageType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListEntry.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListEntry): StorageListEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListEntry;
  static deserializeBinaryFromReader(message: StorageListEntry, reader: jspb.BinaryReader): StorageListEntry;
}

export namespace StorageListEntry {
  export type AsObject = {
    storageid: string,
    storagename: string,
    storagetype: StorageType,
  }
}

export class StorageListResponse extends jspb.Message {
  clearStoragelistList(): void;
  getStoragelistList(): Array<StorageListEntry>;
  setStoragelistList(value: Array<StorageListEntry>): void;
  addStoragelist(value?: StorageListEntry, index?: number): StorageListEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListResponse): StorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListResponse;
  static deserializeBinaryFromReader(message: StorageListResponse, reader: jspb.BinaryReader): StorageListResponse;
}

export namespace StorageListResponse {
  export type AsObject = {
    storagelistList: Array<StorageListEntry.AsObject>,
  }
}

export class StorageListRequest extends jspb.Message {
  getPagenumber(): number;
  setPagenumber(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListRequest): StorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListRequest;
  static deserializeBinaryFromReader(message: StorageListRequest, reader: jspb.BinaryReader): StorageListRequest;
}

export namespace StorageListRequest {
  export type AsObject = {
    pagenumber: number,
    pagesize: number,
  }
}

export class StorageSearchRequest extends jspb.Message {
  hasStorageid(): boolean;
  clearStorageid(): void;
  getStorageid(): string;
  setStorageid(value: string): void;

  hasStoragename(): boolean;
  clearStoragename(): void;
  getStoragename(): string;
  setStoragename(value: string): void;

  hasStoragetype(): boolean;
  clearStoragetype(): void;
  getStoragetype(): StorageType;
  setStoragetype(value: StorageType): void;

  getSearchQueryCase(): StorageSearchRequest.SearchQueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSearchRequest): StorageSearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSearchRequest;
  static deserializeBinaryFromReader(message: StorageSearchRequest, reader: jspb.BinaryReader): StorageSearchRequest;
}

export namespace StorageSearchRequest {
  export type AsObject = {
    storageid: string,
    storagename: string,
    storagetype: StorageType,
  }

  export enum SearchQueryCase {
    SEARCHQUERY_NOT_SET = 0,
    STORAGEID = 1,
    STORAGENAME = 2,
    STORAGETYPE = 3,
  }
}

export enum StorageType {
  S3 = 0,
  SCP = 1,
  FTP = 2,
  LOCAL = 3,
  BOX = 4,
  DROPBOX = 5,
  GCS = 6,
  AZURE = 7,
  SWIFT = 8,
  ODATA = 9,
  HTTP = 10,
}

export enum Error {
  NOT_FOUND = 0,
  NO_PERMISSION = 1,
  LIMIT_OVERFLOWED = 2,
}

