// package: org.apache.airavata.mft.agent.stub
// file: MFTAgentStubs.proto

import * as jspb from 'google-protobuf';
import * as azure_AzureStorage_pb from './azure/AzureStorage_pb';
import * as box_BoxStorage_pb from './box/BoxStorage_pb';
import * as dropbox_DropboxStorage_pb from './dropbox/DropboxStorage_pb';
import * as ftp_FTPStorage_pb from './ftp/FTPStorage_pb';
import * as gcs_GCSStorage_pb from './gcs/GCSStorage_pb';
import * as local_LocalStorage_pb from './local/LocalStorage_pb';
import * as odata_ODataStorage_pb from './odata/ODataStorage_pb';
import * as s3_S3Storage_pb from './s3/S3Storage_pb';
import * as scp_SCPStorage_pb from './scp/SCPStorage_pb';
import * as swift_SwiftStorage_pb from './swift/SwiftStorage_pb';
import * as http_HTTPStorage_pb from './http/HTTPStorage_pb';
import * as azure_AzureCredential_pb from './azure/AzureCredential_pb';
import * as box_BoxCredential_pb from './box/BoxCredential_pb';
import * as dropbox_DropboxCredential_pb from './dropbox/DropboxCredential_pb';
import * as ftp_FTPCredential_pb from './ftp/FTPCredential_pb';
import * as gcs_GCSCredential_pb from './gcs/GCSCredential_pb';
import * as odata_ODataCredential_pb from './odata/ODataCredential_pb';
import * as s3_S3Credential_pb from './s3/S3Credential_pb';
import * as scp_SCPCredential_pb from './scp/SCPCredential_pb';
import * as swift_SwiftCredential_pb from './swift/SwiftCredential_pb';
import * as http_HttpCredential_pb from './http/HttpCredential_pb';

export class StorageWrapper extends jspb.Message {
  hasAzure(): boolean;
  clearAzure(): void;
  getAzure(): azure_AzureStorage_pb.AzureStorage | undefined;
  setAzure(value?: azure_AzureStorage_pb.AzureStorage): void;

  hasBox(): boolean;
  clearBox(): void;
  getBox(): box_BoxStorage_pb.BoxStorage | undefined;
  setBox(value?: box_BoxStorage_pb.BoxStorage): void;

  hasDropbox(): boolean;
  clearDropbox(): void;
  getDropbox(): dropbox_DropboxStorage_pb.DropboxStorage | undefined;
  setDropbox(value?: dropbox_DropboxStorage_pb.DropboxStorage): void;

  hasFtp(): boolean;
  clearFtp(): void;
  getFtp(): ftp_FTPStorage_pb.FTPStorage | undefined;
  setFtp(value?: ftp_FTPStorage_pb.FTPStorage): void;

  hasGcs(): boolean;
  clearGcs(): void;
  getGcs(): gcs_GCSStorage_pb.GCSStorage | undefined;
  setGcs(value?: gcs_GCSStorage_pb.GCSStorage): void;

  hasLocal(): boolean;
  clearLocal(): void;
  getLocal(): local_LocalStorage_pb.LocalStorage | undefined;
  setLocal(value?: local_LocalStorage_pb.LocalStorage): void;

  hasOdata(): boolean;
  clearOdata(): void;
  getOdata(): odata_ODataStorage_pb.ODataStorage | undefined;
  setOdata(value?: odata_ODataStorage_pb.ODataStorage): void;

  hasS3(): boolean;
  clearS3(): void;
  getS3(): s3_S3Storage_pb.S3Storage | undefined;
  setS3(value?: s3_S3Storage_pb.S3Storage): void;

  hasScp(): boolean;
  clearScp(): void;
  getScp(): scp_SCPStorage_pb.SCPStorage | undefined;
  setScp(value?: scp_SCPStorage_pb.SCPStorage): void;

