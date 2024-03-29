// package: org.apache.airavata.mft.resource.stubs.azure.storage
// file: azure/AzureStorage.proto

import * as jspb from 'google-protobuf';

export class AzureStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getContainer(): string;
  setContainer(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorage.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorage): AzureStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorage;
  static deserializeBinaryFromReader(message: AzureStorage, reader: jspb.BinaryReader): AzureStorage;
}

export namespace AzureStorage {
  export type AsObject = {
    storageid: string,
    container: string,
    name: string,
  }
}

export class AzureStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageListRequest): AzureStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageListRequest;
  static deserializeBinaryFromReader(message: AzureStorageListRequest, reader: jspb.BinaryReader): AzureStorageListRequest;
}

export namespace AzureStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class AzureStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<AzureStorage>;
  setStoragesList(value: Array<AzureStorage>): void;
  addStorages(value?: AzureStorage, index?: number): AzureStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageListResponse): AzureStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageListResponse;
  static deserializeBinaryFromReader(message: AzureStorageListResponse, reader: jspb.BinaryReader): AzureStorageListResponse;
}

export namespace AzureStorageListResponse {
  export type AsObject = {
    storagesList: Array<AzureStorage.AsObject>,
  }
}

export class AzureStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageGetRequest): AzureStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageGetRequest;
  static deserializeBinaryFromReader(message: AzureStorageGetRequest, reader: jspb.BinaryReader): AzureStorageGetRequest;
}

export namespace AzureStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class AzureStorageCreateRequest extends jspb.Message {
  getContainer(): string;
  setContainer(value: string): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageCreateRequest): AzureStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageCreateRequest;
  static deserializeBinaryFromReader(message: AzureStorageCreateRequest, reader: jspb.BinaryReader): AzureStorageCreateRequest;
}

export namespace AzureStorageCreateRequest {
  export type AsObject = {
    container: string,
    storageid: string,
    name: string,
  }
}

export class AzureStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getContainer(): string;
  setContainer(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageUpdateRequest): AzureStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageUpdateRequest;
  static deserializeBinaryFromReader(message: AzureStorageUpdateRequest, reader: jspb.BinaryReader): AzureStorageUpdateRequest;
}

export namespace AzureStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    container: string,
    name: string,
  }
}

export class AzureStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageUpdateResponse): AzureStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageUpdateResponse;
  static deserializeBinaryFromReader(message: AzureStorageUpdateResponse, reader: jspb.BinaryReader): AzureStorageUpdateResponse;
}

export namespace AzureStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class AzureStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageDeleteRequest): AzureStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageDeleteRequest;
  static deserializeBinaryFromReader(message: AzureStorageDeleteRequest, reader: jspb.BinaryReader): AzureStorageDeleteRequest;
}

export namespace AzureStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class AzureStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageDeleteResponse): AzureStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AzureStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageDeleteResponse;
  static deserializeBinaryFromReader(message: AzureStorageDeleteResponse, reader: jspb.BinaryReader): AzureStorageDeleteResponse;
}

export namespace AzureStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

