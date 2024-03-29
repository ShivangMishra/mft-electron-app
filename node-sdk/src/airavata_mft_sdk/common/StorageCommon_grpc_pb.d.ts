// package: org.apache.airavata.mft.resource.stubs.storage.common
// file: common/StorageCommon.proto

import * as grpc from '@grpc/grpc-js';
import * as common_StorageCommon_pb from '../common/StorageCommon_pb';

interface IStorageCommonServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  resolveStorageType: IStorageCommonServiceService_IresolveStorageType;
  registerSecretForStorage: IStorageCommonServiceService_IregisterSecretForStorage;
  getSecretForStorage: IStorageCommonServiceService_IgetSecretForStorage;
  deleteSecretsForStorage: IStorageCommonServiceService_IdeleteSecretsForStorage;
  searchStorages: IStorageCommonServiceService_IsearchStorages;
  listStorages: IStorageCommonServiceService_IlistStorages;
}

interface IStorageCommonServiceService_IresolveStorageType extends grpc.MethodDefinition<common_StorageCommon_pb.StorageTypeResolveRequest, common_StorageCommon_pb.StorageTypeResolveResponse> {
  path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/resolveStorageType'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<common_StorageCommon_pb.StorageTypeResolveRequest>;
  requestDeserialize: grpc.deserialize<common_StorageCommon_pb.StorageTypeResolveRequest>;
  responseSerialize: grpc.serialize<common_StorageCommon_pb.StorageTypeResolveResponse>;
  responseDeserialize: grpc.deserialize<common_StorageCommon_pb.StorageTypeResolveResponse>;
}

interface IStorageCommonServiceService_IregisterSecretForStorage extends grpc.MethodDefinition<common_StorageCommon_pb.SecretForStorage, common_StorageCommon_pb.SecretForStorage> {
  path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/registerSecretForStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<common_StorageCommon_pb.SecretForStorage>;
  requestDeserialize: grpc.deserialize<common_StorageCommon_pb.SecretForStorage>;
  responseSerialize: grpc.serialize<common_StorageCommon_pb.SecretForStorage>;
  responseDeserialize: grpc.deserialize<common_StorageCommon_pb.SecretForStorage>;
}

interface IStorageCommonServiceService_IgetSecretForStorage extends grpc.MethodDefinition<common_StorageCommon_pb.SecretForStorageGetRequest, common_StorageCommon_pb.SecretForStorage> {
  path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/getSecretForStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<common_StorageCommon_pb.SecretForStorageGetRequest>;
  requestDeserialize: grpc.deserialize<common_StorageCommon_pb.SecretForStorageGetRequest>;
  responseSerialize: grpc.serialize<common_StorageCommon_pb.SecretForStorage>;
  responseDeserialize: grpc.deserialize<common_StorageCommon_pb.SecretForStorage>;
}

interface IStorageCommonServiceService_IdeleteSecretsForStorage extends grpc.MethodDefinition<common_StorageCommon_pb.SecretForStorageDeleteRequest, common_StorageCommon_pb.SecretForStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/deleteSecretsForStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<common_StorageCommon_pb.SecretForStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<common_StorageCommon_pb.SecretForStorageDeleteRequest>;
  responseSerialize: grpc.serialize<common_StorageCommon_pb.SecretForStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<common_StorageCommon_pb.SecretForStorageDeleteResponse>;
}

interface IStorageCommonServiceService_IsearchStorages extends grpc.MethodDefinition<common_StorageCommon_pb.StorageSearchRequest, common_StorageCommon_pb.StorageListResponse> {
  path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/searchStorages'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<common_StorageCommon_pb.StorageSearchRequest>;
  requestDeserialize: grpc.deserialize<common_StorageCommon_pb.StorageSearchRequest>;
  responseSerialize: grpc.serialize<common_StorageCommon_pb.StorageListResponse>;
  responseDeserialize: grpc.deserialize<common_StorageCommon_pb.StorageListResponse>;
}

interface IStorageCommonServiceService_IlistStorages extends grpc.MethodDefinition<common_StorageCommon_pb.StorageListRequest, common_StorageCommon_pb.StorageListResponse> {
  path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/listStorages'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<common_StorageCommon_pb.StorageListRequest>;
  requestDeserialize: grpc.deserialize<common_StorageCommon_pb.StorageListRequest>;
  responseSerialize: grpc.serialize<common_StorageCommon_pb.StorageListResponse>;
  responseDeserialize: grpc.deserialize<common_StorageCommon_pb.StorageListResponse>;
}