  hasSwift(): boolean;
  clearSwift(): void;
  getSwift(): swift_SwiftStorage_pb.SwiftStorage | undefined;
  setSwift(value?: swift_SwiftStorage_pb.SwiftStorage): void;

  hasHttp(): boolean;
  clearHttp(): void;
  getHttp(): http_HTTPStorage_pb.HTTPStorage | undefined;
  setHttp(value?: http_HTTPStorage_pb.HTTPStorage): void;

  getStorageCase(): StorageWrapper.StorageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: StorageWrapper): StorageWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageWrapper;
  static deserializeBinaryFromReader(message: StorageWrapper, reader: jspb.BinaryReader): StorageWrapper;
}

export namespace StorageWrapper {
  export type AsObject = {
    azure?: azure_AzureStorage_pb.AzureStorage.AsObject,
    box?: box_BoxStorage_pb.BoxStorage.AsObject,
    dropbox?: dropbox_DropboxStorage_pb.DropboxStorage.AsObject,
    ftp?: ftp_FTPStorage_pb.FTPStorage.AsObject,
    gcs?: gcs_GCSStorage_pb.GCSStorage.AsObject,
    local?: local_LocalStorage_pb.LocalStorage.AsObject,
    odata?: odata_ODataStorage_pb.ODataStorage.AsObject,
    s3?: s3_S3Storage_pb.S3Storage.AsObject,
    scp?: scp_SCPStorage_pb.SCPStorage.AsObject,
    swift?: swift_SwiftStorage_pb.SwiftStorage.AsObject,
    http?: http_HTTPStorage_pb.HTTPStorage.AsObject,
  }

  export enum StorageCase {
    STORAGE_NOT_SET = 0,
    AZURE = 1,
    BOX = 2,
    DROPBOX = 3,
    FTP = 4,
    GCS = 5,
    LOCAL = 6,
    ODATA = 7,
    S3 = 8,
    SCP = 9,
    SWIFT = 10,
    HTTP = 11,
  }
}

export class SecretWrapper extends jspb.Message {
  hasAzure(): boolean;
  clearAzure(): void;
  getAzure(): azure_AzureCredential_pb.AzureSecret | undefined;
  setAzure(value?: azure_AzureCredential_pb.AzureSecret): void;

  hasBox(): boolean;
  clearBox(): void;
  getBox(): box_BoxCredential_pb.BoxSecret | undefined;
  setBox(value?: box_BoxCredential_pb.BoxSecret): void;

  hasDropbox(): boolean;
  clearDropbox(): void;
  getDropbox(): dropbox_DropboxCredential_pb.DropboxSecret | undefined;
  setDropbox(value?: dropbox_DropboxCredential_pb.DropboxSecret): void;

  hasFtp(): boolean;
  clearFtp(): void;
  getFtp(): ftp_FTPCredential_pb.FTPSecret | undefined;
  setFtp(value?: ftp_FTPCredential_pb.FTPSecret): void;

  hasGcs(): boolean;
  clearGcs(): void;
  getGcs(): gcs_GCSCredential_pb.GCSSecret | undefined;
  setGcs(value?: gcs_GCSCredential_pb.GCSSecret): void;

  hasOdata(): boolean;
  clearOdata(): void;
  getOdata(): odata_ODataCredential_pb.ODataSecret | undefined;
  setOdata(value?: odata_ODataCredential_pb.ODataSecret): void;

  hasS3(): boolean;
  clearS3(): void;
  getS3(): s3_S3Credential_pb.S3Secret | undefined;
  setS3(value?: s3_S3Credential_pb.S3Secret): void;

  hasScp(): boolean;
  clearScp(): void;
  getScp(): scp_SCPCredential_pb.SCPSecret | undefined;
  setScp(value?: scp_SCPCredential_pb.SCPSecret): void;

  hasSwift(): boolean;
  clearSwift(): void;
  getSwift(): swift_SwiftCredential_pb.SwiftSecret | undefined;
  setSwift(value?: swift_SwiftCredential_pb.SwiftSecret): void;

