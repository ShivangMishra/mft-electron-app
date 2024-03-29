// package: org.apache.airavata.mft.resource.service.box
// file: box/BoxStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as box_BoxStorageService_pb from '../box/BoxStorageService_pb';
import * as box_BoxStorage_pb from '../box/BoxStorage_pb';

interface IBoxStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listBoxStorage: IBoxStorageServiceService_IlistBoxStorage;
  getBoxStorage: IBoxStorageServiceService_IgetBoxStorage;
  createBoxStorage: IBoxStorageServiceService_IcreateBoxStorage;
  updateBoxStorage: IBoxStorageServiceService_IupdateBoxStorage;
  deleteBoxStorage: IBoxStorageServiceService_IdeleteBoxStorage;
}

interface IBoxStorageServiceService_IlistBoxStorage extends grpc.MethodDefinition<box_BoxStorage_pb.BoxStorageListRequest, box_BoxStorage_pb.BoxStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/listBoxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageListRequest>;
  requestDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageListRequest>;
  responseSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageListResponse>;
  responseDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageListResponse>;
}

interface IBoxStorageServiceService_IgetBoxStorage extends grpc.MethodDefinition<box_BoxStorage_pb.BoxStorageGetRequest, box_BoxStorage_pb.BoxStorage> {
  path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/getBoxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageGetRequest>;
  requestDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageGetRequest>;
  responseSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorage>;
  responseDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorage>;
}

interface IBoxStorageServiceService_IcreateBoxStorage extends grpc.MethodDefinition<box_BoxStorage_pb.BoxStorageCreateRequest, box_BoxStorage_pb.BoxStorage> {
  path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/createBoxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageCreateRequest>;
  responseSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorage>;
  responseDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorage>;
}

interface IBoxStorageServiceService_IupdateBoxStorage extends grpc.MethodDefinition<box_BoxStorage_pb.BoxStorageUpdateRequest, box_BoxStorage_pb.BoxStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/updateBoxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageUpdateRequest>;
  responseSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageUpdateResponse>;
}

interface IBoxStorageServiceService_IdeleteBoxStorage extends grpc.MethodDefinition<box_BoxStorage_pb.BoxStorageDeleteRequest, box_BoxStorage_pb.BoxStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/deleteBoxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageDeleteRequest>;
  responseSerialize: grpc.serialize<box_BoxStorage_pb.BoxStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<box_BoxStorage_pb.BoxStorageDeleteResponse>;
}

export const BoxStorageServiceService: IBoxStorageServiceService;
export interface IBoxStorageServiceServer extends grpc.UntypedServiceImplementation {
  listBoxStorage: grpc.handleUnaryCall<box_BoxStorage_pb.BoxStorageListRequest, box_BoxStorage_pb.BoxStorageListResponse>;
  getBoxStorage: grpc.handleUnaryCall<box_BoxStorage_pb.BoxStorageGetRequest, box_BoxStorage_pb.BoxStorage>;
  createBoxStorage: grpc.handleUnaryCall<box_BoxStorage_pb.BoxStorageCreateRequest, box_BoxStorage_pb.BoxStorage>;
  updateBoxStorage: grpc.handleUnaryCall<box_BoxStorage_pb.BoxStorageUpdateRequest, box_BoxStorage_pb.BoxStorageUpdateResponse>;
  deleteBoxStorage: grpc.handleUnaryCall<box_BoxStorage_pb.BoxStorageDeleteRequest, box_BoxStorage_pb.BoxStorageDeleteResponse>;
}

export interface IBoxStorageServiceClient {
  listBoxStorage(request: box_BoxStorage_pb.BoxStorageListRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageListResponse) => void): grpc.ClientUnaryCall;
  listBoxStorage(request: box_BoxStorage_pb.BoxStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageListResponse) => void): grpc.ClientUnaryCall;
  listBoxStorage(request: box_BoxStorage_pb.BoxStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageListResponse) => void): grpc.ClientUnaryCall;
  getBoxStorage(request: box_BoxStorage_pb.BoxStorageGetRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  getBoxStorage(request: box_BoxStorage_pb.BoxStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  getBoxStorage(request: box_BoxStorage_pb.BoxStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  createBoxStorage(request: box_BoxStorage_pb.BoxStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  createBoxStorage(request: box_BoxStorage_pb.BoxStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  createBoxStorage(request: box_BoxStorage_pb.BoxStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  updateBoxStorage(request: box_BoxStorage_pb.BoxStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateBoxStorage(request: box_BoxStorage_pb.BoxStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateBoxStorage(request: box_BoxStorage_pb.BoxStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteBoxStorage(request: box_BoxStorage_pb.BoxStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteBoxStorage(request: box_BoxStorage_pb.BoxStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteBoxStorage(request: box_BoxStorage_pb.BoxStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class BoxStorageServiceClient extends grpc.Client implements IBoxStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listBoxStorage(request: box_BoxStorage_pb.BoxStorageListRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageListResponse) => void): grpc.ClientUnaryCall;
  public listBoxStorage(request: box_BoxStorage_pb.BoxStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageListResponse) => void): grpc.ClientUnaryCall;
  public listBoxStorage(request: box_BoxStorage_pb.BoxStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageListResponse) => void): grpc.ClientUnaryCall;
  public getBoxStorage(request: box_BoxStorage_pb.BoxStorageGetRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  public getBoxStorage(request: box_BoxStorage_pb.BoxStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  public getBoxStorage(request: box_BoxStorage_pb.BoxStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  public createBoxStorage(request: box_BoxStorage_pb.BoxStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  public createBoxStorage(request: box_BoxStorage_pb.BoxStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  public createBoxStorage(request: box_BoxStorage_pb.BoxStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorage) => void): grpc.ClientUnaryCall;
  public updateBoxStorage(request: box_BoxStorage_pb.BoxStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateBoxStorage(request: box_BoxStorage_pb.BoxStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateBoxStorage(request: box_BoxStorage_pb.BoxStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteBoxStorage(request: box_BoxStorage_pb.BoxStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteBoxStorage(request: box_BoxStorage_pb.BoxStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteBoxStorage(request: box_BoxStorage_pb.BoxStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxStorage_pb.BoxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

