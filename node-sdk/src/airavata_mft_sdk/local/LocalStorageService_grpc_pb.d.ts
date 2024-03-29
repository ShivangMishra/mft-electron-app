// package: org.apache.airavata.mft.resource.service.local
// file: local/LocalStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as local_LocalStorageService_pb from '../local/LocalStorageService_pb';
import * as local_LocalStorage_pb from '../local/LocalStorage_pb';

interface ILocalStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listLocalStorage: ILocalStorageServiceService_IlistLocalStorage;
  getLocalStorage: ILocalStorageServiceService_IgetLocalStorage;
  createLocalStorage: ILocalStorageServiceService_IcreateLocalStorage;
  updateLocalStorage: ILocalStorageServiceService_IupdateLocalStorage;
  deleteLocalStorage: ILocalStorageServiceService_IdeleteLocalStorage;
}

interface ILocalStorageServiceService_IlistLocalStorage extends grpc.MethodDefinition<local_LocalStorage_pb.LocalStorageListRequest, local_LocalStorage_pb.LocalStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/listLocalStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageListRequest>;
  requestDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageListRequest>;
  responseSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageListResponse>;
  responseDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageListResponse>;
}

interface ILocalStorageServiceService_IgetLocalStorage extends grpc.MethodDefinition<local_LocalStorage_pb.LocalStorageGetRequest, local_LocalStorage_pb.LocalStorage> {
  path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/getLocalStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageGetRequest>;
  requestDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageGetRequest>;
  responseSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorage>;
  responseDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorage>;
}

interface ILocalStorageServiceService_IcreateLocalStorage extends grpc.MethodDefinition<local_LocalStorage_pb.LocalStorageCreateRequest, local_LocalStorage_pb.LocalStorage> {
  path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/createLocalStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageCreateRequest>;
  responseSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorage>;
  responseDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorage>;
}

interface ILocalStorageServiceService_IupdateLocalStorage extends grpc.MethodDefinition<local_LocalStorage_pb.LocalStorageUpdateRequest, local_LocalStorage_pb.LocalStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/updateLocalStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageUpdateRequest>;
  responseSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageUpdateResponse>;
}

interface ILocalStorageServiceService_IdeleteLocalStorage extends grpc.MethodDefinition<local_LocalStorage_pb.LocalStorageDeleteRequest, local_LocalStorage_pb.LocalStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/deleteLocalStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageDeleteRequest>;
  responseSerialize: grpc.serialize<local_LocalStorage_pb.LocalStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<local_LocalStorage_pb.LocalStorageDeleteResponse>;
}

export const LocalStorageServiceService: ILocalStorageServiceService;
export interface ILocalStorageServiceServer extends grpc.UntypedServiceImplementation {
  listLocalStorage: grpc.handleUnaryCall<local_LocalStorage_pb.LocalStorageListRequest, local_LocalStorage_pb.LocalStorageListResponse>;
  getLocalStorage: grpc.handleUnaryCall<local_LocalStorage_pb.LocalStorageGetRequest, local_LocalStorage_pb.LocalStorage>;
  createLocalStorage: grpc.handleUnaryCall<local_LocalStorage_pb.LocalStorageCreateRequest, local_LocalStorage_pb.LocalStorage>;
  updateLocalStorage: grpc.handleUnaryCall<local_LocalStorage_pb.LocalStorageUpdateRequest, local_LocalStorage_pb.LocalStorageUpdateResponse>;
  deleteLocalStorage: grpc.handleUnaryCall<local_LocalStorage_pb.LocalStorageDeleteRequest, local_LocalStorage_pb.LocalStorageDeleteResponse>;
}

export interface ILocalStorageServiceClient {
  listLocalStorage(request: local_LocalStorage_pb.LocalStorageListRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageListResponse) => void): grpc.ClientUnaryCall;
  listLocalStorage(request: local_LocalStorage_pb.LocalStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageListResponse) => void): grpc.ClientUnaryCall;
  listLocalStorage(request: local_LocalStorage_pb.LocalStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageListResponse) => void): grpc.ClientUnaryCall;
  getLocalStorage(request: local_LocalStorage_pb.LocalStorageGetRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  getLocalStorage(request: local_LocalStorage_pb.LocalStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  getLocalStorage(request: local_LocalStorage_pb.LocalStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  createLocalStorage(request: local_LocalStorage_pb.LocalStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  createLocalStorage(request: local_LocalStorage_pb.LocalStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  createLocalStorage(request: local_LocalStorage_pb.LocalStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  updateLocalStorage(request: local_LocalStorage_pb.LocalStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateLocalStorage(request: local_LocalStorage_pb.LocalStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateLocalStorage(request: local_LocalStorage_pb.LocalStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteLocalStorage(request: local_LocalStorage_pb.LocalStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteLocalStorage(request: local_LocalStorage_pb.LocalStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteLocalStorage(request: local_LocalStorage_pb.LocalStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class LocalStorageServiceClient extends grpc.Client implements ILocalStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listLocalStorage(request: local_LocalStorage_pb.LocalStorageListRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageListResponse) => void): grpc.ClientUnaryCall;
  public listLocalStorage(request: local_LocalStorage_pb.LocalStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageListResponse) => void): grpc.ClientUnaryCall;
  public listLocalStorage(request: local_LocalStorage_pb.LocalStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageListResponse) => void): grpc.ClientUnaryCall;
  public getLocalStorage(request: local_LocalStorage_pb.LocalStorageGetRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  public getLocalStorage(request: local_LocalStorage_pb.LocalStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  public getLocalStorage(request: local_LocalStorage_pb.LocalStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  public createLocalStorage(request: local_LocalStorage_pb.LocalStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  public createLocalStorage(request: local_LocalStorage_pb.LocalStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  public createLocalStorage(request: local_LocalStorage_pb.LocalStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorage) => void): grpc.ClientUnaryCall;
  public updateLocalStorage(request: local_LocalStorage_pb.LocalStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateLocalStorage(request: local_LocalStorage_pb.LocalStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateLocalStorage(request: local_LocalStorage_pb.LocalStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteLocalStorage(request: local_LocalStorage_pb.LocalStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteLocalStorage(request: local_LocalStorage_pb.LocalStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteLocalStorage(request: local_LocalStorage_pb.LocalStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: local_LocalStorage_pb.LocalStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

