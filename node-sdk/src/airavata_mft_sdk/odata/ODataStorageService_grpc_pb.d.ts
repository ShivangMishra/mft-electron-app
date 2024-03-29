// package: org.apache.airavata.mft.resource.service.odata
// file: odata/ODataStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as odata_ODataStorageService_pb from '../odata/ODataStorageService_pb';
import * as odata_ODataStorage_pb from '../odata/ODataStorage_pb';

interface IODataStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listODataStorage: IODataStorageServiceService_IlistODataStorage;
  getODataStorage: IODataStorageServiceService_IgetODataStorage;
  createODataStorage: IODataStorageServiceService_IcreateODataStorage;
  updateODataStorage: IODataStorageServiceService_IupdateODataStorage;
  deleteODataStorage: IODataStorageServiceService_IdeleteODataStorage;
}

interface IODataStorageServiceService_IlistODataStorage extends grpc.MethodDefinition<odata_ODataStorage_pb.ODataStorageListRequest, odata_ODataStorage_pb.ODataStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/listODataStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageListRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageListRequest>;
  responseSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageListResponse>;
  responseDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageListResponse>;
}

interface IODataStorageServiceService_IgetODataStorage extends grpc.MethodDefinition<odata_ODataStorage_pb.ODataStorageGetRequest, odata_ODataStorage_pb.ODataStorage> {
  path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/getODataStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageGetRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageGetRequest>;
  responseSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorage>;
  responseDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorage>;
}

interface IODataStorageServiceService_IcreateODataStorage extends grpc.MethodDefinition<odata_ODataStorage_pb.ODataStorageCreateRequest, odata_ODataStorage_pb.ODataStorage> {
  path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/createODataStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageCreateRequest>;
  responseSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorage>;
  responseDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorage>;
}

interface IODataStorageServiceService_IupdateODataStorage extends grpc.MethodDefinition<odata_ODataStorage_pb.ODataStorageUpdateRequest, odata_ODataStorage_pb.ODataStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/updateODataStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageUpdateRequest>;
  responseSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageUpdateResponse>;
}

interface IODataStorageServiceService_IdeleteODataStorage extends grpc.MethodDefinition<odata_ODataStorage_pb.ODataStorageDeleteRequest, odata_ODataStorage_pb.ODataStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/deleteODataStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageDeleteRequest>;
  responseSerialize: grpc.serialize<odata_ODataStorage_pb.ODataStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<odata_ODataStorage_pb.ODataStorageDeleteResponse>;
}

export const ODataStorageServiceService: IODataStorageServiceService;
export interface IODataStorageServiceServer extends grpc.UntypedServiceImplementation {
  listODataStorage: grpc.handleUnaryCall<odata_ODataStorage_pb.ODataStorageListRequest, odata_ODataStorage_pb.ODataStorageListResponse>;
  getODataStorage: grpc.handleUnaryCall<odata_ODataStorage_pb.ODataStorageGetRequest, odata_ODataStorage_pb.ODataStorage>;
  createODataStorage: grpc.handleUnaryCall<odata_ODataStorage_pb.ODataStorageCreateRequest, odata_ODataStorage_pb.ODataStorage>;
  updateODataStorage: grpc.handleUnaryCall<odata_ODataStorage_pb.ODataStorageUpdateRequest, odata_ODataStorage_pb.ODataStorageUpdateResponse>;
  deleteODataStorage: grpc.handleUnaryCall<odata_ODataStorage_pb.ODataStorageDeleteRequest, odata_ODataStorage_pb.ODataStorageDeleteResponse>;
}

export interface IODataStorageServiceClient {
  listODataStorage(request: odata_ODataStorage_pb.ODataStorageListRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageListResponse) => void): grpc.ClientUnaryCall;
  listODataStorage(request: odata_ODataStorage_pb.ODataStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageListResponse) => void): grpc.ClientUnaryCall;
  listODataStorage(request: odata_ODataStorage_pb.ODataStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageListResponse) => void): grpc.ClientUnaryCall;
  getODataStorage(request: odata_ODataStorage_pb.ODataStorageGetRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  getODataStorage(request: odata_ODataStorage_pb.ODataStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  getODataStorage(request: odata_ODataStorage_pb.ODataStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  createODataStorage(request: odata_ODataStorage_pb.ODataStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  createODataStorage(request: odata_ODataStorage_pb.ODataStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  createODataStorage(request: odata_ODataStorage_pb.ODataStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  updateODataStorage(request: odata_ODataStorage_pb.ODataStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateODataStorage(request: odata_ODataStorage_pb.ODataStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateODataStorage(request: odata_ODataStorage_pb.ODataStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteODataStorage(request: odata_ODataStorage_pb.ODataStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteODataStorage(request: odata_ODataStorage_pb.ODataStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteODataStorage(request: odata_ODataStorage_pb.ODataStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ODataStorageServiceClient extends grpc.Client implements IODataStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listODataStorage(request: odata_ODataStorage_pb.ODataStorageListRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageListResponse) => void): grpc.ClientUnaryCall;
  public listODataStorage(request: odata_ODataStorage_pb.ODataStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageListResponse) => void): grpc.ClientUnaryCall;
  public listODataStorage(request: odata_ODataStorage_pb.ODataStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageListResponse) => void): grpc.ClientUnaryCall;
  public getODataStorage(request: odata_ODataStorage_pb.ODataStorageGetRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  public getODataStorage(request: odata_ODataStorage_pb.ODataStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  public getODataStorage(request: odata_ODataStorage_pb.ODataStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  public createODataStorage(request: odata_ODataStorage_pb.ODataStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  public createODataStorage(request: odata_ODataStorage_pb.ODataStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  public createODataStorage(request: odata_ODataStorage_pb.ODataStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorage) => void): grpc.ClientUnaryCall;
  public updateODataStorage(request: odata_ODataStorage_pb.ODataStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateODataStorage(request: odata_ODataStorage_pb.ODataStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateODataStorage(request: odata_ODataStorage_pb.ODataStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteODataStorage(request: odata_ODataStorage_pb.ODataStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteODataStorage(request: odata_ODataStorage_pb.ODataStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteODataStorage(request: odata_ODataStorage_pb.ODataStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataStorage_pb.ODataStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

