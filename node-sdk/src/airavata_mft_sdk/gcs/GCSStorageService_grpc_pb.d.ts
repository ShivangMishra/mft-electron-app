// package: org.apache.airavata.mft.resource.service.gcs
// file: gcs/GCSStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as gcs_GCSStorageService_pb from '../gcs/GCSStorageService_pb';
import * as gcs_GCSStorage_pb from '../gcs/GCSStorage_pb';

interface IGCSStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listGCSStorage: IGCSStorageServiceService_IlistGCSStorage;
  getGCSStorage: IGCSStorageServiceService_IgetGCSStorage;
  createGCSStorage: IGCSStorageServiceService_IcreateGCSStorage;
  updateGCSStorage: IGCSStorageServiceService_IupdateGCSStorage;
  deleteGCSStorage: IGCSStorageServiceService_IdeleteGCSStorage;
}

interface IGCSStorageServiceService_IlistGCSStorage extends grpc.MethodDefinition<gcs_GCSStorage_pb.GCSStorageListRequest, gcs_GCSStorage_pb.GCSStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/listGCSStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageListRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageListRequest>;
  responseSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageListResponse>;
  responseDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageListResponse>;
}

interface IGCSStorageServiceService_IgetGCSStorage extends grpc.MethodDefinition<gcs_GCSStorage_pb.GCSStorageGetRequest, gcs_GCSStorage_pb.GCSStorage> {
  path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/getGCSStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageGetRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageGetRequest>;
  responseSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorage>;
  responseDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorage>;
}

interface IGCSStorageServiceService_IcreateGCSStorage extends grpc.MethodDefinition<gcs_GCSStorage_pb.GCSStorageCreateRequest, gcs_GCSStorage_pb.GCSStorage> {
  path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/createGCSStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageCreateRequest>;
  responseSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorage>;
  responseDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorage>;
}

interface IGCSStorageServiceService_IupdateGCSStorage extends grpc.MethodDefinition<gcs_GCSStorage_pb.GCSStorageUpdateRequest, gcs_GCSStorage_pb.GCSStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/updateGCSStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageUpdateRequest>;
  responseSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageUpdateResponse>;
}

interface IGCSStorageServiceService_IdeleteGCSStorage extends grpc.MethodDefinition<gcs_GCSStorage_pb.GCSStorageDeleteRequest, gcs_GCSStorage_pb.GCSStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/deleteGCSStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageDeleteRequest>;
  responseSerialize: grpc.serialize<gcs_GCSStorage_pb.GCSStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<gcs_GCSStorage_pb.GCSStorageDeleteResponse>;
}

export const GCSStorageServiceService: IGCSStorageServiceService;
export interface IGCSStorageServiceServer extends grpc.UntypedServiceImplementation {
  listGCSStorage: grpc.handleUnaryCall<gcs_GCSStorage_pb.GCSStorageListRequest, gcs_GCSStorage_pb.GCSStorageListResponse>;
  getGCSStorage: grpc.handleUnaryCall<gcs_GCSStorage_pb.GCSStorageGetRequest, gcs_GCSStorage_pb.GCSStorage>;
  createGCSStorage: grpc.handleUnaryCall<gcs_GCSStorage_pb.GCSStorageCreateRequest, gcs_GCSStorage_pb.GCSStorage>;
  updateGCSStorage: grpc.handleUnaryCall<gcs_GCSStorage_pb.GCSStorageUpdateRequest, gcs_GCSStorage_pb.GCSStorageUpdateResponse>;
  deleteGCSStorage: grpc.handleUnaryCall<gcs_GCSStorage_pb.GCSStorageDeleteRequest, gcs_GCSStorage_pb.GCSStorageDeleteResponse>;
}

export interface IGCSStorageServiceClient {
  listGCSStorage(request: gcs_GCSStorage_pb.GCSStorageListRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageListResponse) => void): grpc.ClientUnaryCall;
  listGCSStorage(request: gcs_GCSStorage_pb.GCSStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageListResponse) => void): grpc.ClientUnaryCall;
  listGCSStorage(request: gcs_GCSStorage_pb.GCSStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageListResponse) => void): grpc.ClientUnaryCall;
  getGCSStorage(request: gcs_GCSStorage_pb.GCSStorageGetRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  getGCSStorage(request: gcs_GCSStorage_pb.GCSStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  getGCSStorage(request: gcs_GCSStorage_pb.GCSStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  createGCSStorage(request: gcs_GCSStorage_pb.GCSStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  createGCSStorage(request: gcs_GCSStorage_pb.GCSStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  createGCSStorage(request: gcs_GCSStorage_pb.GCSStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  updateGCSStorage(request: gcs_GCSStorage_pb.GCSStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateGCSStorage(request: gcs_GCSStorage_pb.GCSStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateGCSStorage(request: gcs_GCSStorage_pb.GCSStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteGCSStorage(request: gcs_GCSStorage_pb.GCSStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteGCSStorage(request: gcs_GCSStorage_pb.GCSStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteGCSStorage(request: gcs_GCSStorage_pb.GCSStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class GCSStorageServiceClient extends grpc.Client implements IGCSStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listGCSStorage(request: gcs_GCSStorage_pb.GCSStorageListRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageListResponse) => void): grpc.ClientUnaryCall;
  public listGCSStorage(request: gcs_GCSStorage_pb.GCSStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageListResponse) => void): grpc.ClientUnaryCall;
  public listGCSStorage(request: gcs_GCSStorage_pb.GCSStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageListResponse) => void): grpc.ClientUnaryCall;
  public getGCSStorage(request: gcs_GCSStorage_pb.GCSStorageGetRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  public getGCSStorage(request: gcs_GCSStorage_pb.GCSStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  public getGCSStorage(request: gcs_GCSStorage_pb.GCSStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  public createGCSStorage(request: gcs_GCSStorage_pb.GCSStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  public createGCSStorage(request: gcs_GCSStorage_pb.GCSStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  public createGCSStorage(request: gcs_GCSStorage_pb.GCSStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorage) => void): grpc.ClientUnaryCall;
  public updateGCSStorage(request: gcs_GCSStorage_pb.GCSStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateGCSStorage(request: gcs_GCSStorage_pb.GCSStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateGCSStorage(request: gcs_GCSStorage_pb.GCSStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteGCSStorage(request: gcs_GCSStorage_pb.GCSStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteGCSStorage(request: gcs_GCSStorage_pb.GCSStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteGCSStorage(request: gcs_GCSStorage_pb.GCSStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSStorage_pb.GCSStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

