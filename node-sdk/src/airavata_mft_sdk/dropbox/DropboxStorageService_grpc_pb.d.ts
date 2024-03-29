// package: org.apache.airavata.mft.resource.service.dropbox
// file: dropbox/DropboxStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as dropbox_DropboxStorageService_pb from '../dropbox/DropboxStorageService_pb';
import * as dropbox_DropboxStorage_pb from '../dropbox/DropboxStorage_pb';

interface IDropboxStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listDropboxStorage: IDropboxStorageServiceService_IlistDropboxStorage;
  getDropboxStorage: IDropboxStorageServiceService_IgetDropboxStorage;
  createDropboxStorage: IDropboxStorageServiceService_IcreateDropboxStorage;
  updateDropboxStorage: IDropboxStorageServiceService_IupdateDropboxStorage;
  deleteDropboxStorage: IDropboxStorageServiceService_IdeleteDropboxStorage;
}

interface IDropboxStorageServiceService_IlistDropboxStorage extends grpc.MethodDefinition<dropbox_DropboxStorage_pb.DropboxStorageListRequest, dropbox_DropboxStorage_pb.DropboxStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/listDropboxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageListRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageListRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageListResponse>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageListResponse>;
}

interface IDropboxStorageServiceService_IgetDropboxStorage extends grpc.MethodDefinition<dropbox_DropboxStorage_pb.DropboxStorageGetRequest, dropbox_DropboxStorage_pb.DropboxStorage> {
  path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/getDropboxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageGetRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageGetRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorage>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorage>;
}

interface IDropboxStorageServiceService_IcreateDropboxStorage extends grpc.MethodDefinition<dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, dropbox_DropboxStorage_pb.DropboxStorage> {
  path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/createDropboxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageCreateRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorage>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorage>;
}

interface IDropboxStorageServiceService_IupdateDropboxStorage extends grpc.MethodDefinition<dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/updateDropboxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse>;
}

interface IDropboxStorageServiceService_IdeleteDropboxStorage extends grpc.MethodDefinition<dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/deleteDropboxStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse>;
}

export const DropboxStorageServiceService: IDropboxStorageServiceService;
export interface IDropboxStorageServiceServer extends grpc.UntypedServiceImplementation {
  listDropboxStorage: grpc.handleUnaryCall<dropbox_DropboxStorage_pb.DropboxStorageListRequest, dropbox_DropboxStorage_pb.DropboxStorageListResponse>;
  getDropboxStorage: grpc.handleUnaryCall<dropbox_DropboxStorage_pb.DropboxStorageGetRequest, dropbox_DropboxStorage_pb.DropboxStorage>;
  createDropboxStorage: grpc.handleUnaryCall<dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, dropbox_DropboxStorage_pb.DropboxStorage>;
  updateDropboxStorage: grpc.handleUnaryCall<dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse>;
  deleteDropboxStorage: grpc.handleUnaryCall<dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse>;
}

export interface IDropboxStorageServiceClient {
  listDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageListRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageListResponse) => void): grpc.ClientUnaryCall;
  listDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageListResponse) => void): grpc.ClientUnaryCall;
  listDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageListResponse) => void): grpc.ClientUnaryCall;
  getDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageGetRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  getDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  getDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  createDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  createDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  createDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  updateDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class DropboxStorageServiceClient extends grpc.Client implements IDropboxStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageListRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageListResponse) => void): grpc.ClientUnaryCall;
  public listDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageListResponse) => void): grpc.ClientUnaryCall;
  public listDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageListResponse) => void): grpc.ClientUnaryCall;
  public getDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageGetRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  public getDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  public getDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  public createDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  public createDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  public createDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorage) => void): grpc.ClientUnaryCall;
  public updateDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteDropboxStorage(request: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

