// package: org.apache.airavata.mft.resource.service.azure
// file: azure/AzureStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as azure_AzureStorageService_pb from '../azure/AzureStorageService_pb';
import * as azure_AzureStorage_pb from '../azure/AzureStorage_pb';

interface IAzureStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listAzureStorage: IAzureStorageServiceService_IlistAzureStorage;
  getAzureStorage: IAzureStorageServiceService_IgetAzureStorage;
  createAzureStorage: IAzureStorageServiceService_IcreateAzureStorage;
  updateAzureStorage: IAzureStorageServiceService_IupdateAzureStorage;
  deleteAzureStorage: IAzureStorageServiceService_IdeleteAzureStorage;
}

interface IAzureStorageServiceService_IlistAzureStorage extends grpc.MethodDefinition<azure_AzureStorage_pb.AzureStorageListRequest, azure_AzureStorage_pb.AzureStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/listAzureStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageListRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageListRequest>;
  responseSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageListResponse>;
  responseDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageListResponse>;
}

interface IAzureStorageServiceService_IgetAzureStorage extends grpc.MethodDefinition<azure_AzureStorage_pb.AzureStorageGetRequest, azure_AzureStorage_pb.AzureStorage> {
  path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/getAzureStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageGetRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageGetRequest>;
  responseSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorage>;
  responseDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorage>;
}

interface IAzureStorageServiceService_IcreateAzureStorage extends grpc.MethodDefinition<azure_AzureStorage_pb.AzureStorageCreateRequest, azure_AzureStorage_pb.AzureStorage> {
  path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/createAzureStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageCreateRequest>;
  responseSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorage>;
  responseDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorage>;
}

interface IAzureStorageServiceService_IupdateAzureStorage extends grpc.MethodDefinition<azure_AzureStorage_pb.AzureStorageUpdateRequest, azure_AzureStorage_pb.AzureStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/updateAzureStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageUpdateRequest>;
  responseSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageUpdateResponse>;
}

interface IAzureStorageServiceService_IdeleteAzureStorage extends grpc.MethodDefinition<azure_AzureStorage_pb.AzureStorageDeleteRequest, azure_AzureStorage_pb.AzureStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/deleteAzureStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageDeleteRequest>;
  responseSerialize: grpc.serialize<azure_AzureStorage_pb.AzureStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<azure_AzureStorage_pb.AzureStorageDeleteResponse>;
}

export const AzureStorageServiceService: IAzureStorageServiceService;
export interface IAzureStorageServiceServer extends grpc.UntypedServiceImplementation {
  listAzureStorage: grpc.handleUnaryCall<azure_AzureStorage_pb.AzureStorageListRequest, azure_AzureStorage_pb.AzureStorageListResponse>;
  getAzureStorage: grpc.handleUnaryCall<azure_AzureStorage_pb.AzureStorageGetRequest, azure_AzureStorage_pb.AzureStorage>;
  createAzureStorage: grpc.handleUnaryCall<azure_AzureStorage_pb.AzureStorageCreateRequest, azure_AzureStorage_pb.AzureStorage>;
  updateAzureStorage: grpc.handleUnaryCall<azure_AzureStorage_pb.AzureStorageUpdateRequest, azure_AzureStorage_pb.AzureStorageUpdateResponse>;
  deleteAzureStorage: grpc.handleUnaryCall<azure_AzureStorage_pb.AzureStorageDeleteRequest, azure_AzureStorage_pb.AzureStorageDeleteResponse>;
}

export interface IAzureStorageServiceClient {
  listAzureStorage(request: azure_AzureStorage_pb.AzureStorageListRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageListResponse) => void): grpc.ClientUnaryCall;
  listAzureStorage(request: azure_AzureStorage_pb.AzureStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageListResponse) => void): grpc.ClientUnaryCall;
  listAzureStorage(request: azure_AzureStorage_pb.AzureStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageListResponse) => void): grpc.ClientUnaryCall;
  getAzureStorage(request: azure_AzureStorage_pb.AzureStorageGetRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  getAzureStorage(request: azure_AzureStorage_pb.AzureStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  getAzureStorage(request: azure_AzureStorage_pb.AzureStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  createAzureStorage(request: azure_AzureStorage_pb.AzureStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  createAzureStorage(request: azure_AzureStorage_pb.AzureStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  createAzureStorage(request: azure_AzureStorage_pb.AzureStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  updateAzureStorage(request: azure_AzureStorage_pb.AzureStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateAzureStorage(request: azure_AzureStorage_pb.AzureStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateAzureStorage(request: azure_AzureStorage_pb.AzureStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteAzureStorage(request: azure_AzureStorage_pb.AzureStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteAzureStorage(request: azure_AzureStorage_pb.AzureStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteAzureStorage(request: azure_AzureStorage_pb.AzureStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class AzureStorageServiceClient extends grpc.Client implements IAzureStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listAzureStorage(request: azure_AzureStorage_pb.AzureStorageListRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageListResponse) => void): grpc.ClientUnaryCall;
  public listAzureStorage(request: azure_AzureStorage_pb.AzureStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageListResponse) => void): grpc.ClientUnaryCall;
  public listAzureStorage(request: azure_AzureStorage_pb.AzureStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageListResponse) => void): grpc.ClientUnaryCall;
  public getAzureStorage(request: azure_AzureStorage_pb.AzureStorageGetRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  public getAzureStorage(request: azure_AzureStorage_pb.AzureStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  public getAzureStorage(request: azure_AzureStorage_pb.AzureStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  public createAzureStorage(request: azure_AzureStorage_pb.AzureStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  public createAzureStorage(request: azure_AzureStorage_pb.AzureStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  public createAzureStorage(request: azure_AzureStorage_pb.AzureStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorage) => void): grpc.ClientUnaryCall;
  public updateAzureStorage(request: azure_AzureStorage_pb.AzureStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateAzureStorage(request: azure_AzureStorage_pb.AzureStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateAzureStorage(request: azure_AzureStorage_pb.AzureStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteAzureStorage(request: azure_AzureStorage_pb.AzureStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteAzureStorage(request: azure_AzureStorage_pb.AzureStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteAzureStorage(request: azure_AzureStorage_pb.AzureStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureStorage_pb.AzureStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