  hasHttp(): boolean;
  clearHttp(): void;
  getHttp(): http_HttpCredential_pb.HTTPSecret | undefined;
  setHttp(value?: http_HttpCredential_pb.HTTPSecret): void;

  getSecretCase(): SecretWrapper.SecretCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: SecretWrapper): SecretWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretWrapper;
  static deserializeBinaryFromReader(message: SecretWrapper, reader: jspb.BinaryReader): SecretWrapper;
}

export namespace SecretWrapper {
  export type AsObject = {
    azure?: azure_AzureCredential_pb.AzureSecret.AsObject,
    box?: box_BoxCredential_pb.BoxSecret.AsObject,
    dropbox?: dropbox_DropboxCredential_pb.DropboxSecret.AsObject,
    ftp?: ftp_FTPCredential_pb.FTPSecret.AsObject,
    gcs?: gcs_GCSCredential_pb.GCSSecret.AsObject,
    odata?: odata_ODataCredential_pb.ODataSecret.AsObject,
    s3?: s3_S3Credential_pb.S3Secret.AsObject,
    scp?: scp_SCPCredential_pb.SCPSecret.AsObject,
    swift?: swift_SwiftCredential_pb.SwiftSecret.AsObject,
    http?: http_HttpCredential_pb.HTTPSecret.AsObject,
  }

  export enum SecretCase {
    SECRET_NOT_SET = 0,
    AZURE = 1,
    BOX = 2,
    DROPBOX = 3,
    FTP = 4,
    GCS = 5,
    ODATA = 6,
    S3 = 7,
    SCP = 8,
    SWIFT = 9,
    HTTP = 10,
  }
}

export class EndpointPaths extends jspb.Message {
  getSourcepath(): string;
  setSourcepath(value: string): void;

  getDestinationpath(): string;
  setDestinationpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointPaths.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointPaths): EndpointPaths.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointPaths;
  static deserializeBinaryFromReader(message: EndpointPaths, reader: jspb.BinaryReader): EndpointPaths;
}

export namespace EndpointPaths {
  export type AsObject = {
    sourcepath: string,
    destinationpath: string,
  }
}

export class AgentTransferRequest extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  hasSourcestorage(): boolean;
  clearSourcestorage(): void;
  getSourcestorage(): StorageWrapper | undefined;
  setSourcestorage(value?: StorageWrapper): void;

  hasSourcesecret(): boolean;
  clearSourcesecret(): void;
  getSourcesecret(): SecretWrapper | undefined;
  setSourcesecret(value?: SecretWrapper): void;

  hasDestinationstorage(): boolean;
  clearDestinationstorage(): void;
  getDestinationstorage(): StorageWrapper | undefined;
  setDestinationstorage(value?: StorageWrapper): void;

  hasDestinationsecret(): boolean;
  clearDestinationsecret(): void;
  getDestinationsecret(): SecretWrapper | undefined;
  setDestinationsecret(value?: SecretWrapper): void;

  clearEndpointpathsList(): void;
  getEndpointpathsList(): Array<EndpointPaths>;
  setEndpointpathsList(value: Array<EndpointPaths>): void;
  addEndpointpaths(value?: EndpointPaths, index?: number): EndpointPaths;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentTransferRequest): AgentTransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentTransferRequest;
  static deserializeBinaryFromReader(message: AgentTransferRequest, reader: jspb.BinaryReader): AgentTransferRequest;
}

export namespace AgentTransferRequest {
  export type AsObject = {
    requestid: string,
    sourcestorage?: StorageWrapper.AsObject,
    sourcesecret?: SecretWrapper.AsObject,
    destinationstorage?: StorageWrapper.AsObject,
    destinationsecret?: SecretWrapper.AsObject,
    endpointpathsList: Array<EndpointPaths.AsObject>,
  }
}

export class FileMetadata extends jspb.Message {
  getFriendlyname(): string;
  setFriendlyname(value: string): void;

