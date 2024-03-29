// package: org.apache.airavata.mft.resource.stubs.odata.storage
// file: odata/ODataStorage.proto

import * as jspb from 'google-protobuf';

export class ODataStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getBaseurl(): string;
  setBaseurl(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorage.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorage): ODataStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorage;
  static deserializeBinaryFromReader(message: ODataStorage, reader: jspb.BinaryReader): ODataStorage;
}

export namespace ODataStorage {
  export type AsObject = {
    storageid: string,
    baseurl: string,
    name: string,
  }
}

export class ODataStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageListRequest): ODataStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageListRequest;
  static deserializeBinaryFromReader(message: ODataStorageListRequest, reader: jspb.BinaryReader): ODataStorageListRequest;
}

export namespace ODataStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class ODataStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<ODataStorage>;
  setStoragesList(value: Array<ODataStorage>): void;
  addStorages(value?: ODataStorage, index?: number): ODataStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageListResponse): ODataStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageListResponse;
  static deserializeBinaryFromReader(message: ODataStorageListResponse, reader: jspb.BinaryReader): ODataStorageListResponse;
}

export namespace ODataStorageListResponse {
  export type AsObject = {
    storagesList: Array<ODataStorage.AsObject>,
  }
}

export class ODataStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageGetRequest): ODataStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageGetRequest;
  static deserializeBinaryFromReader(message: ODataStorageGetRequest, reader: jspb.BinaryReader): ODataStorageGetRequest;
}

export namespace ODataStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class ODataStorageCreateRequest extends jspb.Message {
  getBaseurl(): string;
  setBaseurl(value: string): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageCreateRequest): ODataStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageCreateRequest;
  static deserializeBinaryFromReader(message: ODataStorageCreateRequest, reader: jspb.BinaryReader): ODataStorageCreateRequest;
}

export namespace ODataStorageCreateRequest {
  export type AsObject = {
    baseurl: string,
    storageid: string,
    name: string,
  }
}

export class ODataStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getBaseurl(): string;
  setBaseurl(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageUpdateRequest): ODataStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageUpdateRequest;
  static deserializeBinaryFromReader(message: ODataStorageUpdateRequest, reader: jspb.BinaryReader): ODataStorageUpdateRequest;
}

export namespace ODataStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    baseurl: string,
    name: string,
  }
}

export class ODataStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageUpdateResponse): ODataStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageUpdateResponse;
  static deserializeBinaryFromReader(message: ODataStorageUpdateResponse, reader: jspb.BinaryReader): ODataStorageUpdateResponse;
}

export namespace ODataStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class ODataStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageDeleteRequest): ODataStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageDeleteRequest;
  static deserializeBinaryFromReader(message: ODataStorageDeleteRequest, reader: jspb.BinaryReader): ODataStorageDeleteRequest;
}

export namespace ODataStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class ODataStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ODataStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ODataStorageDeleteResponse): ODataStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ODataStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ODataStorageDeleteResponse;
  static deserializeBinaryFromReader(message: ODataStorageDeleteResponse, reader: jspb.BinaryReader): ODataStorageDeleteResponse;
}

export namespace ODataStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

