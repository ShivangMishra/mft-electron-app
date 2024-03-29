// package: org.apache.airavata.mft.resource.stubs.scp.storage
// file: scp/SCPStorage.proto

import * as jspb from 'google-protobuf';

export class SCPStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorage.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorage): SCPStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorage;
  static deserializeBinaryFromReader(message: SCPStorage, reader: jspb.BinaryReader): SCPStorage;
}

export namespace SCPStorage {
  export type AsObject = {
    storageid: string,
    host: string,
    port: number,
    name: string,
  }
}

export class SCPStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageListRequest): SCPStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageListRequest;
  static deserializeBinaryFromReader(message: SCPStorageListRequest, reader: jspb.BinaryReader): SCPStorageListRequest;
}

export namespace SCPStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class SCPStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<SCPStorage>;
  setStoragesList(value: Array<SCPStorage>): void;
  addStorages(value?: SCPStorage, index?: number): SCPStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageListResponse): SCPStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageListResponse;
  static deserializeBinaryFromReader(message: SCPStorageListResponse, reader: jspb.BinaryReader): SCPStorageListResponse;
}

export namespace SCPStorageListResponse {
  export type AsObject = {
    storagesList: Array<SCPStorage.AsObject>,
  }
}

export class SCPStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageGetRequest): SCPStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageGetRequest;
  static deserializeBinaryFromReader(message: SCPStorageGetRequest, reader: jspb.BinaryReader): SCPStorageGetRequest;
}

export namespace SCPStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class SCPStorageCreateRequest extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageCreateRequest): SCPStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageCreateRequest;
  static deserializeBinaryFromReader(message: SCPStorageCreateRequest, reader: jspb.BinaryReader): SCPStorageCreateRequest;
}

export namespace SCPStorageCreateRequest {
  export type AsObject = {
    host: string,
    port: number,
    storageid: string,
    name: string,
  }
}

export class SCPStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageUpdateRequest): SCPStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageUpdateRequest;
  static deserializeBinaryFromReader(message: SCPStorageUpdateRequest, reader: jspb.BinaryReader): SCPStorageUpdateRequest;
}

export namespace SCPStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    host: string,
    port: number,
    name: string,
  }
}

export class SCPStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageUpdateResponse): SCPStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageUpdateResponse;
  static deserializeBinaryFromReader(message: SCPStorageUpdateResponse, reader: jspb.BinaryReader): SCPStorageUpdateResponse;
}

export namespace SCPStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class SCPStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageDeleteRequest): SCPStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageDeleteRequest;
  static deserializeBinaryFromReader(message: SCPStorageDeleteRequest, reader: jspb.BinaryReader): SCPStorageDeleteRequest;
}

export namespace SCPStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class SCPStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCPStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SCPStorageDeleteResponse): SCPStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCPStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCPStorageDeleteResponse;
  static deserializeBinaryFromReader(message: SCPStorageDeleteResponse, reader: jspb.BinaryReader): SCPStorageDeleteResponse;
}

export namespace SCPStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

