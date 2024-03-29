// package: org.apache.airavata.mft.resource.service.ftp
// file: ftp/FTPStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as ftp_FTPStorageService_pb from '../ftp/FTPStorageService_pb';
import * as ftp_FTPStorage_pb from '../ftp/FTPStorage_pb';

interface IFTPStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listFTPStorage: IFTPStorageServiceService_IlistFTPStorage;
  getFTPStorage: IFTPStorageServiceService_IgetFTPStorage;
  createFTPStorage: IFTPStorageServiceService_IcreateFTPStorage;
  updateFTPStorage: IFTPStorageServiceService_IupdateFTPStorage;
  deleteFTPStorage: IFTPStorageServiceService_IdeleteFTPStorage;
}

interface IFTPStorageServiceService_IlistFTPStorage extends grpc.MethodDefinition<ftp_FTPStorage_pb.FTPStorageListRequest, ftp_FTPStorage_pb.FTPStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/listFTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageListRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageListRequest>;
  responseSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageListResponse>;
  responseDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageListResponse>;
}

interface IFTPStorageServiceService_IgetFTPStorage extends grpc.MethodDefinition<ftp_FTPStorage_pb.FTPStorageGetRequest, ftp_FTPStorage_pb.FTPStorage> {
  path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/getFTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageGetRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageGetRequest>;
  responseSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorage>;
  responseDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorage>;
}

interface IFTPStorageServiceService_IcreateFTPStorage extends grpc.MethodDefinition<ftp_FTPStorage_pb.FTPStorageCreateRequest, ftp_FTPStorage_pb.FTPStorage> {
  path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/createFTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageCreateRequest>;
  responseSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorage>;
  responseDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorage>;
}

interface IFTPStorageServiceService_IupdateFTPStorage extends grpc.MethodDefinition<ftp_FTPStorage_pb.FTPStorageUpdateRequest, ftp_FTPStorage_pb.FTPStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/updateFTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageUpdateRequest>;
  responseSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageUpdateResponse>;
}

interface IFTPStorageServiceService_IdeleteFTPStorage extends grpc.MethodDefinition<ftp_FTPStorage_pb.FTPStorageDeleteRequest, ftp_FTPStorage_pb.FTPStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/deleteFTPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageDeleteRequest>;
  responseSerialize: grpc.serialize<ftp_FTPStorage_pb.FTPStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<ftp_FTPStorage_pb.FTPStorageDeleteResponse>;
}

export const FTPStorageServiceService: IFTPStorageServiceService;
export interface IFTPStorageServiceServer extends grpc.UntypedServiceImplementation {
  listFTPStorage: grpc.handleUnaryCall<ftp_FTPStorage_pb.FTPStorageListRequest, ftp_FTPStorage_pb.FTPStorageListResponse>;
  getFTPStorage: grpc.handleUnaryCall<ftp_FTPStorage_pb.FTPStorageGetRequest, ftp_FTPStorage_pb.FTPStorage>;
  createFTPStorage: grpc.handleUnaryCall<ftp_FTPStorage_pb.FTPStorageCreateRequest, ftp_FTPStorage_pb.FTPStorage>;
  updateFTPStorage: grpc.handleUnaryCall<ftp_FTPStorage_pb.FTPStorageUpdateRequest, ftp_FTPStorage_pb.FTPStorageUpdateResponse>;
  deleteFTPStorage: grpc.handleUnaryCall<ftp_FTPStorage_pb.FTPStorageDeleteRequest, ftp_FTPStorage_pb.FTPStorageDeleteResponse>;
}

export interface IFTPStorageServiceClient {
  listFTPStorage(request: ftp_FTPStorage_pb.FTPStorageListRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageListResponse) => void): grpc.ClientUnaryCall;
  listFTPStorage(request: ftp_FTPStorage_pb.FTPStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageListResponse) => void): grpc.ClientUnaryCall;
  listFTPStorage(request: ftp_FTPStorage_pb.FTPStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageListResponse) => void): grpc.ClientUnaryCall;
  getFTPStorage(request: ftp_FTPStorage_pb.FTPStorageGetRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  getFTPStorage(request: ftp_FTPStorage_pb.FTPStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  getFTPStorage(request: ftp_FTPStorage_pb.FTPStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  createFTPStorage(request: ftp_FTPStorage_pb.FTPStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  createFTPStorage(request: ftp_FTPStorage_pb.FTPStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  createFTPStorage(request: ftp_FTPStorage_pb.FTPStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  updateFTPStorage(request: ftp_FTPStorage_pb.FTPStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateFTPStorage(request: ftp_FTPStorage_pb.FTPStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateFTPStorage(request: ftp_FTPStorage_pb.FTPStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteFTPStorage(request: ftp_FTPStorage_pb.FTPStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteFTPStorage(request: ftp_FTPStorage_pb.FTPStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteFTPStorage(request: ftp_FTPStorage_pb.FTPStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class FTPStorageServiceClient extends grpc.Client implements IFTPStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listFTPStorage(request: ftp_FTPStorage_pb.FTPStorageListRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageListResponse) => void): grpc.ClientUnaryCall;
  public listFTPStorage(request: ftp_FTPStorage_pb.FTPStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageListResponse) => void): grpc.ClientUnaryCall;
  public listFTPStorage(request: ftp_FTPStorage_pb.FTPStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageListResponse) => void): grpc.ClientUnaryCall;
  public getFTPStorage(request: ftp_FTPStorage_pb.FTPStorageGetRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  public getFTPStorage(request: ftp_FTPStorage_pb.FTPStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  public getFTPStorage(request: ftp_FTPStorage_pb.FTPStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  public createFTPStorage(request: ftp_FTPStorage_pb.FTPStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  public createFTPStorage(request: ftp_FTPStorage_pb.FTPStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  public createFTPStorage(request: ftp_FTPStorage_pb.FTPStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorage) => void): grpc.ClientUnaryCall;
  public updateFTPStorage(request: ftp_FTPStorage_pb.FTPStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateFTPStorage(request: ftp_FTPStorage_pb.FTPStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateFTPStorage(request: ftp_FTPStorage_pb.FTPStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteFTPStorage(request: ftp_FTPStorage_pb.FTPStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteFTPStorage(request: ftp_FTPStorage_pb.FTPStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteFTPStorage(request: ftp_FTPStorage_pb.FTPStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPStorage_pb.FTPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

