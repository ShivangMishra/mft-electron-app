// package: org.apache.airavata.mft.resource.stubs.local.storage
// file: local/LocalStorage.proto

import * as jspb from 'google-protobuf';

export class LocalStorage extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getAgentid(): string;
  setAgentid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorage.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorage): LocalStorage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorage;
  static deserializeBinaryFromReader(message: LocalStorage, reader: jspb.BinaryReader): LocalStorage;
}

export namespace LocalStorage {
  export type AsObject = {
    storageid: string,
    agentid: string,
    name: string,
  }
}

export class LocalStorageListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageListRequest): LocalStorageListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageListRequest;
  static deserializeBinaryFromReader(message: LocalStorageListRequest, reader: jspb.BinaryReader): LocalStorageListRequest;
}

export namespace LocalStorageListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class LocalStorageListResponse extends jspb.Message {
  clearStoragesList(): void;
  getStoragesList(): Array<LocalStorage>;
  setStoragesList(value: Array<LocalStorage>): void;
  addStorages(value?: LocalStorage, index?: number): LocalStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageListResponse): LocalStorageListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageListResponse;
  static deserializeBinaryFromReader(message: LocalStorageListResponse, reader: jspb.BinaryReader): LocalStorageListResponse;
}

export namespace LocalStorageListResponse {
  export type AsObject = {
    storagesList: Array<LocalStorage.AsObject>,
  }
}

export class LocalStorageGetRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageGetRequest): LocalStorageGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageGetRequest;
  static deserializeBinaryFromReader(message: LocalStorageGetRequest, reader: jspb.BinaryReader): LocalStorageGetRequest;
}

export namespace LocalStorageGetRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class LocalStorageCreateRequest extends jspb.Message {
  getAgentid(): string;
  setAgentid(value: string): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageCreateRequest): LocalStorageCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageCreateRequest;
  static deserializeBinaryFromReader(message: LocalStorageCreateRequest, reader: jspb.BinaryReader): LocalStorageCreateRequest;
}

export namespace LocalStorageCreateRequest {
  export type AsObject = {
    agentid: string,
    storageid: string,
    name: string,
  }
}

export class LocalStorageUpdateRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  getAgentid(): string;
  setAgentid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageUpdateRequest): LocalStorageUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageUpdateRequest;
  static deserializeBinaryFromReader(message: LocalStorageUpdateRequest, reader: jspb.BinaryReader): LocalStorageUpdateRequest;
}

export namespace LocalStorageUpdateRequest {
  export type AsObject = {
    storageid: string,
    agentid: string,
    name: string,
  }
}

export class LocalStorageUpdateResponse extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageUpdateResponse): LocalStorageUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageUpdateResponse;
  static deserializeBinaryFromReader(message: LocalStorageUpdateResponse, reader: jspb.BinaryReader): LocalStorageUpdateResponse;
}

export namespace LocalStorageUpdateResponse {
  export type AsObject = {
    storageid: string,
  }
}

export class LocalStorageDeleteRequest extends jspb.Message {
  getStorageid(): string;
  setStorageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageDeleteRequest): LocalStorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageDeleteRequest;
  static deserializeBinaryFromReader(message: LocalStorageDeleteRequest, reader: jspb.BinaryReader): LocalStorageDeleteRequest;
}

export namespace LocalStorageDeleteRequest {
  export type AsObject = {
    storageid: string,
  }
}

export class LocalStorageDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalStorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocalStorageDeleteResponse): LocalStorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalStorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalStorageDeleteResponse;
  static deserializeBinaryFromReader(message: LocalStorageDeleteResponse, reader: jspb.BinaryReader): LocalStorageDeleteResponse;
}

export namespace LocalStorageDeleteResponse {
  export type AsObject = {
    status: boolean,
  }
}

