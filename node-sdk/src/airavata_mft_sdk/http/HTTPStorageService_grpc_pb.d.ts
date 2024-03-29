// package: org.apache.airavata.mft.resource.service.http
// file: http/HTTPStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as http_HTTPStorageService_pb from '../http/HTTPStorageService_pb';
import * as http_HTTPStorage_pb from '../http/HTTPStorage_pb';

interface IHTTPStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listHTTPStorage: IHTTPStorageServiceService_IlistHTTPStorage;
  getHTTPStorage: IHTTPStorageServiceService_IgetHTTPStorage;
  createHTTPStorage: IHTTPStorageServiceService_IcreateHTTPStorage;
  updateHTTPStorage: IHTTPStorageServiceService_IupdateHTTPStorage;
  deleteHTTPStorage: IHTTPStorageServiceService_IdeleteHTTPStorage;
}

interface IHTTPStorageServiceService_IlistHTTPStorage extends grpc.MethodDefinition<http_HTTPStorage_pb.HTTPStorageListRequest, http_HTTPStorage_pb.HTTPStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/listHTTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageListRequest>;
  requestDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageListRequest>;
  responseSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageListResponse>;
  responseDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageListResponse>;
}

interface IHTTPStorageServiceService_IgetHTTPStorage extends grpc.MethodDefinition<http_HTTPStorage_pb.HTTPStorageGetRequest, http_HTTPStorage_pb.HTTPStorage> {
  path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/getHTTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageGetRequest>;
  requestDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageGetRequest>;
  responseSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorage>;
  responseDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorage>;
}

interface IHTTPStorageServiceService_IcreateHTTPStorage extends grpc.MethodDefinition<http_HTTPStorage_pb.HTTPStorageCreateRequest, http_HTTPStorage_pb.HTTPStorage> {
  path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/createHTTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageCreateRequest>;
  responseSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorage>;
  responseDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorage>;
}

interface IHTTPStorageServiceService_IupdateHTTPStorage extends grpc.MethodDefinition<http_HTTPStorage_pb.HTTPStorageUpdateRequest, http_HTTPStorage_pb.HTTPStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/updateHTTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageUpdateRequest>;
  responseSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageUpdateResponse>;
}

interface IHTTPStorageServiceService_IdeleteHTTPStorage extends grpc.MethodDefinition<http_HTTPStorage_pb.HTTPStorageDeleteRequest, http_HTTPStorage_pb.HTTPStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/deleteHTTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageDeleteRequest>;
  responseSerialize: grpc.serialize<http_HTTPStorage_pb.HTTPStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<http_HTTPStorage_pb.HTTPStorageDeleteResponse>;
}

export const HTTPStorageServiceService: IHTTPStorageServiceService;
export interface IHTTPStorageServiceServer extends grpc.UntypedServiceImplementation {
  listHTTPStorage: grpc.handleUnaryCall<http_HTTPStorage_pb.HTTPStorageListRequest, http_HTTPStorage_pb.HTTPStorageListResponse>;
  getHTTPStorage: grpc.handleUnaryCall<http_HTTPStorage_pb.HTTPStorageGetRequest, http_HTTPStorage_pb.HTTPStorage>;
  createHTTPStorage: grpc.handleUnaryCall<http_HTTPStorage_pb.HTTPStorageCreateRequest, http_HTTPStorage_pb.HTTPStorage>;
  updateHTTPStorage: grpc.handleUnaryCall<http_HTTPStorage_pb.HTTPStorageUpdateRequest, http_HTTPStorage_pb.HTTPStorageUpdateResponse>;
  deleteHTTPStorage: grpc.handleUnaryCall<http_HTTPStorage_pb.HTTPStorageDeleteRequest, http_HTTPStorage_pb.HTTPStorageDeleteResponse>;
}

export interface IHTTPStorageServiceClient {
  listHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageListRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageListResponse) => void): grpc.ClientUnaryCall;
  listHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageListResponse) => void): grpc.ClientUnaryCall;
  listHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageListResponse) => void): grpc.ClientUnaryCall;
  getHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageGetRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  getHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  getHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  createHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  createHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  createHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  updateHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class HTTPStorageServiceClient extends grpc.Client implements IHTTPStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageListRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageListResponse) => void): grpc.ClientUnaryCall;
  public listHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageListResponse) => void): grpc.ClientUnaryCall;
  public listHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageListResponse) => void): grpc.ClientUnaryCall;
  public getHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageGetRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  public getHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  public getHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  public createHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  public createHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  public createHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorage) => void): grpc.ClientUnaryCall;
  public updateHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteHTTPStorage(request: http_HTTPStorage_pb.HTTPStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HTTPStorage_pb.HTTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