export const StorageCommonServiceService: IStorageCommonServiceService;
export interface IStorageCommonServiceServer extends grpc.UntypedServiceImplementation {
  resolveStorageType: grpc.handleUnaryCall<common_StorageCommon_pb.StorageTypeResolveRequest, common_StorageCommon_pb.StorageTypeResolveResponse>;
  registerSecretForStorage: grpc.handleUnaryCall<common_StorageCommon_pb.SecretForStorage, common_StorageCommon_pb.SecretForStorage>;
  getSecretForStorage: grpc.handleUnaryCall<common_StorageCommon_pb.SecretForStorageGetRequest, common_StorageCommon_pb.SecretForStorage>;
  deleteSecretsForStorage: grpc.handleUnaryCall<common_StorageCommon_pb.SecretForStorageDeleteRequest, common_StorageCommon_pb.SecretForStorageDeleteResponse>;
  searchStorages: grpc.handleUnaryCall<common_StorageCommon_pb.StorageSearchRequest, common_StorageCommon_pb.StorageListResponse>;
  listStorages: grpc.handleUnaryCall<common_StorageCommon_pb.StorageListRequest, common_StorageCommon_pb.StorageListResponse>;
}

export interface IStorageCommonServiceClient {
  resolveStorageType(request: common_StorageCommon_pb.StorageTypeResolveRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageTypeResolveResponse) => void): grpc.ClientUnaryCall;
  resolveStorageType(request: common_StorageCommon_pb.StorageTypeResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageTypeResolveResponse) => void): grpc.ClientUnaryCall;
  resolveStorageType(request: common_StorageCommon_pb.StorageTypeResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageTypeResolveResponse) => void): grpc.ClientUnaryCall;
  registerSecretForStorage(request: common_StorageCommon_pb.SecretForStorage, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  registerSecretForStorage(request: common_StorageCommon_pb.SecretForStorage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  registerSecretForStorage(request: common_StorageCommon_pb.SecretForStorage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  getSecretForStorage(request: common_StorageCommon_pb.SecretForStorageGetRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  getSecretForStorage(request: common_StorageCommon_pb.SecretForStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  getSecretForStorage(request: common_StorageCommon_pb.SecretForStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  deleteSecretsForStorage(request: common_StorageCommon_pb.SecretForStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSecretsForStorage(request: common_StorageCommon_pb.SecretForStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSecretsForStorage(request: common_StorageCommon_pb.SecretForStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  searchStorages(request: common_StorageCommon_pb.StorageSearchRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  searchStorages(request: common_StorageCommon_pb.StorageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  searchStorages(request: common_StorageCommon_pb.StorageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  listStorages(request: common_StorageCommon_pb.StorageListRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  listStorages(request: common_StorageCommon_pb.StorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  listStorages(request: common_StorageCommon_pb.StorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
}

export class StorageCommonServiceClient extends grpc.Client implements IStorageCommonServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public resolveStorageType(request: common_StorageCommon_pb.StorageTypeResolveRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageTypeResolveResponse) => void): grpc.ClientUnaryCall;
  public resolveStorageType(request: common_StorageCommon_pb.StorageTypeResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageTypeResolveResponse) => void): grpc.ClientUnaryCall;
  public resolveStorageType(request: common_StorageCommon_pb.StorageTypeResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageTypeResolveResponse) => void): grpc.ClientUnaryCall;
  public registerSecretForStorage(request: common_StorageCommon_pb.SecretForStorage, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  public registerSecretForStorage(request: common_StorageCommon_pb.SecretForStorage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  public registerSecretForStorage(request: common_StorageCommon_pb.SecretForStorage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  public getSecretForStorage(request: common_StorageCommon_pb.SecretForStorageGetRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  public getSecretForStorage(request: common_StorageCommon_pb.SecretForStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  public getSecretForStorage(request: common_StorageCommon_pb.SecretForStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorage) => void): grpc.ClientUnaryCall;
  public deleteSecretsForStorage(request: common_StorageCommon_pb.SecretForStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSecretsForStorage(request: common_StorageCommon_pb.SecretForStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSecretsForStorage(request: common_StorageCommon_pb.SecretForStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.SecretForStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public searchStorages(request: common_StorageCommon_pb.StorageSearchRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  public searchStorages(request: common_StorageCommon_pb.StorageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  public searchStorages(request: common_StorageCommon_pb.StorageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  public listStorages(request: common_StorageCommon_pb.StorageListRequest, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  public listStorages(request: common_StorageCommon_pb.StorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
  public listStorages(request: common_StorageCommon_pb.StorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_StorageCommon_pb.StorageListResponse) => void): grpc.ClientUnaryCall;
}

