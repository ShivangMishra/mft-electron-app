// package: org.apache.airavata.mft.resource.service.swift
// file: swift/SwiftStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as swift_SwiftStorageService_pb from '../swift/SwiftStorageService_pb';
import * as swift_SwiftStorage_pb from '../swift/SwiftStorage_pb';

interface ISwiftStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listSwiftStorage: ISwiftStorageServiceService_IlistSwiftStorage;
  getSwiftStorage: ISwiftStorageServiceService_IgetSwiftStorage;
  createSwiftStorage: ISwiftStorageServiceService_IcreateSwiftStorage;
  updateSwiftStorage: ISwiftStorageServiceService_IupdateSwiftStorage;
  deleteSwiftStorage: ISwiftStorageServiceService_IdeleteSwiftStorage;
}

interface ISwiftStorageServiceService_IlistSwiftStorage extends grpc.MethodDefinition<swift_SwiftStorage_pb.SwiftStorageListRequest, swift_SwiftStorage_pb.SwiftStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/listSwiftStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageListRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageListRequest>;
  responseSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageListResponse>;
  responseDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageListResponse>;
}

interface ISwiftStorageServiceService_IgetSwiftStorage extends grpc.MethodDefinition<swift_SwiftStorage_pb.SwiftStorageGetRequest, swift_SwiftStorage_pb.SwiftStorage> {
  path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/getSwiftStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageGetRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageGetRequest>;
  responseSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorage>;
  responseDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorage>;
}

interface ISwiftStorageServiceService_IcreateSwiftStorage extends grpc.MethodDefinition<swift_SwiftStorage_pb.SwiftStorageCreateRequest, swift_SwiftStorage_pb.SwiftStorage> {
  path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/createSwiftStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageCreateRequest>;
  responseSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorage>;
  responseDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorage>;
}

interface ISwiftStorageServiceService_IupdateSwiftStorage extends grpc.MethodDefinition<swift_SwiftStorage_pb.SwiftStorageUpdateRequest, swift_SwiftStorage_pb.SwiftStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/updateSwiftStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageUpdateRequest>;
  responseSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageUpdateResponse>;
}

interface ISwiftStorageServiceService_IdeleteSwiftStorage extends grpc.MethodDefinition<swift_SwiftStorage_pb.SwiftStorageDeleteRequest, swift_SwiftStorage_pb.SwiftStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/deleteSwiftStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageDeleteRequest>;
  responseSerialize: grpc.serialize<swift_SwiftStorage_pb.SwiftStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<swift_SwiftStorage_pb.SwiftStorageDeleteResponse>;
}

export const SwiftStorageServiceService: ISwiftStorageServiceService;
export interface ISwiftStorageServiceServer extends grpc.UntypedServiceImplementation {
  listSwiftStorage: grpc.handleUnaryCall<swift_SwiftStorage_pb.SwiftStorageListRequest, swift_SwiftStorage_pb.SwiftStorageListResponse>;
  getSwiftStorage: grpc.handleUnaryCall<swift_SwiftStorage_pb.SwiftStorageGetRequest, swift_SwiftStorage_pb.SwiftStorage>;
  createSwiftStorage: grpc.handleUnaryCall<swift_SwiftStorage_pb.SwiftStorageCreateRequest, swift_SwiftStorage_pb.SwiftStorage>;
  updateSwiftStorage: grpc.handleUnaryCall<swift_SwiftStorage_pb.SwiftStorageUpdateRequest, swift_SwiftStorage_pb.SwiftStorageUpdateResponse>;
  deleteSwiftStorage: grpc.handleUnaryCall<swift_SwiftStorage_pb.SwiftStorageDeleteRequest, swift_SwiftStorage_pb.SwiftStorageDeleteResponse>;
}

export interface ISwiftStorageServiceClient {
  listSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageListRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageListResponse) => void): grpc.ClientUnaryCall;
  listSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageListResponse) => void): grpc.ClientUnaryCall;
  listSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageListResponse) => void): grpc.ClientUnaryCall;
  getSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageGetRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  getSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  getSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  createSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  createSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  createSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  updateSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SwiftStorageServiceClient extends grpc.Client implements ISwiftStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageListRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageListResponse) => void): grpc.ClientUnaryCall;
  public listSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageListResponse) => void): grpc.ClientUnaryCall;
  public listSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageListResponse) => void): grpc.ClientUnaryCall;
  public getSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageGetRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  public getSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  public getSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  public createSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  public createSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  public createSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorage) => void): grpc.ClientUnaryCall;
  public updateSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSwiftStorage(request: swift_SwiftStorage_pb.SwiftStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftStorage_pb.SwiftStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