  getResourcesize(): number;
  setResourcesize(value: number): void;

  getCreatedtime(): number;
  setCreatedtime(value: number): void;

  getUpdatetime(): number;
  setUpdatetime(value: number): void;

  getMd5sum(): string;
  setMd5sum(value: string): void;

  getResourcepath(): string;
  setResourcepath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadata;
  static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
  export type AsObject = {
    friendlyname: string,
    resourcesize: number,
    createdtime: number,
    updatetime: number,
    md5sum: string,
    resourcepath: string,
  }
}

export class DirectoryMetadata extends jspb.Message {
  getFriendlyname(): string;
  setFriendlyname(value: string): void;

  getCreatedtime(): number;
  setCreatedtime(value: number): void;

  getUpdatetime(): number;
  setUpdatetime(value: number): void;

  getResourcepath(): string;
  setResourcepath(value: string): void;

  clearDirectoriesList(): void;
  getDirectoriesList(): Array<DirectoryMetadata>;
  setDirectoriesList(value: Array<DirectoryMetadata>): void;
  addDirectories(value?: DirectoryMetadata, index?: number): DirectoryMetadata;

  clearFilesList(): void;
  getFilesList(): Array<FileMetadata>;
  setFilesList(value: Array<FileMetadata>): void;
  addFiles(value?: FileMetadata, index?: number): FileMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryMetadata): DirectoryMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectoryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryMetadata;
  static deserializeBinaryFromReader(message: DirectoryMetadata, reader: jspb.BinaryReader): DirectoryMetadata;
}

export namespace DirectoryMetadata {
  export type AsObject = {
    friendlyname: string,
    createdtime: number,
    updatetime: number,
    resourcepath: string,
    directoriesList: Array<DirectoryMetadata.AsObject>,
    filesList: Array<FileMetadata.AsObject>,
  }
}

export class ResourceMetadata extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): FileMetadata | undefined;
  setFile(value?: FileMetadata): void;

  hasDirectory(): boolean;
  clearDirectory(): void;
  getDirectory(): DirectoryMetadata | undefined;
  setDirectory(value?: DirectoryMetadata): void;

  hasError(): boolean;
  clearError(): void;
  getError(): MetadataFetchError;
  setError(value: MetadataFetchError): void;

  getMetadataCase(): ResourceMetadata.MetadataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceMetadata): ResourceMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceMetadata;
  static deserializeBinaryFromReader(message: ResourceMetadata, reader: jspb.BinaryReader): ResourceMetadata;
}

export namespace ResourceMetadata {
  export type AsObject = {
    file?: FileMetadata.AsObject,
    directory?: DirectoryMetadata.AsObject,
    error: MetadataFetchError,
  }

  export enum MetadataCase {
    METADATA_NOT_SET = 0,
    FILE = 1,
    DIRECTORY = 2,
    ERROR = 3,
  }
}

export class GetResourceMetadataRequest extends jspb.Message {
  getResourcepath(): string;
  setResourcepath(value: string): void;

  hasStorage(): boolean;
  clearStorage(): void;
  getStorage(): StorageWrapper | undefined;
  setStorage(value?: StorageWrapper): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): SecretWrapper | undefined;
  setSecret(value?: SecretWrapper): void;

  getRecursivesearch(): boolean;
  setRecursivesearch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceMetadataRequest): GetResourceMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResourceMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceMetadataRequest;
  static deserializeBinaryFromReader(message: GetResourceMetadataRequest, reader: jspb.BinaryReader): GetResourceMetadataRequest;
}

export namespace GetResourceMetadataRequest {
  export type AsObject = {
    resourcepath: string,
    storage?: StorageWrapper.AsObject,
    secret?: SecretWrapper.AsObject,
    recursivesearch: boolean,
  }
}

export enum MetadataFetchError {
  NOT_FOUND = 0,
  NO_PERMISSION = 1,
}

